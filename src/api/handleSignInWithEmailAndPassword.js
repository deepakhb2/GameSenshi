import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_4 } from 'constantValues'
import { simplerResponseHandling } from 'utils'

const handleSignInWithEmailAndPassword = async (email, password) => {
	// sign in set local persistence by default, allowing user to auto sign in
	// https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0

	return auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => simplerResponseHandling(true))
		.catch(err => {
			// Handle Errors here.
			switch (err.code) {
				case 'auth/invalid-email':
				case 'auth/user-disabled':
				case 'auth/user-not-found':
				case 'auth/wrong-password':
					return simplerResponseHandling(false, 'Invalid Email or Password')
				default:
					return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_4, err)
			}
		})
}

export { handleSignInWithEmailAndPassword }
