import {
    GENERATE_AURAL_UPDATE,
    generateAuralUpdate,
    RESTART_GAME,
    restartGame,
    MAKE_GUESS,
    makeGuess
} from "./actions"

describe("generateAuralUpdate", () => {
    it('Should return an action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE)
    })
})