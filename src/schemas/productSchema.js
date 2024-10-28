import { object, string, number } from "yup";

export const productSchema = object({
  imageUrl: string().url().required(),
  name: string().required(),
  count: number().required().positive().integer(),
  size: {
    width: number().required().positive(),
    height: number().required().positive(),
  },
  weight: number().required().positive(),
  comments: [],
});
