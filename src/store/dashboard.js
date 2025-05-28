import { createSlice } from "@reduxjs/toolkit";
import addCurrency from "@/utils/addCurrency";
const initialState = {
    // each year/month is a key
    202503: {
        orderNumbers: 3,
        totalSale: 96,
        soldItems: {
            101: 3,
            102: 2,
            103: 1,
        },
    },
    202504: {
        orderNumbers: 8,
        totalSale: 100,
        soldItems: {
            101: 3,
            102: 2,
            103: 1,
        },
    },
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        addOrder(state, action) {
            const date = action.payload.date;

            if (!state[date]) {
                state[date] = {
                    orderNumbers: 0,
                    totalSale: 0,
                    soldItems: {},
                };
            }

            state[date].orderNumbers++;
            state[date].totalSale = addCurrency(
                action.payload.totalPrice,
                state[date].totalSale
            );

            action.payload.items.forEach((item) => {
                const itemId = item.id;
                const quantity = item.quantity || 1;

                state[date].soldItems[itemId] =
                    (state[date].soldItems[itemId] || 0) + quantity;
            });
        },
    },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice.reducer;
