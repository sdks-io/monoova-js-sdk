
# Token Create Australian Bank Account

## Structure

`TokenCreateAustralianBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint` | Required | The mWallet or mAccount 16-Digit number that owns the payload. |
| `description` | `string \| undefined` | Optional | A simple text description that is associated with the token. For example “Savings Account”.<br>**Constraints**: *Maximum Length*: `256` |
| `bankAccountName` | `string` | Required | Name associated with the bank account. Minimum length is 2.<br>**Constraints**: *Minimum Length*: `2` |
| `bankAccountNumber` | `number` | Required | This is the bank account number. Range of '1' to '999999999'.<br>**Constraints**: `>= 1`, `<= 999999999` |
| `bsb` | `string` | Required | Bank-State-Branch number. Format is 3-3 digits. (Eg. '000-000') |

## Example (as JSON)

```json
{
  "accountNumber": 6279059700010827,
  "description": "Savings Account",
  "bankAccountName": "Monoova Bank Account",
  "bankAccountNumber": 123456789,
  "bsb": "012-366"
}
```

