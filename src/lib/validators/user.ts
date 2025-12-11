import { z } from "zod";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]*$/;
const username_validator = z.string()
    .min(5, {
        abort: true,
        error: "O username exige 5 caracteres minimos"
    })
    .max(50, {
        abort: true,
        error: "O username exige 50 caracteres no maximo"
    })
    .regex(USERNAME_REGEX, "O usuario pode conter apenas letras, números e _")
const password_validator = z.string()
    .min(8, {
        abort: true,
        error: "A senha exige 8 caracteres minimos"
    })
    .max(100, {
        abort: true,
        error: "A senha exige 100 caracteres no maximo"
    })

export const UserLoginValidator = z.object({
    username: username_validator,
    password: password_validator
})

export const UserSinginValidator = z.object({
    username: username_validator,
    password: password_validator,
    key: z.string()
        .nonempty({
            abort: true,
            error: "A Chave de registro não deve ser nula"
        })
        .refine((value) =>
            value === `${process.env.REGISTER_KEY}`,
            "Chave de registro incorreta")
})