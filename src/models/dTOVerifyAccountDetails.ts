/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface DTOVerifyAccountDetails {
  /** The text(GUID) that identifies the token. */
  token?: string;
  /** Datetime that the request was created */
  created?: string;
  /** Datetime that the direct debit authority flag was last updated */
  updated?: string;
  /** System bsb validation timestamp */
  lastSystemBSBValidation?: string;
  /** Your comment submitted when initiating the verify request */
  comment?: string;
  /** BSB number of associated bank account. BSB format is ‘000-000’ */
  bsb?: string;
  /** This is the bank accounts number */
  bankAccountNumber?: number;
  /** Bank account title or name of associated bank account */
  bankAccountTitle?: string;
  /** Your example remitter code */
  remitter?: string;
  /** Blacklisted accounts cannot be transacted on */
  isBlacklisted?: boolean;
  /** Flag that can be used to track which account you have direct debit authority for */
  hasDDAuthority?: boolean;
  /** Datetime that the direct debit authority flag was last modified */
  ddAuthorityChangedTimestamp?: string;
  /** Datetime that the request was created */
  ddAuthorityChangedBy?: string;
  /** Name of the verification token */
  verificationIdentifier?: string;
  /** Status of the verification token */
  verificationStatus?: string;
  /** mAccount which owns the verification token */
  verificationSignonMerchant?: string;
  /** Number of times verification has been retried */
  verificationRetryCount?: number;
  /** Threshold number of verification failures that triggers a lockout */
  verificationRetyCountBeforeLockout?: number;
  /** Last verification attempt datetime */
  verificationLastRetryTimestamp?: string;
  /** Lockout time in after verification failure threshold has been reached */
  verificationLastRetryLockoutMinutes?: number;
  /** Job ID for the verification transaction */
  verificationDEJobId?: number;
  /** Unique verification root ID */
  verificationRootId?: number;
}

export const dTOVerifyAccountDetailsSchema: Schema<DTOVerifyAccountDetails> = object(
  {
    token: ['token', optional(string())],
    created: ['created', optional(string())],
    updated: ['updated', optional(string())],
    lastSystemBSBValidation: ['lastSystemBSBValidation', optional(string())],
    comment: ['comment', optional(string())],
    bsb: ['bsb', optional(string())],
    bankAccountNumber: ['bankAccountNumber', optional(number())],
    bankAccountTitle: ['bankAccountTitle', optional(string())],
    remitter: ['remitter', optional(string())],
    isBlacklisted: ['isBlacklisted', optional(boolean())],
    hasDDAuthority: ['hasDDAuthority', optional(boolean())],
    ddAuthorityChangedTimestamp: [
      'ddAuthorityChangedTimestamp',
      optional(string()),
    ],
    ddAuthorityChangedBy: ['ddAuthorityChangedBy', optional(string())],
    verificationIdentifier: ['verificationIdentifier', optional(string())],
    verificationStatus: ['verificationStatus', optional(string())],
    verificationSignonMerchant: [
      'verificationSignonMerchant',
      optional(string()),
    ],
    verificationRetryCount: ['verificationRetryCount', optional(number())],
    verificationRetyCountBeforeLockout: [
      'verificationRetyCountBeforeLockout',
      optional(number()),
    ],
    verificationLastRetryTimestamp: [
      'verificationLastRetryTimestamp',
      optional(string()),
    ],
    verificationLastRetryLockoutMinutes: [
      'verificationLastRetryLockoutMinutes',
      optional(number()),
    ],
    verificationDEJobId: ['verificationDEJobId', optional(number())],
    verificationRootId: ['verificationRootId', optional(number())],
  }
);
