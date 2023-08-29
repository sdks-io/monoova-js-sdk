
# Event Inbound Rtgs Imt Status

## Structure

`EventInboundRtgsImtStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string \| undefined` | Optional | Monoova generated Unique ID.<br>**Constraints**: *Maximum Length*: `12` |
| `accountNumber` | `string \| undefined` | Optional | Payee Bank Account Number.<br>**Constraints**: *Maximum Length*: `34` |
| `bsb` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `accountName` | `string \| undefined` | Optional | Payer submitted Account Name.<br>**Constraints**: *Maximum Length*: `32` |
| `transactionReferenceNumber` | `string \| undefined` | Optional | Transaction Reference Number.<br>**Constraints**: *Maximum Length*: `21` |
| `amount` | `number \| undefined` | Optional | Payment amount,2 decimal places for cents. |
| `status` | `string \| undefined` | Optional | Transaction Status. Possible value Confirmed/Rejected. |
| `lodgementRef` | `string \| undefined` | Optional | Payer submitted reference<br>**Constraints**: *Maximum Length*: `280` |
| `date` | `string \| undefined` | Optional | AEDT, Sydney. Transaction Received date. |
| `sourceDetails` | `string \| undefined` | Optional | Source Account Name address and account number (This will be an optional field depending on merchant setting) |
| `processedDateTime` | `string \| undefined` | Optional | AEDT, Sydney. This will indicate the time when transaction was Confirmed/Rejected. |
| `rejectReasonDescription` | `string \| undefined` | Optional | Reason why transaction was rejected.<br>**Constraints**: *Maximum Length*: `500` |
| `sendingOrganisation` | `string \| undefined` | Optional | Sending Organisation<br>**Constraints**: *Maximum Length*: `100` |
| `receivingOrganisation` | `string \| undefined` | Optional | Receiving Organisation<br>**Constraints**: *Maximum Length*: `100` |
| `orderingInstitution` | `string \| undefined` | Optional | Ordering Institution<br>**Constraints**: *Maximum Length*: `100` |
| `orderingAddress` | `string \| undefined` | Optional | Ordering Address<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "TransactionId": "R12345678",
  "AccountNumber": "123456789",
  "Bsb": "802-985",
  "AccountName": "Monoova",
  "TransactionReferenceNumber": "MONOOVARE070222b-2",
  "Amount": 800,
  "Status": "Confirmed",
  "LodgementRef": "IMT Gift CF3528811 0737599",
  "Date": "07/22/2019 00:00:00",
  "SourceDetails": "123123123456789 JOHN Test 123 SAMPLE ST SAMPLEVILLE NSW AUSTRALIA 1234",
  "ProcessedDateTime": "02/08/2022 00:00:00",
  "RejectReasonDescription": "null",
  "SendingOrganisation": "ABCWAU4BAXXX",
  "ReceivingOrganisation": "MONOOVA PAYMENTS P/L",
  "OrderingInstitution": "CDEWAU4BAXXX",
  "OrderingAddress": "FTBAAUSRBXXX"
}
```

