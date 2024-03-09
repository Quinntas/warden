import {integer, json, pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";


export const courseCategoryTable = pgTable("course_category", {
    id: text("id").primaryKey(),
    courseId: text("course_id").notNull().references(() => courseTable.id),
    categoryId: text("category_id").notNull().references(() => categoryTable.id),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const categoryTable = pgTable("category", {
    id: text("id").primaryKey(),
    name: varchar("name", {length: 191}).notNull().unique(),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const courseEnrollmentTable = pgTable("course_enrollment", {
    id: text("id").primaryKey(),
    courseId: text("course_id").notNull().references(() => courseTable.id),
    userId: text("user_id").notNull().references(() => userTable.id),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const courseReviewTable = pgTable("course_review", {
    id: text("id").primaryKey(),
    reviewId: text("review_id").notNull().references(() => reviewTable.id),
    courseId: text("course_id").notNull().references(() => courseTable.id),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const reviewTable = pgTable("review", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => userTable.id),
    rating: integer("rating").notNull().default(1),
    review: text("review").notNull().default(""),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const lessonTable = pgTable("lesson", {
    id: text("id").primaryKey(),
    title: varchar("title", {length: 191}).notNull(),
    description: text("description").notNull().default(""),
    videoUrl: text("video").notNull(),
    courseId: text("course_id").notNull().references(() => courseTable.id),
    viewCount: integer("view_count").notNull().default(0),
    order: integer("order").notNull().default(0),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const courseTable = pgTable("course", {
    id: text("id").primaryKey(),
    title: varchar("title", {length: 191}).notNull(),
    slug: varchar("slug", {length: 191}).notNull().unique(),
    description: text("description").notNull().default(""),
    price: integer("price").notNull().default(0),
    thumbnail: text("thumbnail").notNull(),
    enrolled: integer("enrolled").notNull().default(0),
    overview: json("overview").notNull().default({}),
    teacherId: text("teacher_id").notNull().references(() => userTable.id),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const userTable = pgTable("user", {
    id: text("id").primaryKey(),
    avatar: text("avatar",).notNull().default("https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand"),
    username: varchar("username", {length: 191}).notNull(),
    email: varchar("email", {length: 191}).notNull().unique(),
    hashed_password: text("hashed_password").notNull(),
    created_at: timestamp("created_at", {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updated_at: timestamp("updated_at", {mode: 'date', withTimezone: true}).defaultNow().notNull()
});

export const sessionTable = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});