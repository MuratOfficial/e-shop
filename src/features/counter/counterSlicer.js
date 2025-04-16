import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  basket:[],
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
          priceOriginal: 60.50,
          discount:50,
          img:"/assets/products/1.png",
          price:49.4957820,
          title:"Г/Ц Блинчики с мясом вес, Россия",
          id: "product2"
        },
        {
          priceOriginal: 290.55,
          discount:50,
          img:"/assets/products/2.png",
          price:159.987789,
          title:"Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
          id: "product3"
        },
        {
          priceOriginal: 99.55,
          discount:50,
          img:"/assets/products/3.png",
          price:89.58899,
          title:"Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
          id: "product4"
        },
        {
          priceOriginal: 80.55,
          discount:50,
          img:"/assets/products/8.png",
          price:69.58899,
          title:"Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
          id: "product5"
        },
        {
          priceOriginal: 90.55,
          discount:50,
          img:"/assets/products/7.png",
          price:79.58899,
          title:"напиток piala ice tea манго-ананас",
          id: "product6"
        },
        {
          priceOriginal: 700.55,
          discount:50,
          img:"/assets/products/6.png",
          price:599.96899,
          title:"Lay's чипсы картофельные рифленые `лосось в сливочныом соусе`",
          id: "product7"
        },
    
       
      
]


}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addToBasket:(state, action)=>{
      state.value += 1;
      state.basket.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addToBasket } = counterSlice.actions

export default counterSlice.reducer