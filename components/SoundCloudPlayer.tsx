import SoundCloudAudio from 'soundcloud-audio';
import { useRef, useEffect } from 'react'

export default function SoundCloudPlayer() {
  const sc = useRef(null)

  useEffect(() => {
    sc.current = new SoundCloudAudio("FfGdwQbgPnr2SGjtap7Sdw3G06ctgQ46");
    // ts-ignore
    return () => sc.current?.pause();
  }, [])

  return (
    <div>
      <button onClick={() => sc.current.play()}>Play</button>
      <button onClick={() => sc.current.pause()}>Pause</button>
    </div>
  )
}
