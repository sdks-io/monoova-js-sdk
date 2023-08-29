/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema, string } from '../schema';

export interface DTOVerifyAccountInitiateResponseV2 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** The text(GUID) that identifies the token. */
  token?: string;
  /** This is the fee amount Excluding GST */
  feeAmountExGst?: number;
  /** This is the total fee amount Including GST */
  feeAmountIncGst?: number;
  /** This is the GST Component of the fee amount */
  feeAmountGstComp?: number;
  /** This is the PayId Name set up by account holder. `When creditMethod is 'NppCreditBankAccount' this field is always Null` */
  ownerName?: string;
}

export const dTOVerifyAccountInitiateResponseV2Schema: Schema<DTOVerifyAccountInitiateResponseV2> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    token: ['token', optional(string())],
    feeAmountExGst: ['feeAmountExGst', optional(number())],
    feeAmountIncGst: ['feeAmountIncGst', optional(number())],
    feeAmountGstComp: ['feeAmountGstComp', optional(number())],
    ownerName: ['ownerName', optional(string())],
  }
);
