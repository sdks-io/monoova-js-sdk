# Token

<h3> Overview </h3> <p> Using tokens is a way of increasing the security around sensitive information. A token can be used to obfuscate debit and credit details. The details of a token (its payload) are stored encrypted on the Engine servers. The tokening system has been designed such the generated token has no mathematical or algorithmic connection to the secret data held as the payload. The token is a random number that is manifested as a GUID. Currently two types of payloads can be held within the tokening system </p> <ul> <li> Australian Bank Account </li> <li> BPAY details </li> </ul> <p> Other payload types can be added if required. For example, if you have asked the user to enter their bank-account details on your website you can use the security/v1/createOneShotSecurityToken API to embed an OneShotSecurityToken in your page. Using this OneShotSecurityToken you can call the appropriate token/v1/create API passing the details. This way, the customer’s payload details are never passed through your server. </p>


```ts
const tokenController = new TokenController(client);
```

## Class Name

`TokenController`

## Methods

* [Token Create BPAY](../../doc/controllers/token.md#token-create-bpay)
* [Token Delete](../../doc/controllers/token.md#token-delete)
* [Token Update BPAY](../../doc/controllers/token.md#token-update-bpay)
* [Token Create Australian Bank Account](../../doc/controllers/token.md#token-create-australian-bank-account)
* [Token Get](../../doc/controllers/token.md#token-get)
* [Token Validate](../../doc/controllers/token.md#token-validate)
* [Token List](../../doc/controllers/token.md#token-list)
* [Token Update Australian Bank Account](../../doc/controllers/token.md#token-update-australian-bank-account)


# Token Create BPAY

This API creates a token representing BPAY details by passing a TokenBPAYPayload class in the body.

```ts
async tokenCreateBPAY(
  body?: TokenCreateBPAY,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenCreateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokenCreateBPAY \| undefined`](../../doc/models/token-create-bpay.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenCreateResponseV1`](../../doc/models/dto-token-create-response-v1.md)

## Example Usage

```ts
const body: TokenCreateBPAY = {
  accountNumber: '6279059700010827',
  billerCode: 857763,
  customerReferenceNumber: BigInt('6279059700010918'),
  amount: 100,
  description: 'Monthly Electricity Bill BPAY',
};

try {
  const { result, ...httpResponse } = await tokenController.tokenCreateBPAY(
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


# Token Delete

This API will delete the payload attached to the specified token.

```ts
async tokenDelete(
  token: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenDeleteResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | The text (GUID) that identifies the token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenDeleteResponseV1`](../../doc/models/dto-token-delete-response-v1.md)

## Example Usage

```ts
const token = '8c4df16a-78f1-4a1a-9500-357deb3310aa';

try {
  const { result, ...httpResponse } = await tokenController.tokenDelete(token);
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


# Token Update BPAY

This API provides the ability to update the payload associated with an existing token. For this API, the payload to update is a TokenBPAY class.

```ts
async tokenUpdateBPAY(
  body?: TokenUpdateBPAY,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenUpdateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokenUpdateBPAY \| undefined`](../../doc/models/token-update-bpay.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenUpdateResponseV1`](../../doc/models/dto-token-update-response-v1.md)

## Example Usage

```ts
const body: TokenUpdateBPAY = {
  accountNumber: '6279059700010827',
  tokenToUpdate: '20c3a494-7010-4f22-babe-34d643e5e64f',
  billerCode: 857763,
  customerReferenceNumber: BigInt('6279059700010918'),
  amount: 100,
  description: 'Monthly Electricity Bill BPAY',
};

try {
  const { result, ...httpResponse } = await tokenController.tokenUpdateBPAY(
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


# Token Create Australian Bank Account

This API creates a token representing an Australian Bank Account by passing a TokenAustralianBankAccountPayload class in the body.

```ts
async tokenCreateAustralianBankAccount(
  body?: TokenCreateAustralianBankAccount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenCreateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokenCreateAustralianBankAccount \| undefined`](../../doc/models/token-create-australian-bank-account.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenCreateResponseV1`](../../doc/models/dto-token-create-response-v1.md)

## Example Usage

```ts
const body: TokenCreateAustralianBankAccount = {
  accountNumber: BigInt('6279059700010827'),
  bankAccountName: 'Monoova Bank Account',
  bankAccountNumber: 123456789,
  bsb: '012-366',
  description: 'Savings Account',
};

try {
  const { result, ...httpResponse } = await tokenController.tokenCreateAustralianBankAccount(
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


# Token Get

This API will return the payload attached to the specified token.

```ts
async tokenGet(
  token: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenGetResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | The text (GUID) that identifies the token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenGetResponseV1`](../../doc/models/dto-token-get-response-v1.md)

## Example Usage

```ts
const token = '8c4df16a-78f1-4a1a-9500-357deb3310aa';

try {
  const { result, ...httpResponse } = await tokenController.tokenGet(token);
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


# Token Validate

This API validates a token by passing a Token in the body.

```ts
async tokenValidate(
  token: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenValidateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | The text (GUID) that identifies the token. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenValidateResponseV1`](../../doc/models/dto-token-validate-response-v1.md)

## Example Usage

```ts
const token = '8c4df16a-78f1-4a1a-9500-357deb3310aa';

try {
  const { result, ...httpResponse } = await tokenController.tokenValidate(token);
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


# Token List

This API will return a list of all tokens associated with the provided mWallet or mAccount.

```ts
async tokenList(
  accountNumber: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenListResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint` | Template, Required | 16-Digit account number that uniquely identifies the mAccount |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenListResponseV1`](../../doc/models/dto-token-list-response-v1.md)

## Example Usage

```ts
const accountNumber = BigInt('6279059700023123');

try {
  const { result, ...httpResponse } = await tokenController.tokenList(accountNumber);
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


# Token Update Australian Bank Account

This API provides the ability to update the payload associated with an existing token. For this API, the payload to update is a TokenAustralianBankAccount class.

```ts
async tokenUpdateAustralianBankAccount(
  body?: TokenUpdateAustralianBankAccount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOTokenUpdateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokenUpdateAustralianBankAccount \| undefined`](../../doc/models/token-update-australian-bank-account.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOTokenUpdateResponseV1`](../../doc/models/dto-token-update-response-v1.md)

## Example Usage

```ts
const body: TokenUpdateAustralianBankAccount = {
  accountNumber: '6279059700010827',
  tokenToUpdate: '9395ddef-69cb-4f38-8836-3c6502c72182',
  bankAccountName: 'Monoova Bank Account',
  bankAccountNumber: 123456789,
  bsb: '012-366',
  description: 'Savings Account',
};

try {
  const { result, ...httpResponse } = await tokenController.tokenUpdateAustralianBankAccount(
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

