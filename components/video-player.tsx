"use client"


import dynamic from 'next/dynamic'
import {useRef} from "react";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});


interface VideoPlayerProps {
    url: string
    onSeek?: (seconds: number) => void
    onProgress?: (progress: number) => void
    onReady?: (player: any) => void
    onStart?: () => void
    onPause?: () => void
    onError?: (e: any) => void
    onEnded?: () => void
}

export function VideoPlayer(props: VideoPlayerProps) {
    const ref = useRef(null);

    return <>
        <ReactPlayer
            fallback={<span>Loading</span>}
            onReady={(player) => props.onReady && props.onReady(player)}
            onStart={() => props.onStart && props.onStart()}
            onProgress={(progress) => props.onProgress && props.onProgress(progress.playedSeconds)}
            onPause={() => props.onPause && props.onPause()}
            onSeek={(seconds) => props.onSeek && props.onSeek(seconds)}
            onError={(e) => props.onError && props.onError(e)}
            onEnded={() => props.onEnded && props.onEnded()}
            playsinline
            controls
            volume={0.5}
            ref={ref}
            width={"100%"}
            height={"100%"}
            style={{
                borderRadius: "4px",
                overflow: "hidden"
            }}
            config={{
                file: {
                    attributes: {
                        controlsList: 'nodownload'
                    },
                },

            }}
            url={props.url}/>
    </>
}
