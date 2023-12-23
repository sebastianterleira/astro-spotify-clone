import { countTrack } from "../../lib/countTracks";
import { convertDate } from "../../lib/convertDate";
import { msToMin } from "../../lib/msToMin";
import { getTrackId } from "../../lib/getTrackId";
import styles from "../../styles/ListTracks.module.css";

export default function ListTracks({ playlist }) {
  const handleClick = (track_id) => {
    getTrackId.set(track_id);
  };

  const trackNum = countTrack(playlist.tracks.total);
  return (
    <>
      {playlist.tracks.items.length !== 0 ? (
        playlist?.tracks?.items.map((track, index) => (
          <div
            onClick={() => handleClick(track.track.id)}
            class={styles.card}
            key={index}
          >
            <div style={{ position: "relative", width: "1rem" }}>
              <p
                class={`${styles.card__numberTrack} ${styles.position__trackNum}`}
              >
                {trackNum[index]}
              </p>
              <div class={styles.icon__play}>
                <svg
                  height="21"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                </svg>
              </div>
            </div>
            <div class={styles.card__columnTitle}>
              <picture class={styles.content__imgTrack}>
                <img
                  src={track.track.album.images[2].url}
                  height={40}
                  width={40}
                  class={styles.img__track}
                  alt={`Cover del album de la cancion ${track.track.name}`}
                />
              </picture>
              <div class={styles.content__titles}>
                <p class={`${styles.track__tile} ${styles.hidden__text}`}>
                  {track.track.name}
                </p>
                <p class={`${styles.track__artist} ${styles.hidden__text}`}>
                  {track.track.artists[0].name +
                    `${
                      track.track?.artists[1]?.name === undefined
                        ? ""
                        : ", " + track.track?.artists[1]?.name
                    } `}
                </p>
              </div>
            </div>
            <div class={styles.card__columnAlbum}>
              <div class={styles.content__album}>
                <p class={`${styles.album__name} ${styles.hidden__text}`}>
                  {track.track.album.name}
                </p>
              </div>
            </div>
            <div class={styles.card__columnAdded}>
              <div class={styles.content__added}>
                <p class={`${styles.album__name} ${styles.hidden__text}`}>
                  {convertDate(track.added_at)}
                </p>
              </div>
            </div>
            <div style={{ position: "relative", marginLeft: "2rem" }}>
              <p
                class={`${styles.album__name} ${styles.hidden__text} ${styles.position_trackDuration}`}
              >
                {msToMin(track.track.duration_ms)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <section class={styles.no__tracks}>
          <div class={styles.line} />
          <h2 class={styles["no__tracks--text"]}>
            No hay nada en esta lista ...
          </h2>
        </section>
      )}
    </>
  );
}
