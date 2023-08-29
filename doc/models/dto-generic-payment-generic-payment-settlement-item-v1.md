
# DTO Generic Payment Generic Payment Settlement Item V1

## Structure

`DTOGenericPaymentGenericPaymentSettlementItemV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uniqueReferenced` | `string \| undefined` | Optional | This is your uniqueReference that was passed in when the transaction was executed |
| `transactionId` | `number \| undefined` | Optional | This is the transactionId that was returned when the transaction was executed |
| `disbursementAmount` | `number \| undefined` | Optional | This is the settlement or the requested disbursement amount |
| `disbursementMethod` | `string \| undefined` | Optional | This is the disbursementMethod that was used to make the settlement payment |
| `feeAmountExclGst` | `number \| undefined` | Optional | This is the fee amount Excluding GST that has been debited from your mAccount |
| `feeAmountGstComponent` | `number \| undefined` | Optional | This is the GST Component of the fee amount that has been debited from your mAccount |
| `feeAmountInclGst` | `number \| undefined` | Optional | This is the total fee amount Including GST that has been debited from your mAccount |

## Example (as JSON)

```json
{
  "uniqueReferenced": "43257383821",
  "transactionId": 43343,
  "disbursementAmount": 25.0,
  "disbursementMethod": "bpay",
  "feeAmountExclGst": 0.335,
  "feeAmountGstComponent": 0.0335,
  "feeAmountInclGst": 0.3685
}
```

