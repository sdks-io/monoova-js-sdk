# Reports

<h3>  Overview </h3> The APIs in the reports/v1 section help you keep track of balances and transactions. Payments automation is only helping you relax if you know where exactly your money is at any one point in time.


```ts
const reportsController = new ReportsController(client);
```

## Class Name

`ReportsController`

## Methods

* [Report Settlement](../../doc/controllers/reports.md#report-settlement)
* [Report Statement](../../doc/controllers/reports.md#report-statement)


# Report Settlement

You may choose to set your mAccounts to settle automatically every day.  If so, the mAccount balance will be brought to zero at 4pm (Sydney time) each business day.  Any positive balance will be disbursed to the bank account you have linked;  any negative balance will be direct debited from the bank account you have linked.  Transactions on weekends, public holidays and after 4pm won’t appear in the settlement report until after 4pm the next business day. <br> This report returns an array of actual disbursements for each transaction that was settled on the given date.  Date is represented by ISO8601 – ‘2016-03-01’ for 1st March 2016.

```ts
async reportSettlement(
  date: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentGenericPaymentSettlementResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | Date is represented by ISO8601 – ‘2016-03-01’ for 1st March 2016.<br>**Constraints**: *Maximum Length*: `13` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentGenericPaymentSettlementResponseV1`](../../doc/models/dto-generic-payment-generic-payment-settlement-response-v1.md)

## Example Usage

```ts
const date = '2016-03-01';

try {
  const { result, ...httpResponse } = await reportsController.reportSettlement(date);
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


# Report Statement

This API returns all successful transactions on the given date. Date is represented by ISO8601 – ‘2016-03-01’ for 1st March 2016.

```ts
async reportStatement(
  date: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DTOGenericPaymentGenericPaymentStatementResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | Date is represented by ISO8601 – ‘2016-03-01’ for 1st March 2016.<br>**Constraints**: *Maximum Length*: `13` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DTOGenericPaymentGenericPaymentStatementResponseV1`](../../doc/models/dto-generic-payment-generic-payment-statement-response-v1.md)

## Example Usage

```ts
const date = '2016-03-01';

try {
  const { result, ...httpResponse } = await reportsController.reportStatement(date);
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

