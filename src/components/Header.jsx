import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";

export default function HeaderReact({ user, bg, active }) {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const playlistsDiv = document.getElementById("home");
    const bibliotecaSection = document.getElementById("header");
    function handleScroll() {
      if (playlistsDiv.scrollTop >= 240) {
        bibliotecaSection.classList.add(bg);
      } else {
        bibliotecaSection.classList.remove(bg);
      }
    }
    playlistsDiv.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header} id="header">
      <nav className={styles.nav}>
        <div className={styles.nav__buttons}>
          <a
            href="/"
            className={active ? styles.buttons__active : styles.buttons__item}
            aria-label="Volver"
            data-astro-prefetch="viewport"
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </a>
        </div>
        <div className={styles.nav__links}>
          <a
            href="https://github.com/sebastianterleira/astro-spotify-clone"
            className={styles["link__item--premium"]}
            aria-label="Star on Github"
            target="_blank"
            rel="noreferrer"
          >
            Star on Github
          </a>
          <a
            href="https://open.spotify.com/download"
            className={styles["link__item--download"]}
            aria-label="Instalar app"
          >
            <svg
              height="16"
              width="16"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
            </svg>

            <spam>Instalar app</spam>
          </a>
          <div
            className={styles.dropdown}
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <picture className={styles.content__user}>
              <img
                src={user.images[0]?.url}
                height="24"
                width="24"
                className={styles.user__img}
                alt={`Avatar del usuario ${user.display_name}`}
              />
            </picture>
            <div className={activeMenu ? styles.menuActive : styles.menu}>
              <ul>
                <li>
                  <button onClick={() => window.location.reload()}>
                    <spam className={styles["menu__item--logout"]}>Logout</spam>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
