//import { relations } from "drizzle-orm";
import { mysqlTable, varchar, boolean, serial } from "drizzle-orm/mysql-core";

export const todosTable = mysqlTable("todos", {
    id: serial("id").primaryKey(),
    text: varchar("text", { length: 25 }).notNull(),
    completed: boolean("completed").notNull()
});
