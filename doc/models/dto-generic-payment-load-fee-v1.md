
# DTO Generic Payment Load Fee V1

## Structure

`DTOGenericPaymentLoadFeeV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | `string \| undefined` | Optional | The type of Disbursement: mAccount, mWallet, DirectCredit, BPAY, Charity, Sign-In mAccount |
| `cardType` | `string \| undefined` | Optional | Type of credit card. Null if method is not CreditCard: Mastercard, Visa, Diners, Amex |
| `debitFromMAccount` | `string \| undefined` | Optional | Contains the 16-Digit if the fee is associated to a specific mAccount, otherwise null |
| `feePercentageExGst` | `number \| undefined` | Optional | The percentage of the amountto be taken as a fee Excluding GST |
| `feeFixedExGst` | `number \| undefined` | Optional | The fixed amount to be taken as a fee Excluding GST |

## Example (as JSON)

```json
{
  "method": "BPAY",
  "cardType": "Amex",
  "debitFromMAccount": "null",
  "feePercentageExGst": 3.0,
  "feeFixedExGst": 0.25
}
```

