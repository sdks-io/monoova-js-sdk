
# Receivables Create White Listing Account

## Structure

`ReceivablesCreateWhiteListingAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `automatcherBankAccountNumber` | `number` | Required | Valid receivables bank account number belonging to the Sign-in mAccount. |
| `sourceAccount` | [`SourceAccount \| undefined`](../../doc/models/source-account.md) | Optional | This is the  sourceAccount |

## Example (as JSON)

```json
{
  "automatcherBankAccountNumber": 311673871,
  "sourceAccount": {
    "bsbNumber": "bsbNumber2",
    "accountNumber": 38,
    "accountName": "accountName6",
    "accountStatus": "enabled"
  }
}
```

