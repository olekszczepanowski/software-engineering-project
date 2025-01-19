import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string(),
    surname: vine.string(),
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    surname: vine.string().optional(),
    email: vine.string().email().optional(),
    phoneNumber: vine.string().optional(),
    birthDate: vine.date().optional(),
    joinDate: vine.date().optional(),
  })
)
