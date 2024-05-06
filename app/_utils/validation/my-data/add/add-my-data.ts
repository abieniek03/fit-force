import * as z from "zod";
import { messages } from "../../messages";

export const addMyDataSchema = z.object({
  birthDate: z.string({ required_error: messages.required }),
  height: z.string({ required_error: messages.required }),
});
