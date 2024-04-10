import * as z from "zod";
import { messages } from "../../messages";

export const addWeightSchema = z.object({
  date: z.string({ required_error: messages.required }),
  weight: z.string({ required_error: messages.required }),
});
