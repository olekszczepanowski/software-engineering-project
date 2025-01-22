import vine from '@vinejs/vine'
export const createRentalValidator = vine.compile(
  vine.object({
    bikeId: vine.number(),
    userId: vine.number(),
  })
)
