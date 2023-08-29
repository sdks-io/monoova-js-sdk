# Security

<h3>  Overview </h3> <p> The security/v1 APIs allows you to manage security tokens. This gives you an alternative to using signIn API KEY for BASIC authentication for each API call. Security tokens come in two forms </p> <ul> <li> <strong> OneShotSecurityToken </strong> </li> <li> <strong> SecurityToken </strong> </li> </ul> <p> The two security tokens operate in exactly the same way. The token is used to replace your UserName when configuring BASIC Authentication. Should you provide a password anyway, it will be ignored. Each token type has an expiry time between 1 and 15 minutes. The expiry time cannot be extended. </p> <p> As the name implies, a OneShotSecurityToken can only be used once. The token is deleted on its first use or when it expires, whatever is sooner. </p> <p> A SecurityToken can be used multiple times until it expires. The expiry time of a SecurityToken can be extended. Token types may be deleted before they expire by calling security/v1/deleteSecurityToken. </p> <p> Please note that security tokens discussed in this section have nothing in common with the token/v1 APIs described elsewhere in this document. Security tokens provide secure sign-in from a web page; token/v1 APIs tokenize sensitive information. </p>


```ts
const securityController = new SecurityController(client);
```

## Class Name

`SecurityController`

## Methods

* [Security Sign in Account Settings](../../doc/controllers/security.md#security-sign-in-account-settings)
* [Security Create One Shot Security Token](../../doc/controllers/security.md#security-create-one-shot-security-token)


# Security Sign in Account Settings

This API returns the fees and permissions that have been given to the Sign-In Account.

```ts
async securitySignInAccountSettings(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentSettingsResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentSettingsResponseV1`](../../doc/models/dto-generic-payment-settings-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await securityController.securitySignInAccountSettings();
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


# Security Create One Shot Security Token

This API returns a security token that can be used only once or until it expires.  The purpose of this token is that it can be embedded in a web form to enable you to make a single call to the Engine without exposing your Sign-In Account credentials. When setting your security credentials to call any of the APIs in this document (except for security/v1/createOneShotToken and security/v1/createSecurityToken),  set the Username to the returned OneShotSecurityToken and set the password to anything as it will be ignored. If you create the token and no longer require it, call security/v1/deleteSecurityToken to have the token removed.

```ts
async securityCreateOneShotSecurityToken(
  timeOutMin: number,
  tokenClaims?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentCreateOneShotSecurityTokenResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timeOutMin` | `number` | Template, Required | Each token has an expiry time between 1 and 15 minutes |
| `tokenClaims` | `string \| undefined` | Query, Optional | This is Optional. Passing a 'Token' in parameter to generate restricted Token which only allows user to create Token. Currently Available parameters are 'Admin' and 'Token' |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentCreateOneShotSecurityTokenResponseV1`](../../doc/models/dto-generic-payment-create-one-shot-security-token-response-v1.md)

## Example Usage

```ts
const timeOutMin = 5;

const tokenClaims = 'Token';

try {
  const { result, ...httpResponse } = await securityController.securityCreateOneShotSecurityToken(
    timeOutMin,
    tokenClaims
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

