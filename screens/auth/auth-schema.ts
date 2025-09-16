import {z} from "zod"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,30}$/;
export const signupSchema = z.object({
    firstName: z.string('First name is required'),
    lastName: z.string('Last name is required'),
    email: z.email({pattern: z.regexes.email}),
    username: z.string().optional(),
    password: z.string("Password is required").regex(passwordRegex),
    confirmPassword: z.string("Confrim password is required").regex(passwordRegex),
})

export const signInSchema = z.object({
    email: z.email({pattern: z.regexes.email, error: "Invalid email"}),
    password: z.string("Password is required")
})