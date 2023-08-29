
# DTO Generic Payment Generic Finance Response V2

## Structure

`DTOGenericPaymentGenericFinanceResponseV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `transactionId` | `number \| undefined` | Optional | This is the Platform ID that is unique to your payment request. 0 will be returned if any errors occurred. |
| `feeAmountExcludingGst` | `number \| undefined` | Optional | This is the fee amount excluding GST |
| `feeAmountGstComponent` | `number \| undefined` | Optional | This is the GST Component of the fee amount that has been debited from your mAccount |
| `feeAmountIncludingGst` | `number \| undefined` | Optional | This is the total fee amount Including GST that has been debited from your mAccount |
| `callerUniqueReference` | `string \| undefined` | Optional | This is the unique reference that was passed in by the calling service |
| `feeBreakdown` | [`DTOGenericPaymentFeeBreakdown \| undefined`](../../doc/models/dto-generic-payment-fee-breakdown.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "transactionId": 10926364,
  "feeAmountExcludingGst": 0.2,
  "feeAmountGstComponent": 0.02,
  "feeAmountIncludingGst": 0.22,
  "callerUniqueReference": "e1185a86-00a5-4d81-843d-2ea266b074f8"
}
```

