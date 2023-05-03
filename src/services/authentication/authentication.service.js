import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../../firebase'

export const login = async (email, password) => {
  try {
    const { authUser } = await signInWithEmailAndPassword(auth, email, password)

    return authUser
  } catch (error) {
    throw error
  }
}

export const register = async (userData, confirmPassword) => {
  try {
    if (userData.password !== confirmPassword) {
      throw new Error('Passwords do not match')
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    )

    return user
  } catch (error) {
    throw error
  }
}
