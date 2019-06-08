import { OPEN, MODAL, EMAIL, PROVIDER } from 'constantValues/CommonConstants'

const PASSWORD_INPUT = 'socialSignUp'
const PASSWORD_INPUT_MODAL = PASSWORD_INPUT + MODAL
const PASSWORD_INPUT_MODAL_OPEN = PASSWORD_INPUT_MODAL + OPEN
const PASSWORD_INPUT_MODAL_EMAIL = PASSWORD_INPUT_MODAL + EMAIL
const PASSWORD_INPUT_MODAL_PROVIDER = PASSWORD_INPUT_MODAL + PROVIDER
const PASSWORD_INPUT_MODAL_CALLBACK = PASSWORD_INPUT_MODAL + 'CallBack'

export {
	PASSWORD_INPUT_MODAL_OPEN,
	PASSWORD_INPUT_MODAL_EMAIL,
	PASSWORD_INPUT_MODAL_CALLBACK,
	PASSWORD_INPUT_MODAL_PROVIDER,
}
