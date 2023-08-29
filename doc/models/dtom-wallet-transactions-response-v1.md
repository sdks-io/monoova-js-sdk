
# DTOM Wallet Transactions Response V1

## Structure

`DTOMWalletTransactionsResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `openingBalance` | `number \| undefined` | Optional | Opening balance of the mWalletfor the returned items |
| `closingBalance` | `number \| undefined` | Optional | Closing balance of the mWalletfor the returned items |
| `totalDebits` | `number \| undefined` | Optional | Total debits for the returned items |
| `totalCredits` | `number \| undefined` | Optional | Total credits for the returned items |
| `items` | [`DTOMWalletTransactionLineItem[] \| undefined`](../../doc/models/dtom-wallet-transaction-line-item.md) | Optional | mWalletTransactionLineItem |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "openingBalance": 0.0,
  "closingBalance": 0.0,
  "totalDebits": 25,
  "totalCredits": 25
}
```

