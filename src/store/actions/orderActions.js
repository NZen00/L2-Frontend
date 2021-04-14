import {SET_USER_BILLING_INFORMATION} from "../../constants/actionsTypes";
import type {BillingDetails, SetPersonalDetails} from "../types/orderStoreTypes";

export const setPersonalDetails = (personalDetails: BillingDetails): SetPersonalDetails => {
    return {
        type: SET_USER_BILLING_INFORMATION,
        payload: personalDetails
    }
}
