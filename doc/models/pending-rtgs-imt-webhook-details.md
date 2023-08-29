
# Pending Rtgs Imt Webhook Details

## Structure

`PendingRtgsImtWebhookDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string \| undefined` | Optional | Monoova generated Unique ID.<br>**Constraints**: *Maximum Length*: `12` |
| `accountNumber` | `string \| undefined` | Optional | Payee Bank Account Number.<br>**Constraints**: *Maximum Length*: `34` |
| `bSB` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `accountName` | `string \| undefined` | Optional | Payer submitted Account Name.<br>**Constraints**: *Maximum Length*: `32` |
| `transactionReferenceNumber` | `string \| undefined` | Optional | Transaction Reference Number.<br>**Constraints**: *Maximum Length*: `21` |
| `amount` | `number \| undefined` | Optional | Payment amount,2 decimal places for cents. |
| `status` | `string \| undefined` | Optional | Transaction Status. Possible value Pending. |
| `lodgementRef` | `string \| undefined` | Optional | Payer submitted reference<br>**Constraints**: *Maximum Length*: `280` |
| `date` | `string \| undefined` | Optional | AEDT, Sydney. Transaction Received date. |
| `sourceDetails` | `string \| undefined` | Optional | Source Account Name address and account number (This will be an optional field depending on merchant setting) |
| `respondBeforeDateTime` | `string \| undefined` | Optional | AEDT, Sydney. This will indicate the time user has to Confirm/Reject a transaction. |
| `sendingOrganisation` | `string \| undefined` | Optional | Sending Organisation<br>**Constraints**: *Maximum Length*: `100` |
| `receivingOrganisation` | `string \| undefined` | Optional | Receiving Organisation<br>**Constraints**: *Maximum Length*: `100` |
| `orderingInstitution` | `string \| undefined` | Optional | Ordering Institution<br>**Constraints**: *Maximum Length*: `100` |
| `originatingAddress` | `string \| undefined` | Optional | Originating Address<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "TransactionId": "R10002222",
  "AccountNumber": "123456789",
  "BSB": "802-985",
  "AccountName": "Monoova",
  "Amount": 800,
  "Status": "Pending",
  "LodgementRef": "Test Reference",
  "Date": "07/22/2019 00:00:00",
  "SourceDetails": "123123123456789 JOHN Test 123 SAMPLE ST SAMPLEVILLE NSW AUSTRALIA 1234",
  "RespondBeforeDateTime": "02/08/2022 00:00:00",
  "SendingOrganisation": "ABCWAU4BAXXX",
  "ReceivingOrganisation": "MONOOVA PAYMENTS P/L",
  "OrderingInstitution": "CDEWAU4BAXXX",
  "OriginatingAddress": "CDEWAU4BAXXX",
  "TransactionReferenceNumber": "TransactionReferenceNumber6"
}
```

