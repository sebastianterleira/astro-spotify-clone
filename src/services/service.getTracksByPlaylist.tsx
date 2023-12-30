import type { TracksByPlaylistAPIResponse } from "src/types/tracks-by-playlist.types";

export const getTracksByPlaylist = async (token: string, playlist_id: string) => {
  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?offset=0&limit=10&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los tracks");
    }

    const data = await response.json() as TracksByPlaylistAPIResponse;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
