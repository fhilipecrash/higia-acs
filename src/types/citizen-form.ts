import { z } from "zod"

export const citizenFormSchema = z.object({
  social_name: z.string(),
  birth_municipality_ibge_code: z.string(),
  birth_date: z.coerce.date(),
  full_name: z.string(),
  mother_name: z.string(),
  citizen_cns: z.string(),
  birth_country_code: z.coerce.number(),
  race_color_code: z.coerce.number(),
  gender_code: z.coerce.number(),
  father_name: z.string(),
  citizen_cpf: z.string(),
  occupation_cbo_code: z.string(),
  gender_identity_code: z.coerce.number()
})

export type CitizenFormType = z.infer<typeof citizenFormSchema>