import { createSlice } from "@reduxjs/toolkit";
import {shuffleCards} from '../utils/utils'

export const frameworksSlice = createSlice({
  name: "frameworks",
  initialState: {
    frameworks: [
      "angular2",
      "vue",
      "react",
      "grunt",
      "phantomjs",
      "ember",
      "babel",
      "ionic",
      "gulp",
      "meteor",
      "yeoman",
      "yarn",
      "nodejs",
      "bower",
      "browserify",
    ],
    randomizedFrameworks: [],
    activeFrameworks: [],
    completedFrameworks: [],
    score: 0,
  },
  reducers: {
    startGame: (state) => {
      state.randomizedFrameworks = shuffleCards(state.frameworks.concat(state.frameworks))
      state.score = 0;
      state.activeFrameworks = [];
      state.completedFrameworks = [];
    },

    pickCard: (state, action) => {
      state.activeFrameworks = [...state.activeFrameworks, action.payload];
    },
    checkCards: (state) => {
      if ( state.activeFrameworks[0].name === state.activeFrameworks[1].name 
            && state.activeFrameworks[0].id !== state.activeFrameworks[1].id
      )
      {
        state.completedFrameworks = [
          ...state.completedFrameworks,
          state.activeFrameworks[0],
          state.activeFrameworks[1],
        ]
        state.score += 50;
      } 
      else {
        state.score -= 10;
      }
      state.activeFrameworks = [];
    },
  },
});

export const { pickCard, checkCards, startGame } = frameworksSlice.actions;
export default frameworksSlice.reducer;
