export interface Lesson {
    id: string | null,
    title: string | null,
    description: string | null,
    duration: number | null,
    order: number | null
    videoUrl: string | null,
    viewCount: number | null,
    created_at: Date | null,
    updated_at: Date | null,
}