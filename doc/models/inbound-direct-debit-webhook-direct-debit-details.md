
# Inbound Direct Debit Webhook Direct Debit Details

## Structure

`InboundDirectDebitWebhookDirectDebitDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string \| undefined` | Optional | Monoova generated Unique ID.<br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |
| `batchId` | `string \| undefined` | Optional | Payment Batch ID. Payments come in batches throughout the day. |
| `dateTime` | `string \| undefined` | Optional | Time Stamp. |
| `status` | `string \| undefined` | Optional | The status of the transaction. Possible values are Pending, Reject, Accept. |
| `respondBeforeDateTime` | `string \| undefined` | Optional | Time by when you have to respond to the Inbound Direct Debit request. |
| `bsb` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `accountNumber` | `number \| undefined` | Optional | Payee Bank Account Number. |
| `accountName` | `string \| undefined` | Optional | Payer submitted Account Name.<br>**Constraints**: *Maximum Length*: `32` |
| `amount` | `number \| undefined` | Optional | Payment amount, 2 decimal places for cents. |
| `lodgementRef` | `string \| undefined` | Optional | Payer submitted reference.<br>**Constraints**: *Maximum Length*: `280` |
| `remitterName` | `string \| undefined` | Optional | Remitting Entity.<br>**Constraints**: *Maximum Length*: `16` |
| `nameOfUserSupplyingFile` | `string \| undefined` | Optional | Preferred name of the User supplying the Direct Entry file. |
| `numberOfUserSupplyingFile` | `string \| undefined` | Optional | This is the User Identification Number which is assigned by APCA and User Financial Institutions. |
| `descriptionOfEntriesOnFile` | `string \| undefined` | Optional | Direct Entry file description. |
| `indicator` | `string \| undefined` | Optional | Blank; OR 'W' dividend paid to a resident of a country where a double tax agreement is in force. 'X' dividend paid to a resident of any other country. 'Y' interest paid to all non-resident.<br>**Constraints**: *Maximum Length*: `1` |
| `withholdingTaxAmount` | `number \| undefined` | Optional | Blank OR Payment amount,2 decimal places for cents. |
| `sourceBsb` | `string \| undefined` | Optional | Payer BSB<br>**Constraints**: *Maximum Length*: `7` |
| `sourceAccountNumber` | `string \| undefined` | Optional | Payer Bank Account Number.<br>**Constraints**: *Maximum Length*: `34` |

## Example (as JSON)

```json
{
  "TransactionId": "D00100537784",
  "BatchId": "0000000212749",
  "DateTime": "01/13/2020 14:21:50",
  "Status": "Pending",
  "RespondBeforeDateTime": "01/14/2020 16:30:00",
  "Bsb": "802-985",
  "AccountNumber": 419001918,
  "AccountName": "DR",
  "Amount": 1,
  "LodgementRef": "Ref1",
  "RemitterName": "ABC XYZ",
  "NameOfUserSupplyingFile": "M PAYMENTS",
  "NumberOfUserSupplyingFile": "483449",
  "DescriptionOfEntriesOnFile": "PAYMENT TRNSFR",
  "WithholdingTaxAmount": 0,
  "SourceBsb": "123-123",
  "SourceAccountNumber": "123456789"
}
```

