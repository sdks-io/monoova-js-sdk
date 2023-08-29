/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface DTOPublicPingResponseV1 {
  /** This value represents the total time in milliseconds that the Platform took to process the request. */
  durationMs?: bigint;
  /** This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors */
  status?: string;
  /** This is a plain English description of the status. */
  statusDescription?: string;
  /** A string containing the Version of the Platform engine with the current Date Time at the server */
  version?: string;
  /** The name of the environment you are connected too: ·Live ·Sandbox */
  environment?: string;
}

export const dTOPublicPingResponseV1Schema: Schema<DTOPublicPingResponseV1> = object(
  {
    durationMs: ['durationMs', optional(bigint())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    version: ['version', optional(string())],
    environment: ['environment', optional(string())],
  }
);