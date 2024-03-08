import {pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
    id: text("id").primaryKey(),
    avatar: text("avatar",).notNull(),
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