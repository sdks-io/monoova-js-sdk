/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import {
  InboundDirectDebitWebhookDirectDebitDetails,
  inboundDirectDebitWebhookDirectDebitDetailsSchema,
} from './inboundDirectDebitWebhookDirectDebitDetails';

export interface EventInboundDirectDebitWebhook {
  /** Total Number of Direct Debits. */
  totalCount?: number;
  /** Total Amount of Direct Debits. */
  totalAmount?: number;
  directDebitDetails?: InboundDirectDebitWebhookDirectDebitDetails[];
}

export const eventInboundDirectDebitWebhookSchema: Schema<EventInboundDirectDebitWebhook> = object(
  {
    totalCount: ['TotalCount', optional(number())],
    totalAmount: ['TotalAmount', optional(number())],
    directDebitDetails: [
      'DirectDebitDetails',
      optional(
        array(lazy(() => inboundDirectDebitWebhookDirectDebitDetailsSchema))
      ),
    ],
  }
);