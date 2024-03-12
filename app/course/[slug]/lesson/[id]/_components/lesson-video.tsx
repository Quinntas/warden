"use client"

import {VideoPlayer} from "@/components/video-player";
import {useEffect, useState} from "react";

interface LessonVideoProps {
    url: string
}

export default function LessonVideo(props: LessonVideoProps) {
    const [watchedTime, setWatchedTime] = useState<number>(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            updateWatchedTime(watchedTime)
        }, 1050)

        return () => {
            clearTimeout(timeout)
        }
    }, [watchedTime])

    function updateWatchedTime(time: number) {
        // await updateLessonWatch(props.id, props.lessonWatch.userId, time)
        console.log(time)
    }

    return <VideoPlayer
        onProgress={setWatchedTime}
        url={props.url}/>
}