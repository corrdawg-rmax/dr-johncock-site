/**
 * Config loader. Reads /src/data/config.json once at build time
 * and exposes a typed object to every page and component.
 *
 * Usage:
 *   import { config } from "~/lib/config";
 *   <h1>{config.practice.name}</h1>
 *
 * When tenants override config, only this file's source changes , every
 * page picks up the new values automatically.
 */
import rawConfig from "../data/config.json";

export interface NavLink { label: string; href: string; }
export interface FooterColumn { title: string; links: NavLink[]; }
export interface ClientImage {
  id: string;
  file_path: string;
  original_filename: string;
  image_type: string;
  alt_text: string;
  description: string;
  visible_people: string;
  location_context: string;
  date_taken: string;
  supplied_by: string;
  rights_status: string;
  consent_confirmed: boolean;
  preferred_placements: string[];
  avoid_placements: string[];
  related_services: string[];
  related_conditions: string[];
  priority: string;
  usage_frequency: string;
  crop_focus: string;
  notes: string;
}

export interface Config {
  practice: {
    name: string;
    tagline: string;
    short_description: string;
    city: string;
    state: string;
    state_full: string;
    has_assigned_doctor: boolean;
    founded_year: number | null;
    years_experience: number | null;
    custom_note: string;
  };
  doctor: {
    name: string;
    first_name: string;
    credentials: string;
    title: string;
    bio_short: string;
    photo: string;
    board_certifications: string[];
    education: string[];
    custom_note: string;
  };
  contact: {
    phone: string;
    phone_raw: string;
    email: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zip: string;
    google_maps_embed_url: string;
    google_maps_link: string;
    custom_note: string;
  };
  hours: Record<string, string> & { custom_note: string };
  branding: {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    supporting_slate: string;
    dark_text: string;
    light_bg: string;
    logo_path: string;
    logo_alt: string;
    favicon_path: string;
    favicon_svg_path: string;
    favicon_png_96_path: string;
    apple_touch_icon_path: string;
    web_app_manifest_192_path: string;
    web_app_manifest_512_path: string;
    webmanifest_path: string;
    logo_text_mode?: string;
    logo_display_text: string;
    logo_display_text_color: string;
    logo_text_style?: string;
    typography: {
      heading_font_family: string;
      heading_weights: number[];
      body_font_family: string;
      body_weights: number[];
      base_font_size_px: number;
      scale_ratio: number;
      line_height_body: number;
      line_height_heading: number;
      letter_spacing_heading: string;
      letter_spacing_body: string;
    };
  };
  keywords: {
    primary: string;
    primary_alt: string;
    primary_local: string;
    primary_local_alt: string;
    secondary: string[];
    service_terms: string[];
  };
  nearby_areas: string[];
  navigation: {
    main: NavLink[];
    footer_columns: FooterColumn[];
  };
  schema: {
    business_type: string;
    medical_specialty: string;
    price_range: string;
    latitude: number | null;
    longitude: number | null;
    accepts_reservations: boolean;
  };
  features: {
    has_blog: boolean;
    has_pricing_page: boolean;
    has_reviews_widget: boolean;
    has_appointment_form: boolean;
    show_doctor_section: boolean;
  };
  custom_value_props: {
    enabled: boolean;
    section_title: string;
    section_subtitle: string;
    props: Array<{ icon: string; headline: string; body: string }>;
  };
  publishing: {
    sitemap_source: string;
    sitemap_tabs: { pages: string; blog: string };
    publish_column_header: string;
    publish_values_on: string[];
    publish_values_off: string[];
    default_when_blank: string;
    respect_sitemap_publish_flag: boolean;
    tenant_overrides: { force_show: string[]; force_hide: string[] };
  };
  insurance_providers: {
    enabled: boolean;
    is_demo_data: boolean;
    logo_folder_path: string;
    custom_note: string;
    section_title: string;
    section_subtitle: string;
    display_mode: string;
    show_disclaimer: boolean;
    disclaimer: string;
    fallback_text: string;
    show_cta: boolean;
    cta_label: string;
    cta_href: string;
    providers: Array<{
      name: string;
      short_name: string;
      logo_path: string;
      alt_text: string;
      in_network: boolean;
      plan_types: string[];
      notes: string;
    }>;
  };
  forms: Record<string, {
    label: string;
    provider: string;
    form_id: string;
    form_name: string;
    default_height_px: number;
    container_max_width_px: number;
    show_on_pages: string[];
    embed_html: string;
  } | string>; // string for _how_to_update
  client_images?: {
    enabled: boolean;
    has_manifest: boolean;
    upload_folder_path: string;
    manifest_path: string;
    prefer_client_images_over_template: boolean;
    photos: ClientImage[];
  };
  seo: {
    default_title: string;
    default_description: string;
    site_url: string;
  };
}

export const config = rawConfig as unknown as Config;

/** Convenience helper: is the demo build (no assigned doctor)? */
export const isDemo = (): boolean => !config.practice.has_assigned_doctor;

/** Phone link helper: returns tel: URL */
export const telLink = (): string => `tel:${config.contact.phone_raw}`;

/** Format address for schema and display */
export const fullAddress = (): string => {
  const cityLine = [config.contact.city, config.contact.state, config.contact.zip]
    .filter(Boolean)
    .join(" ");
  const parts = [
    config.contact.address_line_1,
    config.contact.address_line_2,
    cityLine,
  ].filter(Boolean);
  return parts.join(", ");
};

/** Pick a tenant/client image for a placement when available. */
export const getClientImage = (placement: string, fallbackType = ""): ClientImage | undefined => {
  const library = config.client_images;
  if (!library?.enabled || !Array.isArray(library.photos)) return undefined;
  return library.photos.find((photo) => {
    const placementMatch = photo.preferred_placements?.includes(placement);
    const typeMatch = fallbackType ? photo.image_type === fallbackType : true;
    const allowed = !photo.avoid_placements?.includes(placement);
    return placementMatch && typeMatch && allowed && photo.usage_frequency !== "do_not_use";
  }) || library.photos.find((photo) => {
    const placementMatch = photo.preferred_placements?.includes(placement);
    const allowed = !photo.avoid_placements?.includes(placement);
    return placementMatch && allowed && photo.usage_frequency !== "do_not_use";
  });
};

/** Does a form's show_on_pages match a given path? Supports wildcards. */
export const formShowsOn = (formSlug: string, path: string): boolean => {
  const form = config.forms[formSlug];
  if (!form || typeof form === "string") return false;
  return form.show_on_pages.some((pattern: string) => {
    if (pattern === path) return true;
    if (pattern.endsWith("/*")) {
      const prefix = pattern.slice(0, -2);
      return path.startsWith(prefix);
    }
    return false;
  });
};
