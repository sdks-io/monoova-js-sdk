
# DTO Generic Payment Disbursment Fee

## Structure

`DTOGenericPaymentDisbursmentFee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementArrayIndex` | `number \| undefined` | Optional | This is the index into the Disbursement array that was passed to either financials/v2/transaction/validate or financials/v2/transaction/execute |
| `disbursementFee` | [`DTOGenericPaymentFeeDetail \| undefined`](../../doc/models/dto-generic-payment-fee-detail.md) | Optional | - |

## Example (as JSON)

```json
{
  "disbursementArrayIndex": 0,
  "disbursementFee": {
    "feeAmountExcludingGst": 189.32,
    "feeAmountGstComponent": 21.62,
    "feeAmountIncludingGst": 250.1
  }
}
```

