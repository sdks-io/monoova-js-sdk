/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface VerifyInitiate {
  /** BSB number of associated bank account. BSB format is ‘000-000’. */
  bsb: string;
  /** Bank account number of associated bank account. */
  bankAccountNumber: number;
  /** Bank account title or name of associated bank account. */
  bankAccountTitle: string;
  /** See <a href="/payments#tag/Verify"> Verify </a> section. */
  remitter?: string;
  /** A description supplied by the VerificationSigninMerchant to distinguish this entry from others in a listing. This could be an encoded string from the signon merchant. */
  verificationIdentifier: string;
  /** Can the system use this account to direct debit. Has an authority been granted. */
  hasDDAuthority: boolean;
}

export const verifyInitiateSchema: Schema<VerifyInitiate> = object({
  bsb: ['bsb', string()],
  bankAccountNumber: ['bankAccountNumber', number()],
  bankAccountTitle: ['bankAccountTitle', string()],
  remitter: ['remitter', optional(string())],
  verificationIdentifier: ['verificationIdentifier', string()],
  hasDDAuthority: ['hasDDAuthority', boolean()],
});