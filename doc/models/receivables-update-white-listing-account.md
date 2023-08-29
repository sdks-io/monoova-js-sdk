
# Receivables Update White Listing Account

## Structure

`ReceivablesUpdateWhiteListingAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `automatcherBankAccountNumber` | `number` | Required | Valid receivables bank account number belonging to the Sign-in mAccount. |
| `sourceAccount` | [`SourceAccount1 \| undefined`](../../doc/models/source-account-1.md) | Optional | This is the  sourceAccount |

## Example (as JSON)

```json
{
  "automatcherBankAccountNumber": 311673871,
  "sourceAccount": {
    "accountName": "accountName6",
    "accountNumber": 38,
    "accountStatus": "enabled",
    "bsbNumber": "bsbNumber2",
    "id": 142
  }
}
```

