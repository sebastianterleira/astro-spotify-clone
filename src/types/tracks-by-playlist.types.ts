export interface TracksByPlaylistAPIResponse {
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
  added_by:        AddedBy;
  is_local:        boolean;
  primary_color:   null;
  track:           Track;
  video_thumbnail: VideoThumbnail;
}

export interface AddedBy {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          AddedByType;
  uri:           string;
  name?:         string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum AddedByType {
  Artist = "artist",
  User = "user",
}

export interface Track {
  album:             Album;
  artists:           AddedBy[];
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
  preview_url:       string;
  track:             boolean;
  track_number:      number;
  type:              TrackType;
  uri:               string;
}

export interface Album {
  album_type:             AlbumTypeEnum;
  artists:                AddedBy[];
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           Date;
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

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export enum ReleaseDatePrecision {
  Day = "day",
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
