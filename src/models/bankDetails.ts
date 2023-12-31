/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface BankDetails {
  /** Payee BSB. */
  bsb?: string;
  /** Payee Bank Account Number. */
  accountNumber?: string;
  /** Payer submitted Account Name. */
  accountName?: string;
  /** Value will be present if token has used for the transaction. (will either have BSB, AccountNumber, AccountName OR Token) */
  token?: string;
}

export const bankDetailsSchema: Schema<BankDetails> = object({
  bsb: ['Bsb', optional(string())],
  accountNumber: ['AccountNumber', optional(string())],
  accountName: ['AccountName', optional(string())],
  token: ['Token', optional(string())],
});
