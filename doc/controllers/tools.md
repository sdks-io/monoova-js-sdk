# Tools

<h3>  Overview </h3> The APIs in the tools/v1/ section represent utilities that you may find useful while consuming the other APIs offered as part of the Engine other APIs.


```ts
const toolsController = new ToolsController(client);
```

## Class Name

`ToolsController`

## Methods

* [Tools Ping](../../doc/controllers/tools.md#tools-ping)
* [Tools Send Email to Issuer](../../doc/controllers/tools.md#tools-send-email-to-issuer)
* [Tools Bsb Validate](../../doc/controllers/tools.md#tools-bsb-validate)
* [Tools Abn Validate](../../doc/controllers/tools.md#tools-abn-validate)


# Tools Ping

The primary purpose of the ping API is to validate your credentials as well validate that the Engine servers are up and running.

```ts
async toolsPing(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOToolsPingResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOToolsPingResponseV1`](../../doc/models/dto-tools-ping-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await toolsController.toolsPing();
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


# Tools Send Email to Issuer

The purpose of this API is to provide email functionality for your application to send emails to the Sign-In Accounts Issuer.

```ts
async toolsSendEmailToIssuer(
  body?: ToolsSendEmailToIssuer,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOToolsSendEmailResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ToolsSendEmailToIssuer \| undefined`](../../doc/models/tools-send-email-to-issuer.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOToolsSendEmailResponseV1`](../../doc/models/dto-tools-send-email-response-v1.md)

## Example Usage

```ts
const body: ToolsSendEmailToIssuer = {
  subject: 'Please call me ASAP',
  isBodyHtml: false,
  body: 'I have forgotten my password',
};

try {
  const { result, ...httpResponse } = await toolsController.toolsSendEmailToIssuer(
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


# Tools Bsb Validate

The purpose of this API is to return details about a BSB (Bank-State-Branch) number. The format is a string in the following format:&nbsp;‘999-999’.

```ts
async toolsBsbValidate(
  bsbNumber: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOToolsBsbValidateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsbNumber` | `string` | Template, Required | BSB (Bank-State-Branch) number. The format is a string in the following format:&nbsp;‘999-999’. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOToolsBsbValidateResponseV1`](../../doc/models/dto-tools-bsb-validate-response-v1.md)

## Example Usage

```ts
const bsbNumber = '012-433';

try {
  const { result, ...httpResponse } = await toolsController.toolsBsbValidate(bsbNumber);
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


# Tools Abn Validate

The purpose of this API is to validate that an ABN (Australian Business Number) is correct and determine if it’s valid.&nbsp; This API makes a call to the Australian Business Registry returning current details about the company.&nbsp; An ABN is defined as a string of eleven numeric digits.Spaces are allowed but no other characters.&nbsp; If the resulting status property contains ‘Ok’ then examine the property isAbnValid.&nbsp; The property isCharity will be true if the entity is an active registered charity.&nbsp; A list of codes and more information is available at http://abr.business.gov.au/Documentation/ReferenceData

```ts
async toolsAbnValidate(
  abnNumber: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOToolsAbnValidateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `abnNumber` | `string` | Template, Required | ABN (Australian Business Number) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOToolsAbnValidateResponseV1`](../../doc/models/dto-tools-abn-validate-response-v1.md)

## Example Usage

```ts
const abnNumber = '24611393554';

try {
  const { result, ...httpResponse } = await toolsController.toolsAbnValidate(abnNumber);
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

