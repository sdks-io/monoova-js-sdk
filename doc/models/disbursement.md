
# Disbursement

## Structure

`Disbursement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | [`DisbursementMethodEnum \| undefined`](../../doc/models/disbursement-method-enum.md) | Optional | - |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toDirectCreditDetails` | [`ToDirectCreditDetails \| undefined`](../../doc/models/to-direct-credit-details.md) | Optional | - |
| `amount` | `number \| undefined` | Optional | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |
| `lodgementReference` | `string \| undefined` | Optional | Reference will appear on payees statement. Refer to the disbursement object, May be overwritten for some account configurations, contact us for more details.<br>**Constraints**: *Maximum Length*: `18`, *Pattern*: `@"^[a-zA-Z0-9 \.\(\+\$\*\)\^\[\];\-\/,%_?:#@'=&!]*$"` |
| `toMAccount` | `string \| undefined` | Optional | 16-Digit account number that uniquely identifies the mAccount<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `toMWallet` | `string \| undefined` | Optional | 16-Digit account number that uniquely identifies the mWallet<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `toToken` | `string \| undefined` | Optional | The text (GUID) that identifies the token |
| `toBPayDetails` | [`ToBPayDetails \| undefined`](../../doc/models/to-b-pay-details.md) | Optional | - |
| `toNppCreditBankAccountDetails` | [`ToNppCreditBankAccountDetails \| undefined`](../../doc/models/to-npp-credit-bank-account-details.md) | Optional | - |
| `toNppCreditPayIdDetails` | [`ToNppCreditPayIdDetails \| undefined`](../../doc/models/to-npp-credit-pay-id-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "disbursementMethod": "directCredit",
  "description": "disbursement to directCredit",
  "amount": 10.0,
  "toMAccount": "6279059726039800",
  "toMWallet": "6279059729909082",
  "toToken": "552489dac-5239-11ed-8a2f-d32b5c8d034c",
  "toDirectCreditDetails": {
    "bsbNumber": "bsbNumber6",
    "accountNumber": "accountNumber6",
    "accountName": "accountName2"
  },
  "lodgementReference": "lodgementReference2"
}
```

