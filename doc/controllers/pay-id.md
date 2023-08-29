# Pay ID

<h3>  Overview </h3> <p> A PayID is an alias for a bank account number that makes paying into account easier. A PayID can be an email address, phone number or ABN. PayIDs are issued and associated with our <a href="/payments#tag/Bank-Account-Receivables"> /receivables </a>  bank accounts to allow your users a simpler way of sending you money. Once a PayID has been registered against a bank account, when a payment is made to that ID, the funds will arrive in your receivables account number. Currently we only support email PayIDs via the API. </p>


```ts
const payIDController = new PayIDController(client);
```

## Class Name

`PayIDController`

## Methods

* [Receivables Register Pay ID](../../doc/controllers/pay-id.md#receivables-register-pay-id)
* [Receivables Update Pay Id Name](../../doc/controllers/pay-id.md#receivables-update-pay-id-name)
* [Receivables Pay Id Enquiry](../../doc/controllers/pay-id.md#receivables-pay-id-enquiry)
* [Receivables Update Pay Id Status](../../doc/controllers/pay-id.md#receivables-update-pay-id-status)


# Receivables Register Pay ID

This endpoint allows the registration of a PayID against an account number. We recommend leaving 10 seconds before registering a PayID to ensure an account number has been enabled for NPP. The domains that can be used to register a PayID are restricted. Custom domains are supported but must first be approved, please contact us for configuration. The default domain is monoova.me, if the PayID field is left blank we will generate a check-digited PayID on the Monoova domain.

```ts
async receivablesRegisterPayID(
  body?: PayIdRegisterpayId,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesRegisterPayIdResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PayIdRegisterpayId \| undefined`](../../doc/models/pay-id-registerpay-id.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesRegisterPayIdResponseV1`](../../doc/models/receivables-register-pay-id-response-v1.md)

## Example Usage

```ts
const body: PayIdRegisterpayId = {
  bankAccountNumber: 123409870,
  payIdName: 'John Smith',
};

try {
  const { result, ...httpResponse } = await payIDController.receivablesRegisterPayID(
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


# Receivables Update Pay Id Name

Use this endpoint to change the name of a PayID.

```ts
async receivablesUpdatePayIdName(
  body?: PayIdUpdatePayIdName,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesUpdatePayIdNameResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PayIdUpdatePayIdName \| undefined`](../../doc/models/pay-id-update-pay-id-name.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesUpdatePayIdNameResponseV1`](../../doc/models/receivables-update-pay-id-name-response-v1.md)

## Example Usage

```ts
const body: PayIdUpdatePayIdName = {
  bankAccountNumber: 123409870,
  payId: 'f3y237@monoova.com',
  payIdName: 'John Smith',
};

try {
  const { result, ...httpResponse } = await payIDController.receivablesUpdatePayIdName(
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


# Receivables Pay Id Enquiry

Returns the details of a of a PayID. You must own the PayID to view its information.

```ts
async receivablesPayIdEnquiry(
  body?: PayIdEnquiry,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesEnquiryPayIdResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PayIdEnquiry \| undefined`](../../doc/models/pay-id-enquiry.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesEnquiryPayIdResponseV1`](../../doc/models/receivables-enquiry-pay-id-response-v1.md)

## Example Usage

```ts
const body: PayIdEnquiry = {
  payId: 'f3y237@monoova.com',
};

try {
  const { result, ...httpResponse } = await payIDController.receivablesPayIdEnquiry(
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


# Receivables Update Pay Id Status

Use this endpoint to change the status of a PayID.

```ts
async receivablesUpdatePayIdStatus(
  body?: PayIdUpdatePayIdStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesUpdatePayIdStatusResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PayIdUpdatePayIdStatus \| undefined`](../../doc/models/pay-id-update-pay-id-status.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesUpdatePayIdStatusResponseV1`](../../doc/models/receivables-update-pay-id-status-response-v1.md)

## Example Usage

```ts
const body: PayIdUpdatePayIdStatus = {
  bankAccountNumber: 123409870,
  payId: 'f3y237@monoova.me',
  status: StatusEnum.Disable,
};

try {
  const { result, ...httpResponse } = await payIDController.receivablesUpdatePayIdStatus(
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

