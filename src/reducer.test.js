import reducer from "./reducer"
import {
    restartGame,
    generateAuralUpdate,
    makeGuess
} from "./actions"

describe("Reducer", () => {
    it("Should set the initial state when nothing is passed in", () => {
        const state = reducer(undefined, {
            type: "__UNKNOWN"
        })

        expect(state.guesses).toEqual([])
        expect(state.feedback).toEqual('Make your guess!')
        expect(state.auralStatus).toEqual('')
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
        expect(state.correctAnswer).toBeLessThanOrEqual(100)
    })

    it("Should return the current state on an unknown action", () => {
        let currentState = {}
        const state = reducer(currentState, {
            type: "__UNKNOWN"
        })
        expect(state).toEqual(currentState)
    })
})

describe("restartGame", () => {
    it("Should restart the game", () => {

    })
})