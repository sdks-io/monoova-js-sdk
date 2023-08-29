/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';
import { Key5Enum, key5EnumSchema } from './key5Enum';

export interface SendDailyStatement {
  key?: Key5Enum;
  value?: boolean;
}

export const sendDailyStatementSchema: Schema<SendDailyStatement> = object({
  key: ['key', optional(key5EnumSchema)],
  value: ['value', optional(boolean())],
});
