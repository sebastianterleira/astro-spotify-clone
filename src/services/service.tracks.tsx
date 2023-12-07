import type { TracksAPIResponse } from "../types/tracks.type";
import { getPlaylistsData } from "./service.getAllPlaylists";

export const getTracks = async (token: string) => {

  const { items } = await getPlaylistsData(token)
  const tracks = Promise.all(items.map(async (playlist) =>  {
    try {
      const response = await fetch(playlist.tracks.href, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Error al obtener las listas de canciones");
      }
  
      const data = await response.json() as TracksAPIResponse;
      return data.items
      
    } catch (error) {
      console.error("Error:", error.message);
    }
  }))
  return tracks
};

