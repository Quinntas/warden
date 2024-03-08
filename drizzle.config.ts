import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    schema: "./lib/database/database-tables.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
})