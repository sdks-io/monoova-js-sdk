
# DTO Generic Payment Gateway Transaction Status Response V2

## Structure

`DTOGenericPaymentGatewayTransactionStatusResponseV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors. |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `completedDate` | `string \| undefined` | Optional | This is the date when the transaction was Completed. |
| `creditCardPaymentStatus` | `string \| undefined` | Optional | This field is filled If transaction type is Credit-Card. |
| `dishonouredDate` | `string \| undefined` | Optional | once transaction is dishonoured with the transactionStatus set to 'Dishonoured' and the dishonouredDate has a value. |
| `expectedClearanceDateForFunds` | `string \| undefined` | Optional | expected clearance date for funds if applicable. |
| `fundsClearedDate` | `string \| undefined` | Optional | clearance date for funds if applicable. "yyyy-MM-dd" format. |
| `transactionStatus` | [`TransactionStatusEnum \| undefined`](../../doc/models/transaction-status-enum.md) | Optional | The transaction has not yet been dishonoured if the transactionStatus is 'Complete'. &nbsp; The transaction is dishonoured when the transactionStatus is set to 'Dishonoured' and the dishonouredDate has a value. |
| `uniqueReference` | `string \| undefined` | Optional | This is the unique reference that was passed in by the calling service. |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "completedDate": "2021-01-17",
  "transactionStatus": "Complete",
  "uniqueReference": "e1185a86-00a5-4d81-843d-2ea266b074f9",
  "creditCardPaymentStatus": "creditCardPaymentStatus8"
}
```

