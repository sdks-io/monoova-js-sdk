
# DTO Generic Payment Fee Detail

## Structure

`DTOGenericPaymentFeeDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `feeAmountExcludingGst` | `number \| undefined` | Optional | The fee amount excluding GST |
| `feeAmountGstComponent` | `number \| undefined` | Optional | The GST component of the fee |
| `feeAmountIncludingGst` | `number \| undefined` | Optional | The fee amount including GST |

## Example (as JSON)

```json
{
  "feeAmountExcludingGst": 0.1,
  "feeAmountGstComponent": 0.01,
  "feeAmountIncludingGst": 0.11
}
```

