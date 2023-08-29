
# Receivables Process Direct Debit Response V1

## Structure

`ReceivablesProcessDirectDebitResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `uniqueReferenced` | `string \| undefined` | Optional | This is your uniqueReference that was passed in when the transaction was executed |
| `transactionId` | `number \| undefined` | Optional | This is the transactionId that was returned when the transaction was executed |
| `feeAmountExcludingGst` | `number \| undefined` | Optional | This is the fee amount Excluding GST that has been debited from your mAccount |
| `feeAmountGstComponent` | `number \| undefined` | Optional | This is the GST Component of the fee amount that has been debited from your mAccount |
| `feeAmountIncludingGst` | `number \| undefined` | Optional | This is the total fee amount Including GST that has been debited from your mAccount |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "uniqueReferenced": "7cac95f8-6c9f-40e7-aa44-d058f601ee71",
  "transactionId": 16875766,
  "feeAmountExcludingGst": 0.1,
  "feeAmountGstComponent": 0.01,
  "feeAmountIncludingGst": 0.11
}
```

