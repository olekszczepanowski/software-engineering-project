import vine from '@vinejs/vine'
import { DateTime } from 'luxon'
export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string(),
    surname: vine.string(),
    email: vine.string(),
    password: vine.string(),
    joinDate: vine.date().transform((date) => DateTime.fromJSDate(date)),
    birthDate: vine.date().transform((date) => DateTime.fromJSDate(date)),
    phoneNumber: vine.string(),
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    name: vine.string(),
    surname: vine.string(),
    email: vine.string(),
    // joinDate: vine.date().transform((date) => DateTime.fromJSDate(date)),
    // birthDate: vine.date().transform((date) => DateTime.fromJSDate(date)),
  })
)
