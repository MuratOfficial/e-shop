import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
initialProducts: [
    
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product1"
        },
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product2"
        },
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product3"
        },
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product4"
        },
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product5"
        },
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product6"
        },
        {
          priceOriginal: 50.55,
          discount:50,
          img:"/assets/image.png",
          price:48.58899,
          title:"Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          id: "product7"
        },
    
       
      
]


}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer