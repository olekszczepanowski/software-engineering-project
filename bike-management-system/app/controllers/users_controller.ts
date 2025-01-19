import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const users = User.all()
    return users
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const user = await User.create(payload)
    return {
      message: 'User created.',
      user,
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const userId = params.id

    return await User.findOrFail(userId)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const userId = params.id
    const currentUser = await User.findOrFail(userId)
    currentUser.merge(payload)
    await currentUser.save()
    return {
      message: 'User updated successfully.',
      user: userId,
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const userId = params.userId
    const user = await User.findOrFail(userId)
    await user.delete()
    return {
      message: 'User deleted successfully.',
      userId,
    }
  }
}
