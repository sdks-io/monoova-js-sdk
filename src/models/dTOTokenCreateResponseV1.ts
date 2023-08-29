/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface DTOTokenCreateResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** New token in the form of a GUID */
  token?: string;
  /** Text that gives sufficient information to allow the token to be selected but does not compromise security */
  hint?: string;
}

export const dTOTokenCreateResponseV1Schema: Schema<DTOTokenCreateResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    token: ['token', optional(string())],
    hint: ['hint', optional(string())],
  }
);