
# Receivables Create White Listing Account Response V1

## Structure

`ReceivablesCreateWhiteListingAccountResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `automatcherBankAccountNumber` | `number \| undefined` | Optional | Valid receivables bank account number belonging to the Sign-in mAccount. |
| `sourceAccount` | [`SourceAccount2 \| undefined`](../../doc/models/source-account-2.md) | Optional | Object containing source account details |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "automatcherBankAccountNumber": 311673871,
  "sourceAccount": {
    "accountName": "accountName6",
    "accountNumber": "accountNumber0",
    "accountStatus": "accountStatus0",
    "bsbNumber": "bsbNumber2",
    "id": 142
  }
}
```

