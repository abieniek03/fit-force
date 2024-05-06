import * as z from "zod";
import { messages } from "../../messages";

export const addTrainingCampSchema = z.object({
  title: z.string({ required_error: messages.required }),
  startDate: z.string({ required_error: messages.required }),
  endDate: z.string({ required_error: messages.required }),
});
