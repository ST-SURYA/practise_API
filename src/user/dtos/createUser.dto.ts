import { z } from 'zod';

export const CreateUserSchema = z
  .object({
    userName: z.string(),
    password: z.string(),
  })
  .required();

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
