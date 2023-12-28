import { countTrack } from "../../lib/countTracks";
import { convertDate } from "../../lib/convertDate";
import { msToMin } from "../../lib/msToMin";
import { getTrackId } from "../../lib/getTrackId";
import styles from "../../styles/ListTracks.module.css";

export default function ListTracks({ listTracks }) {
  const handleClick = (track_id) => {
    getTrackId.set(track_id);
  };

  const trackNum = countTrack(listTracks.total);
  return (
    <>
      {listTracks?.items?.length !== 0 ? (
        listTracks?.items?.map((track, index) => (
          <div
            onClick={() => handleClick(track.track.id)}
            className={styles.card}
            key={index}
          >
            <div style={{ position: "relative", width: "1rem" }}>
              <p
                className={`${styles.card__numberTrack} ${styles.position__trackNum}`}
              >
                {trackNum[index]}
              </p>
              <div className={styles.icon__play}>
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
            <div className={styles.card__columnTitle}>
              <picture className={styles.content__imgTrack}>
                <img
                  src={track.track.album.images[2].url}
                  height={40}
                  width={40}
                  className={styles.img__track}
                  alt={`Cover del album de la cancion ${track.track.name}`}
                />
              </picture>
              <div className={styles.content__titles}>
                <p className={`${styles.track__tile} ${styles.hidden__text}`}>
                  {track.track.name}
                </p>
                <p className={`${styles.track__artist} ${styles.hidden__text}`}>
                  {track.track.artists[0].name +
                    `${
                      track.track?.artists[1]?.name === undefined
                        ? ""
                        : ", " + track.track?.artists[1]?.name
                    } `}
                </p>
              </div>
            </div>
            <div className={styles.card__columnAlbum}>
              <div className={styles.content__album}>
                <p className={`${styles.album__name} ${styles.hidden__text}`}>
                  {track.track.album.name}
                </p>
              </div>
            </div>
            <div className={styles.card__columnAdded}>
              <div className={styles.content__added}>
                <p className={`${styles.album__name} ${styles.hidden__text}`}>
                  {convertDate(track.added_at)}
                </p>
              </div>
            </div>
            <div style={{ position: "relative", marginLeft: "2rem" }}>
              <p
                className={`${styles.album__name} ${styles.hidden__text} ${styles.position_trackDuration}`}
              >
                {msToMin(track.track.duration_ms)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <section className={styles.no__tracks}>
          <div className={styles.line} />
          <h2 className={styles["no__tracks--text"]}>
            No hay nada en esta lista ...
          </h2>
        </section>
      )}
    </>
  );
}
