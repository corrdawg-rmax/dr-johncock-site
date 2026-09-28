const RMAX_HOST = 'dr-johncock-site.r-max.workers.dev';

function finish(response, requestUrl, origin) {
  const result = new Response(response.body, response);
  const location = result.headers.get('location');
  if (location) {
    const destination = new URL(location, `https://${RMAX_HOST}`);
    if (destination.hostname === RMAX_HOST) {
      destination.protocol = requestUrl.protocol;
      destination.host = requestUrl.host;
      result.headers.set('location', destination.href);
    }
  }
  result.headers.set('x-site-origin', origin);
  return result;
}

export default {
  async fetch(request, env) {
    const original = new URL(request.url);
    const target = new URL(request.url);
    target.protocol = 'https:';
    target.host = RMAX_HOST;
    // Service bindings cannot name a Worker in the other Cloudflare account.
    const forwarded = new Request(target, new Request(request, { redirect: 'manual' }));
    const canFallback = request.method === 'GET' || request.method === 'HEAD';
    try {
      const response = await fetch(forwarded);
      if (response.status < 500 || !canFallback) {
        return finish(response, original, 'rmax');
      }
      await response.body?.cancel();
      console.error(JSON.stringify({ event: 'rmax_origin_failure', status: response.status }));
    } catch (error) {
      console.error(JSON.stringify({ event: 'rmax_origin_unavailable', error: error.name }));
      if (!canFallback) return new Response('Service unavailable', { status: 502 });
    }
    return finish(await env.ASSETS.fetch(request), original, 'personal-fallback');
  },
};
