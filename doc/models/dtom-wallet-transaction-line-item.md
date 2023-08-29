
# DTOM Wallet Transaction Line Item

## Structure

`DTOMWalletTransactionLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rowOrder` | `number \| undefined` | Optional | If you need to sort the results, only use this field. If you sort the results on any other field, the runningBalance won’t make sense.rowOrder start at 0. |
| `mPaymentsId` | `number \| undefined` | Optional | This is the Platform internal Id for the row returned |
| `transactionId` | `number \| undefined` | Optional | This is the transactionId that was returned from a financial transaction |
| `dateTime` | `string \| undefined` | Optional | The time the transaction occurred in ISO 8601 date-time format. Note that Timezone is suppressed. The example Timezone is Sydney local time |
| `mAccountName` | `string \| undefined` | Optional | Name of the mAccount that conducted the transaction |
| `transactionType` | `string \| undefined` | Optional | Major keyword describing the transaction. E.g. include Payment, LoadFunds, DailySettlement |
| `subTransactionType` | `string \| undefined` | Optional | Minor keyword describing thetransaction. E.g. GatewayMWalletCredit |
| `credit` | `number \| undefined` | Optional | The amount of funds credited from the mWallet |
| `debit` | `number \| undefined` | Optional | The amount of funds debited from the mWallet |
| `runningBalance` | `number \| undefined` | Optional | The current balance of the mAccount at the end of this single row transaction |
| `description` | `string \| undefined` | Optional | This is the description that was provided by the caller to the financial API with your unique reference prepended |

## Example (as JSON)

```json
{
  "rowOrder": 0,
  "mPaymentsId": 2303203,
  "transactionId": 4958475,
  "dateTime": "11/18/2017 19:06:09",
  "mAccountName": "6279059600052340",
  "transactionType": "LoadFunds",
  "subTransactionType": "GatewayMWalletCredit",
  "credit": 0,
  "debit": 25,
  "runningBalance": 0,
  "description": "0bbae2f1-428a-4843-0b3e4bc. - test description"
}
```

