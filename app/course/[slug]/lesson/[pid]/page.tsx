import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {VideoPlayer} from "@/components/video-player";
import {Suspense} from "react";
import {LessonMeta} from "@/app/course/[slug]/lesson/[pid]/_components/lesson-meta";
import {LessonNav} from "@/app/course/[slug]/lesson/[pid]/_components/lesson-nav";

export default function Lesson() {
    return <PageBox>
        <Navbar/>

        <Suspense>
            <div className={"w-[100%] h-[300px]"}>
                <VideoPlayer url={"https://www.youtube.com/watch?v=gRAVZv7V91Q&ab_channel=leddoo"}/>
            </div>
        </Suspense>

        <LessonMeta/>

        <LessonNav/>

        <Footer/>
    </PageBox>
}