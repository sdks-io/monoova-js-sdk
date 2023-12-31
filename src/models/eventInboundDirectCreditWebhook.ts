/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import {
  InboundDirectCreditWebhookDirectCreditDetails,
  inboundDirectCreditWebhookDirectCreditDetailsSchema,
} from './inboundDirectCreditWebhookDirectCreditDetails';

export interface EventInboundDirectCreditWebhook {
  /** Total Number of Direct Credits. */
  totalCount?: number;
  /** Total Amount of Direct Credits. */
  totalAmount?: number;
  directCreditDetails?: InboundDirectCreditWebhookDirectCreditDetails[];
}

export const eventInboundDirectCreditWebhookSchema: Schema<EventInboundDirectCreditWebhook> = object(
  {
    totalCount: ['TotalCount', optional(number())],
    totalAmount: ['TotalAmount', optional(number())],
    directCreditDetails: [
      'DirectCreditDetails',
      optional(
        array(lazy(() => inboundDirectCreditWebhookDirectCreditDetailsSchema))
      ),
    ],
  }
);
