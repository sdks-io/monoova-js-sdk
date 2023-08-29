
# DTOM Account Transaction Line Item

## Structure

`DTOMAccountTransactionLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credit` | `number \| undefined` | Optional | The amount of funds credited from the mAccount |
| `dateTime` | `string \| undefined` | Optional | The time the transaction occurred in ISO 8601 date-time format. Note that Timezone is suppressed. The example Timezone is Sydney local time |
| `debit` | `number \| undefined` | Optional | The amount of funds debited from the mAccount |
| `description` | `string \| undefined` | Optional | This is the description that was provided by the caller to the financial API with your unique reference prepended |
| `destinationMAccountCardNumber` | `string \| undefined` | Optional | If funds were being moved to an mAccount, then this is the mAccount 16-Digit card number |
| `isWaitingForFundsToClear` | `boolean \| undefined` | Optional | - |
| `mPaymentsId` | `number \| undefined` | Optional | This is the Platform internal Id for the row returned |
| `mWalletAccountNumber` | `string \| undefined` | Optional | If funds were being moved to/from an mWallet, then this is the mWallets 16-Digit account number |
| `rowOrder` | `number \| undefined` | Optional | If you need to sort the results, only use this field. If you sort the results on any other field, the runningBalance won’t make sense.rowOrder start at 0. |
| `runningBalance` | `number \| undefined` | Optional | The current balance of the mAccount at the end of this single row transaction |
| `sourceMAccountCardNumber` | `string \| undefined` | Optional | If funds were being moved from an mAccount, then this is the source mAccount 16-Digit Card number |
| `subTransactionType` | `string \| undefined` | Optional | Minor keyword describing thetransaction. E.g. GatewayMWalletCredit |
| `transactionDescription` | `string \| undefined` | Optional | A small description describing the financial action |
| `transactionId` | `number \| undefined` | Optional | This is the transactionId that was returned from a financial transaction |
| `transactionType` | `string \| undefined` | Optional | Major keyword describing the transaction. E.g. include Payment, LoadFunds, DailySettlement |
| `uniqueReference` | `string \| undefined` | Optional | This is the unique reference that was passed in by the calling service |

## Example (as JSON)

```json
{
  "credit": 0.0,
  "dateTime": "11/18/2017 19:06:09",
  "debit": 25.0,
  "description": "Payment",
  "destinationMAccountCardNumber": "6279059600052340",
  "isWaitingForFundsToClear": false,
  "mPaymentsId": 2303203,
  "mWalletAccountNumber": "6279059600052340",
  "rowOrder": 0,
  "runningBalance": 25,
  "sourceMAccountCardNumber": "6279059600052340",
  "subTransactionType": "GatewayMWalletCredit",
  "transactionDescription": "Payment To mWallet",
  "transactionId": 4958475,
  "transactionType": "LoadFunds",
  "uniqueReference": "0bbae2f1-428a-4843-0b3e4bc"
}
```

