import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartState = {
    value: number
}

const initialState: cartState = {
    value: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        reset: state=>{
            state.value = initialState.value;
        }

    }
});

export const { increment, decrement, incrementByAmount, reset } = cartSlice.actions;
export default cartSlice.reducer;
