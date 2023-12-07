import type { CurrentUserAPIResponse } from "../types/current-user.types";

export const getCurrentUser = async (token: string) => {
  const url = "https://api.spotify.com/v1/me";
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener el usuario actual");
    }

    const data = await response.json() as CurrentUserAPIResponse;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
