export interface TracksAPIResponse {
  href:     string;
  items:    Item[];
  limit:    number;
  next:     null;
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
  id:            ID;
  type:          AddedByType;
  uri:           URI;
  name?:         Name;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ID {
  The1OmO0LAKuNHuN7AIFbuJUP = "1OmO0lAKuNHuN7AIFbuJUP",
  The1WGIhYkKWSq4YACTTkCkSX = "1wGIhYkKWSq4yACtTkCkSX",
  The2PvyE8W9RWESQxkyAWZqgY = "2pvyE8W9RWESQxkyAWZqgY",
  V24Ee4Tqnb7X4Fv1Xtd1R6Lni = "v24ee4tqnb7x4fv1xtd1r6lni",
}

export enum Name {
  Apache = "Apache",
  Canserbero = "Canserbero",
  NicoJP = "NicoJP",
}

export enum AddedByType {
  Artist = "artist",
  User = "user",
}

export enum URI {
  SpotifyArtist1OmO0LAKuNHuN7AIFbuJUP = "spotify:artist:1OmO0lAKuNHuN7AIFbuJUP",
  SpotifyArtist1WGIhYkKWSq4YACTTkCkSX = "spotify:artist:1wGIhYkKWSq4yACtTkCkSX",
  SpotifyArtist2PvyE8W9RWESQxkyAWZqgY = "spotify:artist:2pvyE8W9RWESQxkyAWZqgY",
  SpotifyUserV24Ee4Tqnb7X4Fv1Xtd1R6Lni = "spotify:user:v24ee4tqnb7x4fv1xtd1r6lni",
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
  preview_url:       null | string;
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
  release_date:           string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumTypeEnum;
  uri:                    string;
}

export enum AlbumTypeEnum {
  Album = "album",
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
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
