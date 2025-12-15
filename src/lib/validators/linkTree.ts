import { z } from "zod";


const ICON_PREFIX_REGEX = /fa-[a-z-]*/
const icon_field_validator = z.string()
    .regex(ICON_PREFIX_REGEX, "O nome precisa começar com 'fa-', só é possivel usar letras e -.")


export const LinkTreeIconValidator = z.object({
    type: icon_field_validator,
    name: icon_field_validator
})


export const LinkTreeItemValidator = z.object({
    title: z.string()
        .min(1, "O titulo é requerido."),
    url: z.url("A url precisa ser valida!"),
    icon: z.union([LinkTreeIconValidator, z.null()])
})