# Verify

<h3>  Overview </h3> <h3> Bank Account Ownership Verification </h3> The purpose of this API is to ascertain whether someone who claims to have control over an external bank account actually does. This has several compliance and risk-mitigation applications. The account verification API will credit a target bank account with a secret code as a remitter name. This code can only be viewed by the owner of the target bank account by accessing and viewing their bank statement. The code can then be submitted against our records, and if it matches, Monoova will persist a verification token against that specific account. <h4> How it works </h4> <ol> <li> POST <a href="/payments#operation/VerifyAccountInitiate"> verify/v1/aba/initiate </a>  to initiate a verification transaction on the target bank account </li> <li> Monoova will credit the target bank account with 1c amount and a secret remitter code (may take up to 48 hours for the code to show on target bank account) </li> </ol> <p> Below image is how a sample verification code appears on a bank statement. In YELLOW is the code your client will need to return, in BLUE is your remitter name. </p> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/bank_ref.png" alt="bank-ref"> <p> <ol> <li> Owner of target bank account views statement to obtain secret code.</li> <li> Submit secret code to Monoova via POST <a href="/payments#operation/VerifyAccountValidate"> verify/v1/aba/validate.</a> In sandbox use code "555555" to test successful validation of an account verification.  </li> <li> If the submitted code and amount is correct, the target bank account is designated as verified.</li> </ol> </p>


```ts
const verifyController = new VerifyController(client);
```

## Class Name

`VerifyController`

## Methods

* [Verify Account Initiate](../../doc/controllers/verify.md#verify-account-initiate)
* [Verify Account Update](../../doc/controllers/verify.md#verify-account-update)
* [Verify NPP Account Pay Id Initiate](../../doc/controllers/verify.md#verify-npp-account-pay-id-initiate)
* [Verify Account Validate](../../doc/controllers/verify.md#verify-account-validate)
* [Verify Account List](../../doc/controllers/verify.md#verify-account-list)
* [Verify Account Get](../../doc/controllers/verify.md#verify-account-get)


# Verify Account Initiate

Inititiates a verification transaction against a designated bank account.

```ts
async verifyAccountInitiate(
  body?: VerifyInitiate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOVerifyAccountInitiateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyInitiate \| undefined`](../../doc/models/verify-initiate.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOVerifyAccountInitiateResponseV1`](../../doc/models/dto-verify-account-initiate-response-v1.md)

## Example Usage

```ts
const body: VerifyInitiate = {
  bsb: '012-366',
  bankAccountNumber: 123456789,
  bankAccountTitle: 'Monoova Bank Account',
  verificationIdentifier: 'MP Retail Account',
  hasDDAuthority: true,
  remitter: 'MPRetail',
};

try {
  const { result, ...httpResponse } = await verifyController.verifyAccountInitiate(
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


# Verify Account Update

Update the following fields for a verified account&#39;s without reverifying the bank account. Bank Account Title, Has DDR authority

```ts
async verifyAccountUpdate(
  body?: VerifyUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOVerifyAccountUpdateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyUpdate \| undefined`](../../doc/models/verify-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOVerifyAccountUpdateResponseV1`](../../doc/models/dto-verify-account-update-response-v1.md)

## Example Usage

```ts
const body: VerifyUpdate = {
  token: 'f45d1c83-1533-4cbb-ae05-4381e181cb18',
  verificationIdentifier: 'MP Retail Account',
  hasDDAuthority: true,
  remitter: 'MPRetail',
  bankAccountTitle: 'Monoova Bank Account',
};

try {
  const { result, ...httpResponse } = await verifyController.verifyAccountUpdate(
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


# Verify NPP Account Pay Id Initiate

Initiates a verification transaction against a designated bank account or PayID via NPP rail using the v2 endpoint.

```ts
async verifyNPPAccountPayIdInitiate(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOVerifyAccountInitiateResponseV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOVerifyAccountInitiateResponseV2`](../../doc/models/dto-verify-account-initiate-response-v2.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await verifyController.verifyNPPAccountPayIdInitiate();
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


# Verify Account Validate

Validates a code against a token generated via the initiate call. After 3 failed attempts the token will get locked for 1 hour. Users can retry with same token after 1 hour or initiate a new verification anytime.

```ts
async verifyAccountValidate(
  body?: VerifyValidate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOVerifyAccountValidateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyValidate \| undefined`](../../doc/models/verify-validate.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOVerifyAccountValidateResponseV1`](../../doc/models/dto-verify-account-validate-response-v1.md)

## Example Usage

```ts
const body: VerifyValidate = {
  token: 'f45d1c83-1533-4cbb-ae05-4381e181cb18',
  amount: 0.01,
  code: '555555',
};

try {
  const { result, ...httpResponse } = await verifyController.verifyAccountValidate(
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


# Verify Account List

Get a list of all verified bank accounts.

```ts
async verifyAccountList(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOVerifyAccountListResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOVerifyAccountListResponseV1`](../../doc/models/dto-verify-account-list-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await verifyController.verifyAccountList();
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


# Verify Account Get

Return details for a specific verification token.

```ts
async verifyAccountGet(
  token: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOVerifyAccountGetResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | Generated Token from verify/v1/aba/initiate (Initiates a verification transaction) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOVerifyAccountGetResponseV1`](../../doc/models/dto-verify-account-get-response-v1.md)

## Example Usage

```ts
const token = 'f45d1c83-1533-4cbb-ae05-4381e181cb18';

try {
  const { result, ...httpResponse } = await verifyController.verifyAccountGet(token);
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

