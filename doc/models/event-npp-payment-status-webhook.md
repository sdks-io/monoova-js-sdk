
# Event Npp Payment Status Webhook

## Structure

`EventNppPaymentStatusWebhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionDate` | `string \| undefined` | Optional | Transaction Date. |
| `uniqueReference` | `string \| undefined` | Optional | Client UniqueReference, generated by the calling service.<br>**Constraints**: *Maximum Length*: `200` |
| `transactionId` | `number \| undefined` | Optional | Monoova Transaction Id. |
| `status` | `string \| undefined` | Optional | Transaction Status. |
| `amount` | `number \| undefined` | Optional | Amount. |
| `bsb` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `accountNumber` | `string \| undefined` | Optional | Payee Bank Account Number.<br>**Constraints**: *Maximum Length*: `28` |
| `accountName` | `string \| undefined` | Optional | Payee Account Name.<br>**Constraints**: *Maximum Length*: `140` |
| `payId` | `string \| undefined` | Optional | PayId Identifier of the Payee.<br>**Constraints**: *Maximum Length*: `256` |
| `payIdType` | [`PayIdType1Enum \| undefined`](../../doc/models/pay-id-type-1-enum.md) | Optional | PayId Type. Possible values:&nbsp; ABN, Email, PhoneNumber, OrganisationId, ACN |
| `endToEndId` | `string \| undefined` | Optional | End to End identifier submitted by Payer.<br>**Constraints**: *Maximum Length*: `35` |
| `remitterName` | `string \| undefined` | Optional | Original Remitting Entity.<br>**Constraints**: *Maximum Length*: `140` |
| `lodgementRef` | `string \| undefined` | Optional | Original Payment reference.<br>**Constraints**: *Maximum Length*: `280` |
| `rejectionDateTime` | `string \| undefined` | Optional | Rejection Date Time. |
| `rejectionReasonDescription` | `string \| undefined` | Optional | Rejection reason description.<br>**Constraints**: *Maximum Length*: `1000` |
| `rejectionTransactionId` | `number \| undefined` | Optional | Rejection Transaction Id. |

## Example (as JSON)

```json
{
  "TransactionDate": "07/22/2019 00:00:00",
  "UniqueReference": "2215125a-b80b-41aa-af58-740d21b303ed",
  "TransactionId": 1234567,
  "Amount": 2.0,
  "Bsb": "802-985",
  "AccountNumber": "123456789",
  "AccountName": "Monoova",
  "PayId": "MW9GM4@monoova.me",
  "PayIdType": "Email",
  "EndToEndId": "ABC/123-4356",
  "RemitterName": "Monoova123",
  "LodgementRef": "Ref1",
  "RejectionDateTime": "07/22/2019 00:00:00",
  "RejectionReasonDescription": "ACCOUNT CLOSED",
  "RejectionTransactionId": 1234567,
  "Status": "Status8"
}
```
