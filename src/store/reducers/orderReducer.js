import {SET_PAYMENT_METHOD, SET_USER_BILLING_INFORMATION} from "../../constants/actionsTypes";
import type {OrderState, OrderStoreTypes} from "../types/orderStoreTypes";

const orderReducerInitialState = {
    userBillingInformation: null,
    isSameBillingAddress: true,
    total: null
}

export const orderReducer = (state = orderReducerInitialState, action: OrderStoreTypes): OrderState => {
    switch (action.type) {
        case SET_USER_BILLING_INFORMATION:
            return {
                ...state,
                userBillingInformation: action.payload
            };
        default: {
            return state;
        }
    }
}
