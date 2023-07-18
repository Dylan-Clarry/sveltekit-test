import { relations } from "drizzle-orm";
import { pgTable, varchar, boolean, serial, integer } from "drizzle-orm/pg-core";

export const tUser = pgTable("tUser", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 25 }).notNull(),
    email: varchar("email", { length: 25 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
});

export const tTodo = pgTable("tTodo", {
    id: serial("id").primaryKey(),
    text: varchar("text", { length: 25 }).notNull(),
    completed: boolean("completed").notNull(),
    userid: integer("userid").notNull(),
});

export const tUserRelations = relations(tUser, ({ many }) => ({
    todos: many(tTodo),
}));

export const tTodoRelations = relations(tTodo, ({ one }) => ({
    user: one(tUser, {
        fields: [tTodo.userid],
        references: [tUser.id],
    }),
}));
