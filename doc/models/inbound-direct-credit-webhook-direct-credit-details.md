
# Inbound Direct Credit Webhook Direct Credit Details

## Structure

`InboundDirectCreditWebhookDirectCreditDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string \| undefined` | Optional | Monoova generated Unique ID.<br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |
| `batchId` | `string \| undefined` | Optional | Payment Batch ID. Payments come in batches throughout the day. |
| `dateTime` | `string \| undefined` | Optional | Time Stamp. |
| `bsb` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `accountNumber` | `number \| undefined` | Optional | Payee Bank Account Number. |
| `accountName` | `string \| undefined` | Optional | Payer submitted Account Name.<br>**Constraints**: *Maximum Length*: `32` |
| `transactionCode` | `string \| undefined` | Optional | Externally initiated credit items with the exception of those bearing Transaction Codes.<br>**Constraints**: *Maximum Length*: `5` |
| `amount` | `number \| undefined` | Optional | Payment amount, 2 decimal places for cents. |
| `lodgementRef` | `string \| undefined` | Optional | Payer submitted reference.<br>**Constraints**: *Maximum Length*: `280` |
| `remitterName` | `string \| undefined` | Optional | Remitting Entity.<br>**Constraints**: *Maximum Length*: `16` |
| `nameOfUserSupplyingFile` | `string \| undefined` | Optional | Preferred name of the User supplying the Direct Entry file. |
| `numberOfUserSupplyingFile` | `string \| undefined` | Optional | This is the User Identification Number which is assigned by APCA and User Financial Institutions. |
| `descriptionOfEntriesOnFile` | `string \| undefined` | Optional | Direct Entry file description. |
| `indicator` | `string \| undefined` | Optional | Blank; OR 'W' dividend paid to a resident of a country where a double tax agreement is in force. 'X' dividend paid to a resident of any other country. 'Y' interest paid to all non-resident.<br>**Constraints**: *Maximum Length*: `1` |
| `withholdingTaxAmount` | `number \| undefined` | Optional | Blank OR Payment amount,2 decimal places for cents. |
| `sourceBsb` | `string \| undefined` | Optional | Payer BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `sourceAccountNumber` | `string \| undefined` | Optional | Payer Bank Account Number.<br>**Constraints**: *Maximum Length*: `34` |

## Example (as JSON)

```json
{
  "TransactionId": "TransactionId8",
  "BatchId": "BatchId6",
  "DateTime": "DateTime0",
  "Bsb": "Bsb0",
  "AccountNumber": 144
}
```

