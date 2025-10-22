import { ZodError } from "zod";

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    return next();
  } catch (err) {
    if (!(err instanceof ZodError)) return res.status(400).json({ body: { _error: ["Invalid request"] } });

    const issues = err.issues || [];
    const errors = {};
    issues.forEach((issue) => {
      const key = issue.path?.[0] ?? "_";
      errors[key] = errors[key] ? [...errors[key], issue.message] : [issue.message];
    });

    return res.status(400).json({ body: errors });
  }
};