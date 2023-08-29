
# DTO Generic Payment Fee Breakdown

## Structure

`DTOGenericPaymentFeeBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `debitFee` | [`DTOGenericPaymentFeeDetail \| undefined`](../../doc/models/dto-generic-payment-fee-detail.md) | Optional | - |
| `disbursementFees` | [`DTOGenericPaymentDisbursmentFee[] \| undefined`](../../doc/models/dto-generic-payment-disbursment-fee.md) | Optional | Returns an array for disbursementFee, which is the fee details for each disbursement. |

## Example (as JSON)

```json
{
  "debitFee": {
    "feeAmountExcludingGst": 120.64,
    "feeAmountGstComponent": 208.94,
    "feeAmountIncludingGst": 181.42
  },
  "disbursementFees": [
    {
      "disbursementArrayIndex": 59,
      "disbursementFee": {
        "feeAmountExcludingGst": 30.39,
        "feeAmountGstComponent": 118.69,
        "feeAmountIncludingGst": 91.17
      }
    },
    {
      "disbursementArrayIndex": 58,
      "disbursementFee": {
        "feeAmountExcludingGst": 30.4,
        "feeAmountGstComponent": 118.7,
        "feeAmountIncludingGst": 91.18
      }
    }
  ]
}
```

