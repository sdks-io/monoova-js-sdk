/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Key9Enum
 */
export enum Key9Enum {
  MobileForSms = 'MobileForSms',
}

/**
 * Schema for Key9Enum
 */
export const key9EnumSchema: Schema<Key9Enum> = stringEnum(Key9Enum);