import { useEffect, useState } from "react";
import { getTrack } from "@services/service.getTrack";
import type { SpotifyTrackAPIResponse } from "src/types/item-track.type";
import { useStore } from '@nanostores/react';
import { getTrackId } from '../lib/getTrackId';
import styles from "../styles/Footer.module.css";
import Cookies from "js-cookie";

export default function Footer() {
  const [track, setTrack] = useState<SpotifyTrackAPIResponse | null>(null);

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
  return (
    <div className={styles.footer}>
      <div className={styles.footer__track}>
        <picture className={styles.picture}>
          <img src={track?.album?.images[0]?.url} alt={`Cover del track ${track?.name}`} width={56} height={56} className={styles.picture__img}/>
        </picture>
        <header>
          <p className={`${styles.title} ${styles.hidden__text}`}>{track?.name}</p>
          <p className={`${styles.artist} ${styles.hidden__text}`}>{track?.album?.artists[0]?.name}</p>
        </header>
      </div>
    </div>
  );
}
