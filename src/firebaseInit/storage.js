import { firebaseStorage, auth } from 'firebaseInit/core'

import { fbStorageUserAvatarPath } from 'constantValues'

const storageSetGenerator = path => {
	const ref = () => firebaseStorage.ref(path(auth().currentUser.uid))
	const get = () => ref().getDownloadURL()
	const set = dataUrl => ref().putString(dataUrl, 'data_url')
	const remove = () => ref().delete()
	return [get, set, remove]
}

const [
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
] = storageSetGenerator(fbStorageUserAvatarPath)

export { storageUserAvatarGet, storageUserAvatarSet, storageUserAvatarRemove }
