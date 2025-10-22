import { ZodError } from "zod";

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        error: error.issues.map((issue) => issue.message),
      });
    }

    console.error("Unexpected validation error:", error);
    return res.status(500).json({ error: ["Internal server error"] });
  }
};