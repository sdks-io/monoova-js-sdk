/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DTOVerifyAccountDetails,
  dTOVerifyAccountDetailsSchema,
} from './dTOVerifyAccountDetails';

export interface DTOVerifyAccountListResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** VerifyAccountDetails */
  list?: DTOVerifyAccountDetails[];
}

export const dTOVerifyAccountListResponseV1Schema: Schema<DTOVerifyAccountListResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    list: ['list', optional(array(lazy(() => dTOVerifyAccountDetailsSchema)))],
  }
);
