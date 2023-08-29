/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** disbursement to mWallet */
export interface MWallet {
  disbursementMethod: string;
  /** description for the transaction */
  description?: string;
  /** 16-Digit account number that uniquely identifies the mWallet */
  toMWallet: string;
  /** This is the amount of funds to be paid */
  amount: number;
}

export const mWalletSchema: Schema<MWallet> = object({
  disbursementMethod: ['disbursementMethod', string()],
  description: ['description', optional(string())],
  toMWallet: ['toMWallet', string()],
  amount: ['amount', number()],
});