import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {CourseCardBox} from "@/app/_components/course/course-card-box";
import {PageBox} from "@/app/_components/page-box";
import {Suspense} from "react";

export default function Home() {
    return <>
        <PageBox>
            <Navbar/>

            <Suspense>
                <CourseCardBox/>
            </Suspense>

            <Footer/>
        </PageBox>
    </>
}
