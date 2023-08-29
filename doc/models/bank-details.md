
# Bank Details

## Structure

`BankDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsb` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `accountNumber` | `string \| undefined` | Optional | Payee Bank Account Number.<br>**Constraints**: *Maximum Length*: `9` |
| `accountName` | `string \| undefined` | Optional | Payer submitted Account Name.<br>**Constraints**: *Maximum Length*: `32` |
| `token` | `string \| undefined` | Optional | Value will be present if token has used for the transaction. (will either have BSB, AccountNumber, AccountName OR Token) |

## Example (as JSON)

```json
{
  "Bsb": "802-985",
  "AccountNumber": "123456789",
  "AccountName": "Monoova",
  "Token": "Token6"
}
```

