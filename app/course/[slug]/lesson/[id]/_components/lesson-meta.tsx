interface LessonMetaProps {
    title: string
    views: number
    date: Date
    description: string
}

function getDaysAgo(date: Date) {
    const today = new Date()
    const diff = today.getTime() - date.getTime()
    return Math.floor(diff / (1000 * 3600 * 24))
}

export function LessonMeta(props: LessonMetaProps) {
    return <div className={"flex flex-col gap-[15px] my-[10px] w-full"}>
        <h1 className={"text-2xl font-semibold"}>{props.title}</h1>

        <div className={"rounded-lg p-[10px] bg-primary-foreground flex flex-col gap-[10px] text-sm w-full"}>
            <div className={"flex items-center gap-1 "}>
                <span>{props.views} visualizações</span>
                <span>•</span>
                <span>há {getDaysAgo(props.date)} dias</span>
            </div>

            <p className={"text-[15px] line-clamp-5 w-full break-words"}>{props.description}
            </p>
        </div>
    </div>
}