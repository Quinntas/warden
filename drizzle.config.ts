import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    schema: "./lib/database/database-tables.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL_NO_SSL!,
    },
    verbose: true,
    strict: true,
})