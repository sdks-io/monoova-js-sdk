# Testing Reference Data

```ts
const testingReferenceDataController = new TestingReferenceDataController(client);
```

## Class Name

`TestingReferenceDataController`

## Methods

* [Public Certificate Public Key](../../doc/controllers/testing-reference-data.md#public-certificate-public-key)
* [Public Ping](../../doc/controllers/testing-reference-data.md#public-ping)
* [Public Certificate](../../doc/controllers/testing-reference-data.md#public-certificate)


# Public Certificate Public Key

This endpoint returns the public key used by Monoova to sign messages.The public key is encoded as a hexadecimal string. This public key should be expected to change every 1 year and should be updated accordingly.

```ts
async publicCertificatePublicKey(
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await testingReferenceDataController.publicCertificatePublicKey();
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


# Public Ping

The primary purpose of the ping API is to validate that the Engine servers are up and running.

```ts
async publicPing(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOPublicPingResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOPublicPingResponseV1`](../../doc/models/dto-public-ping-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await testingReferenceDataController.publicPing();
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


# Public Certificate

This endpoint returns an X509 certificate which contains the public key that can be used to verify messages sent by Monoova. The certificate returned is short lived (1 year validity) and should be updated accordingly.

```ts
async publicCertificate(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await testingReferenceDataController.publicCertificate();
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

