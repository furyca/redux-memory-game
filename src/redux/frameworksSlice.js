import { createSlice } from "@reduxjs/toolkit";

const shuffleCards = (duplicatedFrameworks, state) =>  {
    let tempArray = []
    let usedIndexes = []
    while (tempArray.length !== duplicatedFrameworks.length) {
    let randomIndex = Math.floor(Math.random()*duplicatedFrameworks.length)
    if (!usedIndexes.includes(randomIndex)) {
        usedIndexes.push(randomIndex)
        tempArray.push(duplicatedFrameworks[randomIndex])
    }
    else continue
    }

    return tempArray
}

export const frameworksSlice = createSlice({
    name: 'frameworks',
    initialState:{
        frameworks: ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'],
        randomizedFrameworks: [],
        activeFrameworks: [],
        completedFrameworks: [],
        score: 0,
    },
    reducers: {
        startGame: (state) => {
            let duplicatedFrameworks = state.frameworks.concat(state.frameworks)
            state.randomizedFrameworks = shuffleCards(duplicatedFrameworks, state)
            state.score = 0
            state.activeFrameworks = []
            state.completedFrameworks = []
        },

        pickCard: (state, action) => {
            if (state.activeFrameworks.length < 2) {
                state.activeFrameworks = [...state.activeFrameworks, action.payload]
            }
        },
        checkCards: (state, action) => {
            if ((state.activeFrameworks[0].name === state.activeFrameworks[1].name)
            && (state.activeFrameworks[0].id !== state.activeFrameworks[1].id)) {
                state.completedFrameworks = [...state.completedFrameworks, state.activeFrameworks[0]]
                state.completedFrameworks = [...state.completedFrameworks, state.activeFrameworks[1]]
                state.score+=50
            }
            else {
                state.score-=10
            }
            state.activeFrameworks = []
        },
    },
})

export const {pickCard, checkCards, startGame} = frameworksSlice.actions;
export default frameworksSlice.reducer;