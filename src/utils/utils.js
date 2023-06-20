import { nanoid } from "@reduxjs/toolkit";

export const shuffleCards = (duplicatedFrameworks) => {
    const cards = duplicatedFrameworks.map((framework) => {
      return {
        name: framework,
        id: nanoid(),
        src: `/assets/${framework}.png`,
      };
    });
  
    let tempArray = []
    let usedIndexes = []
  
    while (tempArray.length !== duplicatedFrameworks.length) {
      let randomIndex = Math.floor(Math.random() * duplicatedFrameworks.length)
  
      if (!usedIndexes.includes(randomIndex)) {
        usedIndexes.push(randomIndex)
        tempArray.push(cards[randomIndex])
      } 
      else continue
    }
    console.log(tempArray)
    return tempArray
  }