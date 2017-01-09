import C from './constants'
// What does C mean here?

import { errors } from './store/reducers'

const state = [
	"user not authorized",
	"server feed not found"
]

const action = {
	type: C.CLEAR_ERROR,
	payload: 0
}

const nextState = errors(state, action)

console.log(`

    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}

`)