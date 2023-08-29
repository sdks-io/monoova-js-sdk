/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditMethodEnum
 */
export enum CreditMethodEnum {
  NppCreditBankAccount = 'NppCreditBankAccount',
  NppCreditPayId = 'NppCreditPayId',
}

/**
 * Schema for CreditMethodEnum
 */
export const creditMethodEnumSchema: Schema<CreditMethodEnum> = stringEnum(CreditMethodEnum);