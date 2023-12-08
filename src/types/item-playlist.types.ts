export interface ItemPlaylistAPIResponse {
  collaborative: boolean;
  description:   string;
  external_urls: ExternalUrls;
  followers:     Followers;
  href:          string;
  id:            string;
  images:        Image[];
  name:          string;
  owner:         Owner;
  primary_color: null;
  public:        boolean;
  snapshot_id:   string;
  tracks:        Tracks;
  type:          string;
  uri:           string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href:  null;
  total: number;
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export interface Owner {
  display_name?: string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          OwnerType;
  uri:           string;
  name?:         string;
}

export enum OwnerType {
  Artist = "artist",
  User = "user",
}

export interface Tracks {
  href:     string;
  items:    Item[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface Item {
  added_at:        Date;
  added_by:        Owner;
  is_local:        boolean;
  primary_color:   null;
  track:           Track;
  video_thumbnail: VideoThumbnail;
}

export interface Track {
  album:             Album;
  artists:           Owner[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  episode:           boolean;
  explicit:          boolean;
  external_ids:      ExternalIDS;
  external_urls:     ExternalUrls;
  href:              string;
  id:                string;
  is_local:          boolean;
  name:              string;
  popularity:        number;
  preview_url:       null | string;
  track:             boolean;
  track_number:      number;
  type:              TrackType;
  uri:               string;
}

export interface Album {
  album_type:             AlbumTypeEnum;
  artists:                Owner[];
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumTypeEnum;
  uri:                    string;
}

export enum AlbumTypeEnum {
  Album = "album",
  Compilation = "compilation",
  Single = "single",
}

export enum ReleaseDatePrecision {
  Day = "day",
  Year = "year",
}

export interface ExternalIDS {
  isrc: string;
}

export enum TrackType {
  Track = "track",
}

export interface VideoThumbnail {
  url: null;
}
