
# DTO Generic Payment Generic Payment Statement Response V1

## Structure

`DTOGenericPaymentGenericPaymentStatementResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `transactions` | [`DTOGenericPaymentGenericPaymentStatementItemV1[] \| undefined`](../../doc/models/dto-generic-payment-generic-payment-statement-item-v1.md) | Optional | An array of TransactionItem’s |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "transactions": [
    {
      "uniqueReferenced": "uniqueReferenced7",
      "transactionId": 17,
      "dateTime": "dateTime5",
      "status": "status9",
      "totalAmount": 73.51
    },
    {
      "uniqueReferenced": "uniqueReferenced8",
      "transactionId": 18,
      "dateTime": "dateTime6",
      "status": "status0",
      "totalAmount": 73.52
    }
  ]
}
```

