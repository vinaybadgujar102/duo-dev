import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("testing", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});
