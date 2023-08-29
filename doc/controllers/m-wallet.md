# M Wallet

<h3>  Overview </h3> mWallet is the name we have given to the digital wallet required for our BPAY payments. For any other digital-wallet uses, we recommend our mAccount. The APIs in this section do not perform any financial transactions. They are used to manage mWallet information used by the Engine. The /financial/v2/transaction API verifies mWallet information using this subsystem before performing the transaction.


```ts
const mWalletController = new MWalletController(client);
```

## Class Name

`MWalletController`

## Methods

* [M Wallet Create](../../doc/controllers/m-wallet.md#m-wallet-create)
* [M Wallet Reopen](../../doc/controllers/m-wallet.md#m-wallet-reopen)
* [M Wallet Search](../../doc/controllers/m-wallet.md#m-wallet-search)
* [M Wallet Close V1](../../doc/controllers/m-wallet.md#m-wallet-close-v1)
* [M Wallet Transactions](../../doc/controllers/m-wallet.md#m-wallet-transactions)
* [M Wallet Get Financials](../../doc/controllers/m-wallet.md#m-wallet-get-financials)
* [M Wallet Reset Pin](../../doc/controllers/m-wallet.md#m-wallet-reset-pin)
* [M Wallet Update](../../doc/controllers/m-wallet.md#m-wallet-update)


# M Wallet Create

This API creates a new mWallet. This creation process has been mandated by BPAY Pty Ltd as part of the license to use BPAY as a payment method. Ideally client software should mask the pin from the merchant and get the customer to key in the pin number twice to ensure accuracy and to maintain privacy. The pin and the Date of Birth Fields are the ultimate authentication fields that a customer has to allow the payment. If the customer forgets their pin then it can be reset using the ResetPin function. The customer must supply a birth date (or any other significant date) that matches the one that is registered. If a customer queries why a birth date is needed as part of the registration process then it is for this reason. Note: Though specified as a birth date any date of significance would be appropriate. There is no date range checking to check for age etc. The date is used to allow changes to the pin only.

```ts
async mWalletCreate(
  body?: MWalletCreate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletCreateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MWalletCreate \| undefined`](../../doc/models/m-wallet-create.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletCreateResponseV1`](../../doc/models/dtom-wallet-create-response-v1.md)

## Example Usage

```ts
const body: MWalletCreate = {
  identifier: '0200000000',
  pin: 0,
  name: 'Sample mWallet Name',
  dateOfBirth: '01/01/1990 12:00:00',
  email: 'walletyser@monoova.com',
  allowDuplicates: false,
  abn: '77106249852',
};

try {
  const { result, ...httpResponse } = await mWalletController.mWalletCreate(
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


# M Wallet Reopen

This API will reopen an mWallet that was closed.

```ts
async mWalletReopen(
  accountNumber: string,
  pin: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletReopenResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Template, Required | 16-Digit account number that uniquely identifies the mWallet<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `pin` | `number` | Template, Required | 4 digit numerical pin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletReopenResponseV1`](../../doc/models/dtom-wallet-reopen-response-v1.md)

## Example Usage

```ts
const accountNumber = '6279059700011434';

const pin = 6666;

try {
  const { result, ...httpResponse } = await mWalletController.mWalletReopen(
    accountNumber,
    pin
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


# M Wallet Search

This API returns an array of mWallets whose authentication fields match the search criteria specified by the identifier. Mobile phone, land line and 16 - Digit mWallet account numbers have all non - numbers stripped and email address is converted to lower case. This is the first function to call when trying to identify a customer with an mWallet. The key piece of information returned for each mWallet is the unique accountNumber that is used in later calls and in the payment gateway.

```ts
async mWalletSearch(
  identifier?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletSearchResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | `string \| undefined` | Query, Optional | Mobile phone number, email address, landline number or the 16-Digit mWallet account number<br>**Constraints**: *Maximum Length*: `300` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletSearchResponseV1`](../../doc/models/dtom-wallet-search-response-v1.md)

## Example Usage

```ts
const identifier = '0414811109';

try {
  const { result, ...httpResponse } = await mWalletController.mWalletSearch(
    identifier
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


# M Wallet Close V1

This API will set an account to be closed and no further financial transactions can be performed in the Engine.

```ts
async mWalletCloseV1(
  accountNumber: bigint,
  pin: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletCloseResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint` | Template, Required | 16-Digit account number that uniquely identifies the mWallet |
| `pin` | `number` | Template, Required | 4 digit numerical pin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletCloseResponseV1`](../../doc/models/dtom-wallet-close-response-v1.md)

## Example Usage

```ts
const accountNumber = BigInt('6279059700011434');

const pin = 6666;

try {
  const { result, ...httpResponse } = await mWalletController.mWalletCloseV1(
    accountNumber,
    pin
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


# M Wallet Transactions

This API will return an array of transactions for an mWallet between two dates. Paging is supported by using the skip and take properties of the mWalletTransactionRequestDetails class. The information retrieved is in real - time and represents the same details as displayed on an mAccounts financial statement.

```ts
async mWalletTransactions(
  body?: MWalletTransactions,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletTransactionsResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MWalletTransactions \| undefined`](../../doc/models/m-wallet-transactions.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletTransactionsResponseV1`](../../doc/models/dtom-wallet-transactions-response-v1.md)

## Example Usage

```ts
const body: MWalletTransactions = {
  accountNumber: '6279059700022400',
  pin: 5555,
  startDate: '07/11/2018 00:00:00',
  endDate: '02/28/2018 00:00:00',
  skip: 0,
  take: 50,
  descending: false,
  useTime: false,
};

try {
  const { result, ...httpResponse } = await mWalletController.mWalletTransactions(
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


# M Wallet Get Financials

This API will return the current financials for an mWallet.

```ts
async mWalletGetFinancials(
  accountNumber: bigint,
  pin: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletGetFinancialsResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint` | Template, Required | 16-Digit account number that uniquely identifies the mWallet |
| `pin` | `number` | Template, Required | 4 digit numerical pin. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletGetFinancialsResponseV1`](../../doc/models/dtom-wallet-get-financials-response-v1.md)

## Example Usage

```ts
const accountNumber = BigInt('6279059700011434');

const pin = 6666;

try {
  const { result, ...httpResponse } = await mWalletController.mWalletGetFinancials(
    accountNumber,
    pin
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


# M Wallet Reset Pin

This API resets a customer's mWallet PIN. The Date of Birth is used to authenticate the user. This API should be used when a customer has forgotten their pin.

```ts
async mWalletResetPin(
  body?: MWalletResetPin,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletResetPinResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MWalletResetPin \| undefined`](../../doc/models/m-wallet-reset-pin.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletResetPinResponseV1`](../../doc/models/dtom-wallet-reset-pin-response-v1.md)

## Example Usage

```ts
const body: MWalletResetPin = {
  accountNumber: '6279059700011434',
  pin: 5555,
  dateOfBirth: '01/01/1990 12:00:00',
};

try {
  const { result, ...httpResponse } = await mWalletController.mWalletResetPin(
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


# M Wallet Update

This API updates an mWallet. This update process has been mandated by BPAY Pty Ltd as part of the license to use BPAY as a payment method. The pin or dateOfBirth Dates are not updatable.

```ts
async mWalletUpdate(
  body?: MWalletUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOMWalletUpdateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MWalletUpdate \| undefined`](../../doc/models/m-wallet-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOMWalletUpdateResponseV1`](../../doc/models/dtom-wallet-update-response-v1.md)

## Example Usage

```ts
const body: MWalletUpdate = {
  accountNumber: '6279059736211111',
  pin: 5555,
  name: 'mPayments Retail',
  nickName: 'mPayments',
  email: 'mPayments@monoova.com',
  abn: '77106249852',
};

try {
  const { result, ...httpResponse } = await mWalletController.mWalletUpdate(
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

