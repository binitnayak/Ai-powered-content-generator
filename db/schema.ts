import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aioutput", {
  id: serial("id").primaryKey(),

  formData: varchar("formdata", { length: 255 }).notNull(),

  aiResponse: text("airesponse"),

  templateSlug: varchar("templateslug", { length: 255 }).notNull(),

  createdBy: varchar("createdby", { length: 255 }).notNull(),

  createdAt: timestamp("createdat").defaultNow(),
});