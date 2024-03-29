import { useEffect } from "react";
import styles from "../styles/Login.module.css";
import Cookies from "js-cookie";
import { apiUrl, clientId, redirectUrl } from "src/config";

export default function Login() {
  useEffect(() => {
    const inOneHour = new Date(new Date().getTime() + 15 * 60 * 4000)
    const tokenHash = window.location.hash;

    if (tokenHash !== "") {
      window.location.href = "/";
      Cookies.set("token", tokenHash, {expires: inOneHour});
    }
  }, []);

  const handleClick = () => {
    const scope = [
      "user-read-email",
      "user-read-private",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <main className={styles.main}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Logo de Spotify"
        className={styles.img}
      />
      <button onClick={handleClick} className={styles.button}>
        Connect Spotify
      </button>
    </main>
  );
}
