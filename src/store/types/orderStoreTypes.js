import {SET_USER_BILLING_INFORMATION} from '../../constants/actionsTypes';

export interface BillingDetails {
  fullName: string | null
  address: string | null
  city: string | null
  postcode: string | null
  country: string | null
  tel?: string | null
}
export interface OrderState {
  userBillingInformation: BillingDetails | null
  isSameBillingAddress: true
  total: null
}

export interface SetPersonalDetails {
  type: typeof SET_USER_BILLING_INFORMATION
  payload: BillingDetails
}

export type OrderStoreTypes =  SetPersonalDetails
