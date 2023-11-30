export interface PlaylistsSpotifyAPIResponse {
  href:     string;
  items:    Item[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface Item {
  collaborative: boolean;
  description:   string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  images:        Image[];
  name:          string;
  owner:         Owner;
  primary_color: null;
  public:        boolean;
  snapshot_id:   string;
  tracks:        Tracks;
  type:          ItemType;
  uri:           string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number | null;
  url:    string;
  width:  number | null;
}

export interface Owner {
  display_name:  string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          OwnerType;
  uri:           string;
}

export enum OwnerType {
  User = "user",
}

export interface Tracks {
  href:  string;
  total: number;
}

export enum ItemType {
  Playlist = "playlist",
}
