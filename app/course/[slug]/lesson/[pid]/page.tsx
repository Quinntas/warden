import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {VideoPlayer} from "@/components/video-player";
import {Suspense} from "react";
import {LessonMeta} from "@/app/course/[slug]/lesson/[pid]/_components/lesson-meta";
import {LessonNav} from "@/app/course/[slug]/lesson/[pid]/_components/lesson-nav";

export default async function Lesson() {
    return <PageBox>
        <Navbar/>

        <Suspense>
            <div className={"w-[100%] h-[300px] lg:h-[600px]"}>
                <VideoPlayer
                    url={"https://ueqradle8xowa5dj.public.blob.vercel-storage.com/test/test-TyHMigdUff0XLHDvWFGRQEfbF62jsm.mp4"}/>
            </div>
        </Suspense>

        <LessonMeta/>

        <LessonNav/>

        <Footer/>
    </PageBox>
}