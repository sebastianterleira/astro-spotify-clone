import { useEffect, useRef, useState } from "react";
import { getTrack } from "@services/service.getTrack";
import type { SpotifyTrackAPIResponse } from "src/types/item-track.type";
import { useStore } from '@nanostores/react';
import { getTrackId } from '../lib/getTrackId';
import styles from "../styles/Footer.module.css";
import Cookies from "js-cookie";
import { Slider } from "./Slider";

const Pause = () => (
  <svg
  height="26"
  width="30"
  viewBox="0 0 24 24"
  fill="currentColor"
  ><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
  </svg>
)

const Play = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z">
    </path></svg>
)

const CoverPlaylistDefault = () => (
  <svg
  height="24"
  width="24"
  role="img"
  aria-hidden="true"
  viewBox="0 0 24 24"
  fill="currentColor"
  ><path
    d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"
  ></path></svg>
)

export default function Footer() {
  const [track, setTrack] = useState<SpotifyTrackAPIResponse | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | undefined>()

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  }

  const $getTrackId = useStore(getTrackId);
  
  const hash = Cookies.get("token");
  const token = hash?.substring(1).split("&")[0].split("=")[1];
  
  useEffect(() => {
    const getMusic = async () => {
      const data = await getTrack(token, $getTrackId);
      setTrack(data);
    };

    getMusic();
  }, [$getTrackId]);

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying]);

  console.log(audioRef.current?.duration)

  return (
    <div className={styles.footer}>
      <div className={styles.footer__track}>
            { $getTrackId !== null ? (
                <picture className={styles.picture}>
                  <img src={track?.album?.images[0]?.url} alt={`Cover del track ${track?.name}`} width={56} height={56} className={styles.picture__img}/>
                </picture>
              ) : (
                <picture className={styles.svg__cover}>
                  <CoverPlaylistDefault />
                </picture>
              )
            }
        <header>
          {
            $getTrackId !== null ? (
              <>
                <p className={`${styles.title} ${styles.hidden__text}`}>{track?.name}</p>
                <p className={`${styles.artist} ${styles.hidden__text}`}>{track?.album?.artists[0]?.name}</p>
              </>
            ) : (
              <>
                <p className={`${styles.title} ${styles.hidden__text}`}>No track</p>
                <p className={`${styles.artist} ${styles.hidden__text}`}>No artist</p>
              </>
            )
          }
        </header>
      </div>
      <div className={styles.footer__player}>
        <div>
          {
            $getTrackId !== null ? (
              <button className={styles.button__player} onClick={handleClick}>
                {isPlaying && track?.preview_url ? <Play /> : <Pause />}
              </button>
              ) : (
                <button className={styles.button__player__DISABLE}>
                  <Pause />
                </button>
              )
            }
          {
            track?.preview_url &&
            <audio ref={audioRef} src={track?.preview_url} autoPlay={isPlaying} />
          }
      </div>
      <div className={styles.footer__volume}>
          <Slider defaultValue={[100]} max={100} min={0} style={{ width: "98px" }} onValueChange={(value) => {
            if ($getTrackId && track?.preview_url) {
              const [newVolume] = value;
              audioRef.current.volume = newVolume / 100;
              }
            }}
          />
      </div>
    </div>
  );
}
