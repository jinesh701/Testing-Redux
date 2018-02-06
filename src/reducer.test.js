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
        let state = {
            guesses: [10, 20, 30],
            feedback: "You got it",
            correctAnswer: 30
        }

        const correctAnswer = 20;
        state = reducer(state, restartGame(correctAnswer))
        expect(state.guesses).toEqual([])
        expect(state.feedback).toEqual("Make your guess!")
        expect(state.auralStatus).toEqual('')
        expect(state.correctAnswer).toEqual(correctAnswer)
    })
})

describe("makeGuess", () => {
    it("Should make a guess", () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 80
        }

        state = reducer(state, makeGuess(10))
        expect(state.guesses).toEqual([10])
        expect(state.feedback).toEqual("You're Ice Cold...")

        state = reducer(state, makeGuess(31))
        expect(state.guesses).toEqual([10, 31])
        expect(state.feedback).toEqual("You're Cold...")

        state = reducer(state, makeGuess(60))
        expect(state.guesses).toEqual([10, 31, 60])
        expect(state.feedback).toEqual("You're Warm.")

        state = reducer(state, makeGuess(75))
        expect(state.guesses).toEqual([10, 31, 60, 75])
        expect(state.feedback).toEqual("You're Hot!")

        state = reducer(state, makeGuess(80))
        expect(state.guesses).toEqual([10, 31, 60, 75, 80])
        expect(state.feedback).toEqual("You got it!")
    })
})