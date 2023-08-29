# M Account

<h3>  Overview </h3> The mAccount is the name we have given our virtual account. It is at the centre of anything you do with our Payments Engine. In many ways, your mAccount(s) is you in the Engine, this is where you get authenticated, where your funds flow in and out, and where you get your reports. It is also the building block for a bespoke ecosystem of virtual accounts which you can build in the Engine. And though we call it an account, it can just as easily be used as a wallet. The APIs in this section do not perform financial transactions. Instead, they are used to manage mAccount information in the Engine. The /financial/v2/transaction API verifies mAccount information using this subsystem before performing a transaction.


```ts
const mAccountController = new MAccountController(client);
```

## Class Name

`MAccountController`

## Methods

* [M Account Transactions](../../doc/controllers/m-account.md#m-account-transactions)
* [M Account Update](../../doc/controllers/m-account.md#m-account-update)
* [M Account Create](../../doc/controllers/m-account.md#m-account-create)
* [M Account List](../../doc/controllers/m-account.md#m-account-list)
* [M Account Close](../../doc/controllers/m-account.md#m-account-close)
* [M Account Get Financials](../../doc/controllers/m-account.md#m-account-get-financials)
* [M Account Get](../../doc/controllers/m-account.md#m-account-get)
* [M Account Send Statement](../../doc/controllers/m-account.md#m-account-send-statement)


# M Account Transactions

This API generates a transaction details.

```ts
async mAccountTransactions(
  body?: MAccountTransactions,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountTransactionsResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MAccountTransactions \| undefined`](../../doc/models/m-account-transactions.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountTransactionsResponseV1`](../../doc/models/dtom-account-transactions-response-v1.md)

## Example Usage

```ts
const body: MAccountTransactions = {
  accountNumber: '6279059700023123',
  frequency: FrequencyEnum.Custom,
  startDate: '04/05/2020 00:00:00',
  endDate: '04/22/2020 00:00:00',
  descending: true,
  useTime: true,
};

try {
  const { result, ...httpResponse } = await mAccountController.mAccountTransactions(
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


# M Account Update

This API updates a mAccount.

```ts
async mAccountUpdate(
  body?: MAccountUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountUpdateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MAccountUpdate \| undefined`](../../doc/models/m-account-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountUpdateResponseV1`](../../doc/models/dtom-account-update-response-v1.md)

## Example Usage

```ts
const body: MAccountUpdate = {
  accountNumber: '6279059700023123',
  abn: '77 106 249 852',
  contactName: 'mPaysales',
  contactNumber: 11.4,
  email: 'mPayments@monoova.com',
  addressLine2: '97 Pacific Highway',
  suburb: 'North Sydney',
  state: 'NSW',
  name: 'Monoova Ltd',
  addressLine1: 'Level 6',
  postCode: '2060',
  bsb: '012-366',
  bankAccountNumber: 123456789,
  bankAccountTitle: 'Monoova Bank Account',
};

try {
  const { result, ...httpResponse } = await mAccountController.mAccountUpdate(
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


# M Account Create

This API creates an mAccount.

```ts
async mAccountCreate(
  body?: MAccountCreate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountCreateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MAccountCreate \| undefined`](../../doc/models/m-account-create.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountCreateResponseV1`](../../doc/models/dtom-account-create-response-v1.md)

## Example Usage

```ts
const body: MAccountCreate = {
  name: 'name6',
  abn: '77 106 249 852',
  contactName: 'mPaysales',
  contactNumber: 11.4,
  email: 'mPayments@Monoova.com.au',
  addressLine2: '97 Pacific Highway',
  suburb: 'North Sydney',
  state: 'NSW',
  allowDuplicates: false,
  addressLine1: 'Level 6',
  postCode: '2060',
  bsb: '012-366',
  bankAccountNumber: 123456789,
  bankAccountTitle: 'Monoova Bank Account',
};

try {
  const { result, ...httpResponse } = await mAccountController.mAccountCreate(
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


# M Account List

Returns a list of 16-Digit mAccounts that you own.

```ts
async mAccountList(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountListResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountListResponseV1`](../../doc/models/dtom-account-list-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await mAccountController.mAccountList();
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


# M Account Close

This API closes an mAccount.

```ts
async mAccountClose(
  accountNumber: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountCloseResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Template, Required | 16-Digit account number that uniquely identifies the mAccount<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountCloseResponseV1`](../../doc/models/dtom-account-close-response-v1.md)

## Example Usage

```ts
const accountNumber = '6279059700023123';

try {
  const { result, ...httpResponse } = await mAccountController.mAccountClose(accountNumber);
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


# M Account Get Financials

This API will return the current financials for an mAccount.

```ts
async mAccountGetFinancials(
  accountNumber: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountGetFinancialsResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint` | Template, Required | 16-Digit account number that uniquely identifies the mAccount |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountGetFinancialsResponseV1`](../../doc/models/dtom-account-get-financials-response-v1.md)

## Example Usage

```ts
const accountNumber = BigInt('6279059778044302');

try {
  const { result, ...httpResponse } = await mAccountController.mAccountGetFinancials(accountNumber);
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


# M Account Get

This API gets details of an mAccount. Property details.options will contain ALL options and their current values.

```ts
async mAccountGet(
  accountNumber: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountGetResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Template, Required | 16-Digit account number that uniquely identifies the mAccount<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountGetResponseV1`](../../doc/models/dtom-account-get-response-v1.md)

## Example Usage

```ts
const accountNumber = '6279059700023123';

try {
  const { result, ...httpResponse } = await mAccountController.mAccountGet(accountNumber);
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


# M Account Send Statement

This API generates a detailed pdf statement for delivery via email.

```ts
async mAccountSendStatement(
  body?: MAccountSendStatement,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMAccountSendStatementResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MAccountSendStatement \| undefined`](../../doc/models/m-account-send-statement.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMAccountSendStatementResponseV1`](../../doc/models/dtom-account-send-statement-response-v1.md)

## Example Usage

```ts
const body: MAccountSendStatement = {
  accountNumber: '6279059700023123',
  frequency: 'Custom',
  startDate: '07/11/2018 00:00:00',
  endDate: '08/11/2018 00:00:00',
};

try {
  const { result, ...httpResponse } = await mAccountController.mAccountSendStatement(
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

