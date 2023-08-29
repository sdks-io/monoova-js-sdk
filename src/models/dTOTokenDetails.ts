/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface DTOTokenDetails {
  /** The text (GUID) that identifies the token */
  token?: string;
  /** Text that gives sufficient information to allow the tokento be selected but does not compromise security */
  hint?: string;
  /** BPAY or AustralianBankAccount */
  payloadType?: string;
  /** Text supplied when the tokenwas created */
  description?: string;
}

export const dTOTokenDetailsSchema: Schema<DTOTokenDetails> = object({
  token: ['token', optional(string())],
  hint: ['hint', optional(string())],
  payloadType: ['payloadType', optional(string())],
  description: ['description', optional(string())],
});