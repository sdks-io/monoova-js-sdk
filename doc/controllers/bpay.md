# BPAY

<h3>  Overview </h3> The BPAY APIs do not perform any financial transactions and are used to validate BPAY information that is used in the <a href="/payments#operation/TransactionExecute"> /financial/v2/transaction/execute </a>  API. The <a href="/payments#operation/TransactionValidate"> /financial/v2/transaction/validate </a> APIs also validates BPAY information using the same sub-system as documented in this section before performing any financial transactions.<br> <p> <strong>  Important Notes </strong> </p> <li> By design, BPAY validation can be time sensitive. If you cache valid BPAY information for later use, it may become invalid due to time expiry.</li> <li> By design, BPAY validation can be amount sensitive. If you cache valid BPAY information for later use and change the amount to pay then this could be invalid.</li> <li> BPAY validation should be performed immediately before calling the <a href="/payments#operation/TransactionExecute"> /financial/v2/transaction/execute </a> API to perform the bill payment. You have the option of calling <a href="/payments#operation/TransactionValidate"> /financial/v2/transaction/validate </a> (The first validation error will be returned which may not be a BPAY error) </li>


```ts
const bPAYController = new BPAYController(client);
```

## Class Name

`BPAYController`

## Methods

* [BPAY Receivables Report](../../doc/controllers/bpay.md#bpay-receivables-report)
* [BPAY Validate](../../doc/controllers/bpay.md#bpay-validate)
* [BPAY Get Biller](../../doc/controllers/bpay.md#bpay-get-biller)
* [BPAY Get Receipts](../../doc/controllers/bpay.md#bpay-get-receipts)
* [BPAY Get Billers](../../doc/controllers/bpay.md#bpay-get-billers)
* [BPAY Get History](../../doc/controllers/bpay.md#bpay-get-history)


# BPAY Receivables Report

Returns a report of all received  BPAY transactions for the day with associated details. If requested multiple times on the current date (calendar day, AEDT), the report is cumulative. E.g. if, on the same day, a report is requested at 10am and another one at 1pm, the report at 1pm will contain all the transactions already contained in the 10am report, in addition to any new transactions. <br/> <br/> The report is an application/octet-stream, columns are comma separated. Where a comma(,) or double quote(") is present in any of the below fields, the field will be encased in double quotes and/or escaped as per <a href="https://tools.ietf.org/html/rfc4180" target="_blank">RFC4180</a><br> Columns are as follows:&nbsp; <style type="text/css"> .tb { table-layout:auto; width:100px;!important } .td { overflow:hidden; white-space:nowrap; text-overflow:ellipsis; !important} </style> <table class="tb"> <tr> <td class="td"> Transaction Id </td> <td class="td"> Batch Id </td> <td class="td"> BPAY Settlement Date </td> <td class="td"> Payment Accepted DateTime </td> <td class="td"> Payment Type </td> <td class="td"> Payer Institution Code </td> <td class="td"> Payer State </td> <td class="td"> Biller Code </td> <td class="td"> Customer Reference Number </td> <td class="td"> Payment Method </td> <td class="td"> Amount </td> <td class="td"> Transaction Reference Number </td> </tr> <tr> <td class="td"> <br/> <br/> Monoova generated Unique ID.<br/> Integer.<br/> <br/> <br/> <br/> </td> <td class="td"> Payment Batch ID. <br/> Payments come in batches <br/> throughout the day. <br/> Integer.<br/> </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Possible values:&nbsp; <br/> 'Payment', 'Error Correction', 'Reversal'. </td> <td class="td"> PayerInstitutionCode. <br/> Max 3 chars. </td> <td class="td"> PayerState <br/> Max 3 chars. </td> <td class="td"> BillerCode <br/> Max 10 chars. </td> <td class="td"> CustomerReferenceNumber  <br/> Max 20 chars. </td> <td class="td"> PaymentMethod <br/> Max 3 chars.   <br/> </td> <td class="td"> Amount, <br/> 2 decimal places <br/> for cents. Max 12 chars. </td> <td class="td"> TransactionReferenceNumber. <br/> Max 21 chars. </td> </tr> </table>

```ts
async bPAYReceivablesReport(
  date: string,
  skip?: number,
  take?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | Format:&nbsp; 'yyyy-MM-dd'. The date for which Monoova received the BPAY Receivable transactions. |
| `skip` | `number \| undefined` | Query, Optional | Number of records to skip. 1 is the first record. |
| `take` | `number \| undefined` | Query, Optional | Number of records to take. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const date = '2020-11-01';

const skip = 1;

const take = 100;

try {
  const { result, ...httpResponse } = await bPAYController.bPAYReceivablesReport(
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


# BPAY Validate

This API validates the BPAY Biller Code and optionally the BPAY Customer Reference Number and Amount. For a complete BPAY validation the BPAY Biller Code, BPAY Customer Reference Number and Amount must be supplied. When fully validated a BPAY financial transaction should be made as soon as practicable as some BPAY combinations are date sensitive. BPAY validation uses the BPAY subsystem error codes. <br/> Sample URL:&nbsp; https://api.mpay.com.au/bpay/v1/validate/{billerCode}?custRef={CRN}&amount={amount}

```ts
async bPAYValidate(
  billerCode: string,
  custRef?: string,
  amount?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOValidateBPAYResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `string` | Template, Required | This is the BPAY biller code that was requested. billerCode must be numeric<br>**Constraints**: *Maximum Length*: `10` |
| `custRef` | `string \| undefined` | Query, Optional | BPAY Customer Reference Number. If this field is empty this denotes that the customerReferenceNumber is variable for each bill and should not be reused.<br>**Constraints**: *Maximum Length*: `20` |
| `amount` | `number \| undefined` | Query, Optional | Bill amount to be validated. <strong> Note if CustRef is not provided, amount will not validate as it is dependent on both the CRN and Biller. </strong> The maximum value of the field is $9999999999.99. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOValidateBPAYResponseV1`](../../doc/models/dto-validate-bpay-response-v1.md)

## Example Usage

```ts
const billerCode = '857763';

const custRef = '6279059700000505';

const amount = 100;

try {
  const { result, ...httpResponse } = await bPAYController.bPAYValidate(
    billerCode,
    custRef,
    amount
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


# BPAY Get Biller

This API returns extended information for the BPAY biller. Status will be “UnknownBillerCode” if Biller Code is invalid.

```ts
async bPAYGetBiller(
  billerCode: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOBPAYBillerResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `string` | Template, Required | This is the BPAY biller code that was requested. billerCode must be numeric<br>**Constraints**: *Maximum Length*: `10` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOBPAYBillerResponseV1`](../../doc/models/dtobpay-biller-response-v1.md)

## Example Usage

```ts
const billerCode = '857763';

try {
  const { result, ...httpResponse } = await bPAYController.bPAYGetBiller(billerCode);
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


# BPAY Get Receipts

This API returns the list of BPAY receipts. <br/> <strong> Note&#58;</strong>  Filters - One of the below options should be provided by customer. <br/> 1) UniqueReference <br/> 2) Biller Code + CustomerReferenceNumber + DateTime

```ts
async bPAYGetReceipts(
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOBPAYReceiptResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOBPAYReceiptResponseV1`](../../doc/models/dtobpay-receipt-response-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bPAYController.bPAYGetReceipts();
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


# BPAY Get Billers

This API returns an array of BPAY billers matched to the case insensitive search string. The system matches on the billerLongName and billerShortName. Use skip and take to page through result set. Skip and take will be changed back to their defaults if they are over-range. Status will be “UnknownBillerCode” if there are no matches.

```ts
async bPAYGetBillers(
  search?: string,
  skip?: number,
  take?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOBPAYBillersResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | `string \| undefined` | Query, Optional | The search string |
| `skip` | `number \| undefined` | Query, Optional | The actual number of records skipped. |
| `take` | `number \| undefined` | Query, Optional | The number of records that were requested. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOBPAYBillersResponseV1`](../../doc/models/dtobpay-billers-response-v1.md)

## Example Usage

```ts
const search = 'pty%20ltd';

const skip = 0;

const take = 50;

try {
  const { result, ...httpResponse } = await bPAYController.bPAYGetBillers(
    search,
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


# BPAY Get History

This API returns the mWallets history of BPAY payments. The returned history list is sorted by the count property of the BPAYHistoryItem descending.

```ts
async bPAYGetHistory(
  accountNumber: bigint,
  take?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOBPAYHistoryResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint` | Template, Required | associated 'mWallet' 16 digit number |
| `take` | `number \| undefined` | Query, Optional | The number of records that were requested. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOBPAYHistoryResponseV1`](../../doc/models/dtobpay-history-response-v1.md)

## Example Usage

```ts
const accountNumber = BigInt('6279059700022400');

const take = 50;

try {
  const { result, ...httpResponse } = await bPAYController.bPAYGetHistory(
    accountNumber,
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

