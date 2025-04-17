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
          id: "product1",
          article: 44478,
          testimonials: 1,
          ranking: 4.0
        },
        {
          priceOriginal: 60.50,
          discount:50,
          img:"/assets/products/1.png",
          price:49.4957820,
          title:"Г/Ц Блинчики с мясом вес, Россия",
          id: "product2",
          article: 44479,
          testimonials: 1,
          ranking: 3.0
        },
        {
          priceOriginal: 290.55,
          discount:50,
          img:"/assets/products/2.png",
          price:159.987789,
          title:"Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
          id: "product3",
          article: 10101,
          testimonials: 2,
          ranking: 2.0
        },
        {
          priceOriginal: 99.55,
          discount:50,
          img:"/assets/products/3.png",
          price:89.58899,
          title:"Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
          id: "product4",
          article: 896658,
          testimonials: 1,
          ranking: 5.0
        },
        {
          priceOriginal: 80.55,
          discount:50,
          img:"/assets/products/8.png",
          price:69.58899,
          title:"Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
          id: "product5",
          article: 448896,
          testimonials: 0,
          ranking: 3.5
        },
        {
          priceOriginal: 90.55,
          discount:50,
          img:"/assets/products/7.png",
          price:79.58899,
          title:"напиток piala ice tea манго-ананас",
          id: "product6",
          article: 44478632,
          testimonials: 0,
          ranking: 4.5
        },
        {
          priceOriginal: 700.55,
          discount:50,
          img:"/assets/products/6.png",
          price:599.96899,
          title:"Lay's чипсы картофельные рифленые `лосось в сливочныом соусе`",
          id: "product7",
          article: 1500008,
          testimonials: 0,
          ranking: 1.5
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
      
      const includes = state.basket.find(x=>x.id===action.payload.id);

      if(includes){
        const el = state.basket.findIndex(x=>x.id===action.payload.id);
        state.basket[el].count += 1;

      }else{
        
        state.basket.push(action.payload);
        state.value = state.basket.length;
      }

      
    },
    removeFromBasket:(state, action)=>{
      const el = state.basket.findIndex(x=>x.id===action.payload.id);
      state.basket.splice(el, 1)
      state.value = state.basket.length;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addToBasket, removeFromBasket } = counterSlice.actions

export default counterSlice.reducer