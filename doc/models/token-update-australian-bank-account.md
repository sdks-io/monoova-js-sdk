
# Token Update Australian Bank Account

## Structure

`TokenUpdateAustralianBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The mWallet or mAccount 16-Digit number that owns the payload. |
| `tokenToUpdate` | `string` | Required | The text (GUID) that identifies the token. |
| `description` | `string \| undefined` | Optional | A simple text description that is associated with the token. For example “Savings Account”. |
| `bankAccountName` | `string` | Required | Name associated with the bank account.<br>**Constraints**: *Minimum Length*: `2` |
| `bankAccountNumber` | `number` | Required | This is the bank account number.<br>**Constraints**: `>= 100`, `<= 999999999` |
| `bsb` | `string` | Required | Bank-State-Branch number. Format is 3-3 digits. (Eg.'000-000') |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700010827",
  "tokenToUpdate": "9395ddef-69cb-4f38-8836-3c6502c72182",
  "description": "Savings Account",
  "bankAccountName": "Monoova Bank Account",
  "bankAccountNumber": 123456789,
  "bsb": "012-366"
}
```

