import * as z from "zod";

export const editTrainingCampSchema = z.object({
  title: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});
