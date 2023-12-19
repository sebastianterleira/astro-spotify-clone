import type { SpotifyTrackAPIResponse } from "../types/item-track.type";

export const getTrack = async (token: string, track_id: string) => {
  const url = `https://api.spotify.com/v1/tracks/${track_id}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener el track");
    }

    const data = await response.json() as SpotifyTrackAPIResponse;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
