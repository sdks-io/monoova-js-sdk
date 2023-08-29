# Financial

<h3>  Overview </h3> <p> The Financial APIs provide the core financial functionality of the Engine such as standard direct-entry transactions, refunds and status information. </p> <p> You may Debit one of the following sources </p> <ul> <li> mWallets (for BPAY transactions only) </li> <li> mAccounts (our virtual account) </li> <li> External Australian Bank Accounts </li> </ul> <p>  You may Credit one of the following sources </p> <ul> <li> mWallets (for BPAY transactions) </li> <li> mAccounts (our virtual account) </li> <li> External Australian Bank Accounts </li> <li> BPAY biller codes </li> </ul>


```ts
const financialController = new FinancialController(client);
```

## Class Name

`FinancialController`

## Methods

* [Transaction Validate](../../doc/controllers/financial.md#transaction-validate)
* [Transaction Status by Uid](../../doc/controllers/financial.md#transaction-status-by-uid)
* [Transaction Status by Date](../../doc/controllers/financial.md#transaction-status-by-date)
* [Transaction Execute](../../doc/controllers/financial.md#transaction-execute)


# Transaction Validate

You can use this API to determine if the parameters are correct. The body is the same as <a href="/payments#operation/TransactionExecute"> /financial/v2/transaction/execute </a> endpoint. The callerUniqueReference will be reusable after the validate call is complete. <br/> <strong> Note&#58;</strong>  You DO NOT need to call this endpoint before an execute as all transactions will be validated before they execute. This is useful if you are using a new rail and want to check your parameters.

```ts
async transactionValidate(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentGatewayTransactionValidateV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentGatewayTransactionValidateV2`](../../doc/models/dto-generic-payment-gateway-transaction-validate-v2.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await financialController.transactionValidate();
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


# Transaction Status by Uid

This API returns the status of a previous transaction. This is important because a directDebit transaction could be dishonoured up to 3 days after the transaction was executed. We recommend <a href="/payments#tag/Subscriptions"> subscribing to a webhook </a> to notify you when an dishonour transaction is made.

<P> <strong> Example 1- Returns the status of a transaction that is <strong>‘Complete’</strong> </strong> <br> Returns the status of an existing transaction </P> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/transaction_complete.PNG" alt="bank-ref"> <br> <br>
<strong> Note  </strong> A direct debit transaction usually takes up to 3 days to be dishonoured. Our system automatically marks the transactionStatus as Complete if the transaction has not yet been dishonoured. For Direct Credits, the transactionStatus will always be Complete, please subscribe to our webhook for dishonour notifications.
<P> <strong><u>For NPP Payouts:&nbsp;</u></strong> <br> <strong> Example 2- Returns the status of a transaction that is <strong>‘Pending’</strong> </strong> <br> Returns the status of an NPP Payout transaction that is waiting for update from our Banking institution </P> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/transaction_NPPPayPending.png" alt="bank-ref">
<P> <strong> Example 3- Returns the status of a transaction that is <strong>‘Rejected’</strong> </strong> <br> Returns the status of an NPP Payout transaction that was in Pending state and later got Rejected </P> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/transaction_NPPPayRejected.png" alt="bank-ref">
<P> <strong><u>For Direct Debits:&nbsp;</u></strong> <br> <strong>  Example 4- Returns the status of a transaction that has been <strong>‘Dishonoured’</strong> </strong> <br> Returns the status of an existing transaction </p> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/transaction_dishonoured.PNG" alt="bank-ref"> <p> <strong> Note  </strong> The transaction is now dishonoured with the transactionStatus set to Dishonoured and the dishonouredDate has a value of 2020-06-05. </p>
<P> <strong>  Example 5- Returns the status of a transaction that is <strong>‘WaitingOnClearedFunds’</strong> </strong> <br> Returns the status of an existing transaction (Transaction has made 2020-06-02) </p> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/transaction_waitingOnClearedFunds.PNG" alt="bank-ref"> <p> Returns the status of an existing transaction (Transaction has cleared 2020-06-05) </p> <img src="https://movdpwebsiteprodae.blob.core.windows.net/images/transaction_waitingOnClearedFundsCleared.png" alt="bank-ref"> <p> <strong> Note  </strong> Total balance for all direct debits waiting to be complete will be shown as the balance under 'Uncleared'. The Cleared Funds balance will show the total balance of all cleared funds and is able to be used. </p> <br>


```ts
async transactionStatusByUid(
  uniqueReference: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentGatewayTransactionStatusResponseV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uniqueReference` | `string` | Template, Required | This is your uniqueReference that was passed in when the transaction was executed<br>**Constraints**: *Maximum Length*: `200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentGatewayTransactionStatusResponseV2`](../../doc/models/dto-generic-payment-gateway-transaction-status-response-v2.md)

## Example Usage

```ts
const uniqueReference = 'f484ec18-6e1f-481b-a4bf-bea515d8lk34';

try {
  const { result, ...httpResponse } = await financialController.transactionStatusByUid(uniqueReference);
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


# Transaction Status by Date

This API returns the status of the specific date of the transactions. This is important because a directDebit transaction could be dishonoured up to 3 days after the transaction was executed.

```ts
async transactionStatusByDate(
  startDate: string,
  endDate: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentGatewayTransactionStatus2ResponseV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Template, Required | This is the startDate. date format should be 'yyyy-MM-dd' |
| `endDate` | `string` | Template, Required | This is the endDate. date format should be 'yyyy-MM-dd' |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentGatewayTransactionStatus2ResponseV2`](../../doc/models/dto-generic-payment-gateway-transaction-status-2-response-v2.md)

## Example Usage

```ts
const startDate = '01/01/2019 00:00:00';

const endDate = '01/31/2019 00:00:00';

try {
  const { result, ...httpResponse } = await financialController.transactionStatusByDate(
    startDate,
    endDate
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


# Transaction Execute

The purpose of the execute API is to debit a source for funds then distribute those funds to one or more supplied disbursement accounts. You can use the <a href="/payments#operation/TransactionValidate"> /financial/v2/transaction/validate </a> endpoint to determine if the parameters are correct. <br/> <br/> <strong> NPP Payment Pending Status</strong> <br/> If you are returned a status of ‘Pending’ for an NPP payout, this means that we are waiting for confirmation that the payment has been processed by the processor.

```ts
async transactionExecute(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentGenericFinanceResponseV2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentGenericFinanceResponseV2`](../../doc/models/dto-generic-payment-generic-finance-response-v2.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await financialController.transactionExecute();
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

