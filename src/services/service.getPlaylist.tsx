import type { ItemPlaylistAPIResponse } from "../types/item-playlist.types";

export const getPlaylistTracks = async (token: string, playlist_id: string) => {
  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener el playlist");
    }

    const data = await response.json() as ItemPlaylistAPIResponse;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
