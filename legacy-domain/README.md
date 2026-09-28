# Existing public address

The website assets are deployed to the RMax `dr-johncock-site` Worker using the repository-root Wrangler configuration.

The public hostname `dr-johncock.findfootcare.com` belongs to the shared `findfootcare.com` zone in the Personal Cloudflare account. Until that shared zone is moved, the existing Personal Worker forwards requests to the RMax Worker without changing the visitor address. This folder contains that Personal forwarding Worker, not the RMax website deployment.

It preserves paths, query strings and redirects, streams the response, and retains the previously deployed static files as an availability fallback for GET/HEAD requests if the RMax origin returns a server error or cannot be reached. The `x-site-origin` response header distinguishes normal RMax responses from fallback responses.

Build the static site first with `npm ci` and `npm run build`. Validate this separate configuration before publishing it. Use an authentication profile with access to the Personal account; the configuration explicitly pins the Personal account ID. Normal GitHub publishing must use the repository-root RMax configuration, not this folder.

The prior Personal production version `89719df4-57eb-41dd-bbbf-819bfad2dbf3` remains available for rollback. The initial tested forwarding version is `735e8fc0-7a09-45ae-a08c-e5c84ca0f532`.
