/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface ReceivablesStatusGetResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** The BSB number corresponding to the bank account number. */
  bsb?: string;
  /** The bank account number for which isActive has been updated. */
  bankAccountNumber?: number;
  /** The name of the account to be paid into. Not used for validation of incoming payments. */
  bankAccountName?: string;
  /** A identifier assigned to the account. Must be unique. */
  clientUniqueId?: string;
  /** The current value for isActive. Closed account numbers will return all payments made to that account number */
  isActive?: boolean;
}

export const receivablesStatusGetResponseV1Schema: Schema<ReceivablesStatusGetResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    bsb: ['bsb', optional(string())],
    bankAccountNumber: ['bankAccountNumber', optional(number())],
    bankAccountName: ['bankAccountName', optional(string())],
    clientUniqueId: ['clientUniqueId', optional(string())],
    isActive: ['isActive', optional(boolean())],
  }
);