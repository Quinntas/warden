import {CourseStatusBadge} from "@/app/_components/course/course-status-badge";
import {getEnrolledStudentWithCourseId} from "@/lib/course/getEnrolledStudentWithCourseId";
import {EnrollButton} from "@/app/course/[slug]/_components/enroll-button";
import Link from "next/link";


interface CourseEnrollProps {
    price: number
    userId: string
    courseId: string
}


export async function CourseEnroll(props: CourseEnrollProps) {
    let isEnrolled = false

    if (props.userId) {
        const enrolled = await getEnrolledStudentWithCourseId(props.courseId, props.userId)
        isEnrolled = enrolled.isEnrolled
    }

    return <>
        {isEnrolled ?
            <EnrollButton>
                <Link href={"#"}>
                    <h2>You already are enrolled</h2>
                </Link>
            </EnrollButton> :
            <EnrollButton>
                <h2>Enroll this course for</h2>
                <CourseStatusBadge price={props.price}/>
            </EnrollButton>
        }
    </>
}