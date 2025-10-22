import {z} from "zod";

export const createTaskSchema = z.object({
    title: z.string().nonempty({ message: "Title is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    // aceptar strings de fecha y convertir a Date (opcional)
    date: z
      .preprocess((val) => {
        if (typeof val === "string" && val !== "") return new Date(val);
        return val;
      }, z.date())
      .optional(),
});