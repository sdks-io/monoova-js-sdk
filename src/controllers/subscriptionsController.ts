/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  SubscriptionsCreate,
  subscriptionsCreateSchema,
} from '../models/subscriptionsCreate';
import {
  SubscriptionsCreateResponseV1,
  subscriptionsCreateResponseV1Schema,
} from '../models/subscriptionsCreateResponseV1';
import {
  SubscriptionsDeleteResponseV1,
  subscriptionsDeleteResponseV1Schema,
} from '../models/subscriptionsDeleteResponseV1';
import {
  SubscriptionsListResponseV1,
  subscriptionsListResponseV1Schema,
} from '../models/subscriptionsListResponseV1';
import {
  SubscriptionsReportV1,
  subscriptionsReportV1Schema,
} from '../models/subscriptionsReportV1';
import {
  SubscriptionsResendResponseV1,
  subscriptionsResendResponseV1Schema,
} from '../models/subscriptionsResendResponseV1';
import {
  SubscriptionsUpdate,
  subscriptionsUpdateSchema,
} from '../models/subscriptionsUpdate';
import {
  SubscriptionsUpdateResponseV1,
  subscriptionsUpdateResponseV1Schema,
} from '../models/subscriptionsUpdateResponseV1';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SubscriptionsController extends BaseController {
  /**
   * Adds a new URL to which callbacks will be sent.
   *
   * @param body
   * @return Response from the API call
   */
  async subscriptionsCreate(
    body?: SubscriptionsCreate,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionsCreateResponseV1>> {
    const req = this.createRequest('POST', '/subscriptions/v1/create');
    const mapped = req.prepareArgs({
      body: [body, optional(subscriptionsCreateSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(subscriptionsCreateResponseV1Schema, requestOptions);
  }

  /**
   * Returns a list of all webhooks registered.
   *
   * @return Response from the API call
   */
  async subscriptionsList(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionsListResponseV1>> {
    const req = this.createRequest('GET', '/subscriptions/v1/list');
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(subscriptionsListResponseV1Schema, requestOptions);
  }

  /**
   * Resends the associated webhook for the provided webhook ID
   *
   * @param webhookId Unique Id to identify this webhook notification.
   * @return Response from the API call
   */
  async subscriptionsResendV2(
    webhookId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionsResendResponseV1>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ webhookId: [webhookId, number()] });
    req.appendTemplatePath`/subscriptions/v2/resend/${mapped.webhookId}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(subscriptionsResendResponseV1Schema, requestOptions);
  }

  /**
   * Permanently deletes a webhook.
   *
   * @param id This is the Id of the Subscription you want to delete
   * @return Response from the API call
   */
  async subscriptionsDelete(
    id: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionsDeleteResponseV1>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ id: [id, number()] });
    req.appendTemplatePath`/subscriptions/v1/delete/${mapped.id}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(subscriptionsDeleteResponseV1Schema, requestOptions);
  }

  /**
   * Updates an existing URL or toggles its status.
   *
   * @param body
   * @return Response from the API call
   */
  async subscriptionsUpdate(
    body?: SubscriptionsUpdate,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionsUpdateResponseV1>> {
    const req = this.createRequest('POST', '/subscriptions/v1/update');
    const mapped = req.prepareArgs({
      body: [body, optional(subscriptionsUpdateSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(subscriptionsUpdateResponseV1Schema, requestOptions);
  }

  /**
   * Provides a historical array of previously sent webhooks
   *
   * @param date date format should be 'yyyy-MM-dd' format.
   * @param skip Number of records to skip. 0 is the first record.
   * @param take Number of records to take. If endDate is provided maximum take is 10000.
   * @return Response from the API call
   */
  async subscriptionsReport(
    date: string,
    skip?: number,
    take?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SubscriptionsReportV1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      date: [date, string()],
      skip: [skip, optional(number())],
      take: [take, optional(number())],
    });
    req.query('skip', mapped.skip);
    req.query('take', mapped.take);
    req.appendTemplatePath`/subscriptions/v1/report/${mapped.date}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(subscriptionsReportV1Schema, requestOptions);
  }
}