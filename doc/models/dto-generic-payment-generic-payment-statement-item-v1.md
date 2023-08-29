
# DTO Generic Payment Generic Payment Statement Item V1

## Structure

`DTOGenericPaymentGenericPaymentStatementItemV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uniqueReferenced` | `string \| undefined` | Optional | This is your uniqueReference that was passed in when the transaction was executed |
| `transactionId` | `number \| undefined` | Optional | This is the transactionId that was returned when the transaction was executed |
| `dateTime` | `string \| undefined` | Optional | The date time that the transaction was executed on the Platform Servers. Format is ISO8601 - 2015 -09 - 01T19: 19:58 |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors. |
| `totalAmount` | `number \| undefined` | Optional | This is the total amount of the transaction what was disbursed |
| `feeAmountExcludingGst` | `number \| undefined` | Optional | This is the fee amount Excluding GST that has been debited from your mAccount |
| `feeAmountGstComponent` | `number \| undefined` | Optional | This is the GST Component of the fee amount that has been debited from your mAccount |
| `feeAmountIncludingGst` | `number \| undefined` | Optional | This is the total fee amount Including GST that has been debited from your mAccount |

## Example (as JSON)

```json
{
  "uniqueReferenced": "43257",
  "transactionId": 36,
  "dateTime": "09/01/2018 19:19:38",
  "status": "OK",
  "totalAmount": 25.0,
  "feeAmountExcludingGst": 0.335,
  "feeAmountGstComponent": 0.0335,
  "feeAmountIncludingGst": 0.3685
}
```

