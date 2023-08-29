# Subscriptions

The endpoints in this section allow subscription and management of webhooks for the purpose of receiving transaction notifications.</br> These transaction notifications are called Events. Current available events are:&nbsp;&nbsp; <a href="/payments#operation/ReceivablesReceivePaymentWebhook"> NPPReceivePayment Event </a> &nbsp; <a href="/payments#operation/InboundDirectCreditWebhook"> InboundDirectCredit Event </a> &nbsp; <a href="/payments#operation/InboundDirectDebitWebhook"> InboundDirectDebit Event </a>

```ts
const subscriptionsController = new SubscriptionsController(client);
```

## Class Name

`SubscriptionsController`

## Methods

* [Subscriptions Create](../../doc/controllers/subscriptions.md#subscriptions-create)
* [Subscriptions List](../../doc/controllers/subscriptions.md#subscriptions-list)
* [Subscriptions Resend V2](../../doc/controllers/subscriptions.md#subscriptions-resend-v2)
* [Subscriptions Delete](../../doc/controllers/subscriptions.md#subscriptions-delete)
* [Subscriptions Update](../../doc/controllers/subscriptions.md#subscriptions-update)
* [Subscriptions Report](../../doc/controllers/subscriptions.md#subscriptions-report)


# Subscriptions Create

Adds a new URL to which callbacks will be sent.

```ts
async subscriptionsCreate(
  body?: SubscriptionsCreate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionsCreateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SubscriptionsCreate \| undefined`](../../doc/models/subscriptions-create.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionsCreateResponseV1`](../../doc/models/subscriptions-create-response-v1.md)

## Example Usage

```ts
const body: SubscriptionsCreate = {
  eventName: EventNameEnum.NPPReceivePayment,
  targetUrl: 'http://www.abc.com.au',
  subscriptionStatus: 'On',
  securityToken: 'Basic Rjc1234567890jdGMS00MUU01234567890I3OTUyRk1234567890UEB51234567890TM0NjM=',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.subscriptionsCreate(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Subscriptions List

Returns a list of all webhooks registered.

```ts
async subscriptionsList(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionsListResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionsListResponseV1`](../../doc/models/subscriptions-list-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await subscriptionsController.subscriptionsList();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Subscriptions Resend V2

Resends the associated webhook for the provided webhook ID

```ts
async subscriptionsResendV2(
  webhookId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionsResendResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookId` | `number` | Template, Required | Unique Id to identify this webhook notification. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionsResendResponseV1`](../../doc/models/subscriptions-resend-response-v1.md)

## Example Usage

```ts
const webhookId = 184;

try {
  const { result, ...httpResponse } = await subscriptionsController.subscriptionsResendV2(webhookId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Subscriptions Delete

Permanently deletes a webhook.

```ts
async subscriptionsDelete(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionsDeleteResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | This is the Id of the Subscription you want to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionsDeleteResponseV1`](../../doc/models/subscriptions-delete-response-v1.md)

## Example Usage

```ts
const id = 1;

try {
  const { result, ...httpResponse } = await subscriptionsController.subscriptionsDelete(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Subscriptions Update

Updates an existing URL or toggles its status.

```ts
async subscriptionsUpdate(
  body?: SubscriptionsUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionsUpdateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SubscriptionsUpdate \| undefined`](../../doc/models/subscriptions-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionsUpdateResponseV1`](../../doc/models/subscriptions-update-response-v1.md)

## Example Usage

```ts
const body: SubscriptionsUpdate = {
  id: 1,
  targetUrl: 'http://www.abc1.com.au',
  subscriptionStatus: 'On',
  securityToken: 'Basic Rjc1234567890jdGMS00MUU01234567890I3OTUyRk1234567890UEB51234567890TM0NjM=',
};

try {
  const { result, ...httpResponse } = await subscriptionsController.subscriptionsUpdate(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Subscriptions Report

Provides a historical array of previously sent webhooks

```ts
async subscriptionsReport(
  date: string,
  skip?: number,
  take?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubscriptionsReportV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | date format should be 'yyyy-MM-dd' format. |
| `skip` | `number \| undefined` | Query, Optional | Number of records to skip. 0 is the first record. |
| `take` | `number \| undefined` | Query, Optional | Number of records to take. If endDate is provided maximum take is 10000. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubscriptionsReportV1`](../../doc/models/subscriptions-report-v1.md)

## Example Usage

```ts
const date = '2020-03-15';

const skip = 0;

const take = 1000;

try {
  const { result, ...httpResponse } = await subscriptionsController.subscriptionsReport(
    date,
    skip,
    take
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |

