/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import {
  PendingRtgsImtWebhookDetails,
  pendingRtgsImtWebhookDetailsSchema,
} from './pendingRtgsImtWebhookDetails';

export interface EventPendingrtgsImtWebhook {
  /** Total Number of records. */
  totalCount?: number;
  /** Sum total of amount for all transactions. */
  totalAmount?: number;
  rtgsImtDetails?: PendingRtgsImtWebhookDetails[];
}

export const eventPendingrtgsImtWebhookSchema: Schema<EventPendingrtgsImtWebhook> = object(
  {
    totalCount: ['TotalCount', optional(number())],
    totalAmount: ['TotalAmount', optional(number())],
    rtgsImtDetails: [
      'RtgsImtDetails',
      optional(array(lazy(() => pendingRtgsImtWebhookDetailsSchema))),
    ],
  }
);
