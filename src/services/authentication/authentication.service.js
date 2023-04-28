import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

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
    const { authUser } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    )
    const user = setDoc(doc(db, 'users', authUser.user.uid), {
      name: 'CK',
      score: userData.score,
    })
    return user
  } catch (error) {
    throw error
  }
}
