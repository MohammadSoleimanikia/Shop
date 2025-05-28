import { createSlice } from "@reduxjs/toolkit";
import { orders } from "@/store/ORDERDATA";
import addCurrency from "@/utils/addCurrency";
const totalPrice = orders.reduce(
    (sum, item) => addCurrency(sum, item.totalPrice),
    0
);
const initialState = {
    // this make an initial array so we can push data to it later
    items: orders.map((order) => ({
        id: order.id,
        items: order.items,
        totalPrice: order.totalPrice,
        totalQuantity: order.totalQuantity,
        orderDate: order.orderDate,
        delivered: true,
        user: order.user,
    })),
    totalPriceOrder: totalPrice,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, action) {
            const newOrder = action.payload;
            state.items.push({
                id: new Date().toISOString(),
                orderDate: new Date().toISOString(),
                delivered: false,
                user: newOrder.user,
                ...newOrder,
            });
            state.totalPriceOrder = addCurrency(
                newOrder.totalPrice,
                state.totalPriceOrder
            );
        },
        deliverOrder(state, action) {
            const id = action.payload;
            const order = state.items.find((item) => item.id === id);
            if (order) {
                order.delivered = true;
            }
        },
    },
});
export default orderSlice.reducer;
export const orderAction = orderSlice.actions;
