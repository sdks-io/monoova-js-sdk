
# Receivables Get White Listing Accounts Response V1

## Structure

`ReceivablesGetWhiteListingAccountsResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `automatcherBankAccountNumber` | `number \| undefined` | Optional | Valid receivables bank account number belonging to the Sign-in mAccount. |
| `sourceAccount` | [`SourceAccount4[] \| undefined`](../../doc/models/source-account-4.md) | Optional | Object containing source account details |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "automatcherBankAccountNumber": 311673871,
  "sourceAccount": [
    {
      "accountName": "accountName7",
      "accountNumber": 105,
      "accountStatus": "accountStatus1",
      "bsbNumber": "bsbNumber1",
      "id": 29
    },
    {
      "accountName": "accountName8",
      "accountNumber": 106,
      "accountStatus": "accountStatus2",
      "bsbNumber": "bsbNumber0",
      "id": 30
    }
  ]
}
```

