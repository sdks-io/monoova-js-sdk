/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface VerifyUpdate {
  /** token from verify/v1/aba/initiate. (Inititiates a verification transaction) */
  token: string;
  /** See <a href="/payments#tag/Verify"> Verify </a> section. */
  remitter?: string;
  /** A description supplied by the VerificationSigninMerchant to distinguish this entry from others in a listing. This could be an encoded string from the signon merchant. */
  verificationIdentifier: string;
  /** Can the system use this account to direct debit. Has an authority been granted. */
  hasDDAuthority: boolean;
  /** The Title of the Bank Account for DE file. */
  bankAccountTitle?: string;
}

export const verifyUpdateSchema: Schema<VerifyUpdate> = object({
  token: ['token', string()],
  remitter: ['remitter', optional(string())],
  verificationIdentifier: ['verificationIdentifier', string()],
  hasDDAuthority: ['hasDDAuthority', boolean()],
  bankAccountTitle: ['bankAccountTitle', optional(string())],
});
