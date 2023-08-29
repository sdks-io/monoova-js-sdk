
# Npp Credit Bank Account

disbursement to NppCreditBankAccount

## Structure

`NppCreditBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'NppCreditBankAccount'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toNppCreditBankAccountDetails` | [`ToNppCreditBankAccountDetails`](../../doc/models/to-npp-credit-bank-account-details.md) | Required | - |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |
| `lodgementReference` | `string \| undefined` | Optional | Reference will appear on payees statement. Refer to the disbursement object, May be overwritten for some account configurations, contact us for more details.<br>**Constraints**: *Maximum Length*: `280` |

## Example (as JSON)

```json
{
  "disbursementMethod": "NppCreditBankAccount",
  "description": "disbursement to NppCreditBankAccount",
  "toNppCreditBankAccountDetails": {
    "bsbNumber": "062-205",
    "accountNumber": "123456789",
    "accountName": "Monoova Payments",
    "endToEndId": "ABC/123-4356",
    "remitterName": "Monoova123"
  },
  "amount": 10.0,
  "lodgementReference": "Test Monoova"
}
```

