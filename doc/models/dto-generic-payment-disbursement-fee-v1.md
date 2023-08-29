
# DTO Generic Payment Disbursement Fee V1

## Structure

`DTOGenericPaymentDisbursementFeeV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | `string \| undefined` | Optional | The type of Disbursement: mAccount, mWallet, DirectCredit, BPAY, Charity, Sign-In mAccount |
| `feePercentageExGst` | `number \| undefined` | Optional | The percentage of the amountto be taken as a fee Excluding GST |
| `feeFixedExGst` | `number \| undefined` | Optional | The fixed amount to be taken as a fee Excluding GST |

## Example (as JSON)

```json
{
  "method": "BPay",
  "feePercentageExGst": 0.0,
  "feeFixedExGst": 0.4546
}
```

