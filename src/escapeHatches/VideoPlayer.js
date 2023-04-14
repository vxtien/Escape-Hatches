import { useRef, useState } from "react"

const VideoPlayer=()=>{
    const [isPlaying, setPlaying] = useState(false);
    const ref = useRef(null);
    const handleClick=()=>{
        const nextIsPlaying = !isPlaying;
        setPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    const handlePlay=()=>{
        setPlaying(true)
    }
    const handlePause=()=>{
        setPlaying(false)
    }
    return(
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width='250'
                ref={ref}
                onPlay={handlePlay}
                onPause={handlePause}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}
export default VideoPlayer;