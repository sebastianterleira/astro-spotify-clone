import { useEffect } from "react";
import styles from "../../styles/aside.module.css"

export default function PlaylistsAsideMenu() {
  useEffect(() => {
    const playlistsDiv = document.getElementById("playlistContainer");
    const bibliotecaSection = document.getElementById("Biblioteca");
    function handleScroll() {
      if (playlistsDiv.scrollTop >= 1) {
        bibliotecaSection.classList.add("bottom-shadow");
        console.log(playlistsDiv.scrollTop)
      } else {
        bibliotecaSection.classList.remove("bottom-shadow");
      }
    }

    // Agregar el eventListener al evento de desplazamiento
    playlistsDiv.addEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <ul className={styles["box__content--p"]} id="Biblioteca" data-astro-prefetch="hover">
      <a className={styles.enlace} href="/">
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
        </svg>
        Tu biblioteca
      </a>
    </ul>
  );
}
