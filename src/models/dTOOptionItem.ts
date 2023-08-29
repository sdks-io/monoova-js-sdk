/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface DTOOptionItem {
  /** Unique identifier of the value. */
  key?: string;
  /** The actual value represented by the Key */
  value?: string;
}

export const dTOOptionItemSchema: Schema<DTOOptionItem> = object({
  key: ['key', optional(string())],
  value: ['value', optional(string())],
});
