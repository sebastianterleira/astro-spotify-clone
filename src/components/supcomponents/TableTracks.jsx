import { useEffect } from "react";
import style from "../../styles/Tabletrack.module.css";

export default function TableTracks() {
  useEffect(() => {
    const playlistsDiv = document.getElementById("home");
    const bibliotecaSection = document.getElementById("table__tracks");
    function handleScroll() {
      if (playlistsDiv.scrollTop >= 300) {
        bibliotecaSection.classList.add(style.header__pos);
      } else {
        bibliotecaSection.classList.remove(style.header__pos);
      }
    }
    playlistsDiv.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ paddingBottom: "1.5rem" }}></div>
      <header
        className={style.table__header}
        style={{ top: "4.0625rem" }}
        id="table__tracks"
      >
        <nav className={style.header__container}>
          <p className={style["header__column--number"]}>#</p>
          <p className={style.header__column} style={{ marginRight: "16rem" }}>
            Titulo
          </p>
          <p className={style.header__column} style={{ marginRight: "9.3rem" }}>
            Álbum
          </p>
          <div style={{ maxWidth: "10rem", marginRight: "5rem" }}>
            <p className={style.header__column}>Fecha en la que se añadio</p>
          </div>
          <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
          </svg>
        </nav>
      </header>
    </>
  );
}
