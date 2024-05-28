import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers:
    {
        addProduct: (state, action) => {
            var status = state.value.some(ob => ob.id == action.payload.id)
            if (status) {
                const id = action.payload.id;
                state.value = state.value.map(ob => ob.id == id ? { ...ob, qty: ob.qty + 1 } : ob)
            }
            else {
                var ob = { ...action.payload, qty: 1 }
                state.value = [...state.value, ob]
            }

        },
        removeProduct: (state, action) => {
            const id = action.payload;
            state.value = state.value.filter(ob => ob.id != id)
        },
        incrementQty: (state, action) => {
            const id = action.payload;
            state.value = state.value.map(ob => ob.id == id ? { ...ob, qty: ob.qty + 1 } : ob)
        },
        decrementQty: (state, action) => {
            const id = action.payload;
            state.value = state.value.map(ob => ob.id == id && ob.qty > 1 ? { ...ob, qty: ob.qty - 1 } : ob)
        }

    }
})

export const { addProduct, removeProduct, incrementQty, decrementQty } = slice.actions
export default slice.reducer;

