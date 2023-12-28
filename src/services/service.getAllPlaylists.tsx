import { type PlaylistsSpotifyAPIResponse } from "../types/playlists.type"

export const getAllPlaylists = async (token: string) => {
  const url = "https://api.spotify.com/v1/me/playlists?limit=12";
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener las listas de reproducción");
    }

    const data = await response.json() as PlaylistsSpotifyAPIResponse;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
