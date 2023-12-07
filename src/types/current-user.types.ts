export interface CurrentUserAPIResponse {
  display_name:     string;
  external_urls:    ExternalUrls;
  href:             string;
  id:               string;
  images:           Image[];
  type:             string;
  uri:              string;
  followers:        Followers;
  country:          string;
  product:          string;
  explicit_content: ExplicitContent;
  email:            string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked:  boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href:  null;
  total: number;
}

export interface Image {
  url:    string;
  height: number;
  width:  number;
}
