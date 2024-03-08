import {DrizzlePostgreSQLAdapter} from "@lucia-auth/adapter-drizzle";

import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres";
import * as schema from "@/lib/database/database-tables";
import {sessionTable, userTable} from "@/lib/database/database-tables";

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});

export const db = drizzle(pool, {schema});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);