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
  <svg fill="currentColor" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z">
    </path></svg>
)

const VolumeMuteIcon = () => (
  <svg fill="currentColor" data-encore-id="icon" role="presentation" height="16" width="16" aria-label="Volumen apagado" aria-hidden="true" viewBox="0 0 16 16"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
)

const VolumeLowIcon = () => (
  <svg fill="currentColor" data-encore-id="icon" role="presentation" height="16" width="16" aria-label="Volumen bajo" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path></svg>
)

const VolumeMediumIcon = () => (
  <svg fill="currentColor" data-encore-id="icon" role="presentation" height="16" width="16" aria-label="Volumen medio" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path></svg>
)

const VolumeHighIcon = () => (
  <svg fill="currentColor" data-encore-id="icon" role="presentation" height="16" width="16" aria-label="Volumen alto" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
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
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | undefined>();
  const previousVolumeRef = useRef(volume)

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  }

  const handleMute = () => {
    const isVolumeSilenced = volume < 0.1

    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current)
    } else {
      previousVolumeRef.current = volume
      setVolume(0)
    }
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

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume]);

  useEffect(() => {
    if (track?.preview_url && $getTrackId) {
      audioRef.current.src = track?.preview_url;
      audioRef.current.volume = volume
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [track?.preview_url]);

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
          {
            $getTrackId && track?.preview_url ? (
              <button className={styles.button__player} onClick={handleClick}>
                {isPlaying  ? <Play /> : <Pause />}
              </button>
              ) : (
                <button className={styles.button__player__DISABLE}>
                  <Play />
                </button>
              )
            }
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)}/>
      </div>
      <div className={styles.footer__volume}>
        <div className={styles.control__volume}>
        <button onClick={handleMute}>
          {
            volume === 0 ? <VolumeMuteIcon /> : 
            volume < 0.3 ? <VolumeLowIcon /> :
            volume < 0.7 ? <VolumeMediumIcon /> : <VolumeHighIcon /> 
          }
        </button>
          <Slider defaultValue={[100]} max={100} min={0} value={[volume * 100]} style={{ width: "98px", backgroundColor: "hsla(0,0%,100%,.3)" }} onValueChange={(value) => {
              const [newVolume] = value;
              const volumeValue = newVolume / 100;
              setVolume(volumeValue); 
          }}
          />
          </div>
      </div>
    </div>
  );
}
