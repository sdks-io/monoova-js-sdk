
# Event Receive Payment Webhook

## Structure

`EventReceivePaymentWebhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string \| undefined` | Optional | Monoova generated Unique ID. |
| `dateTime` | `string \| undefined` | Optional | Time Stamp. |
| `remitterName` | `string \| undefined` | Optional | Remitting Entity.<br>**Constraints**: *Maximum Length*: `140` |
| `amount` | `string \| undefined` | Optional | Payment amount, 2 decimal places for cents.<br>**Constraints**: *Maximum Length*: `11` |
| `accountName` | `string \| undefined` | Optional | Payer submitted Account Name.<br>**Constraints**: *Maximum Length*: `32` |
| `accountNumber` | `string \| undefined` | Optional | Payee Bank Account Number.<br>**Constraints**: *Maximum Length*: `9` |
| `bsb` | `string \| undefined` | Optional | Payee BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `paymentDescription` | `string \| undefined` | Optional | This is the Payment description provided by the Payer and is equivalent to the lodgementReference field in Direct Entry. It accepts UTF-8 character set.<br>**Constraints**: *Maximum Length*: `500` |
| `payId` | `string \| undefined` | Optional | Email address for the PayID.<br>**Constraints**: *Maximum Length*: `256` |
| `payIdName` | `string \| undefined` | Optional | PayID Name.<br>**Constraints**: *Maximum Length*: `256` |
| `sourceBsb` | `string \| undefined` | Optional | Payer BSB.<br>**Constraints**: *Maximum Length*: `7` |
| `sourceAccountNumber` | `string \| undefined` | Optional | Payer Bank Account Number.<br>**Constraints**: *Maximum Length*: `34` |
| `sourceAccountName` | `string \| undefined` | Optional | This field appears for NPP transactions only and is the payers bank account name. For DE transactions please refer to the  RemitterName Field.<br>**Constraints**: *Maximum Length*: `140` |
| `endToEndId` | `string \| undefined` | Optional | Osko End to End identifier submitted by Payer.<br>**Constraints**: *Maximum Length*: `140` |
| `categoryPurposeCode` | `string \| undefined` | Optional | NPP payment purpose code. Possible values are Blank, SALA, PENS, SUPP, TAXS<br>**Constraints**: *Maximum Length*: `4` |
| `creditorReferenceInformation` | `string \| undefined` | Optional | Used for SALA, PENS, SUPP and TAXS transactions only. Reference related to payment type.<br>**Constraints**: *Maximum Length*: `35` |
| `uSINumber` | `string \| undefined` | Optional | Used for PENS code payments only. Unique Superannuation ID (USI).<br>**Constraints**: *Maximum Length*: `35` |
| `uSIScheme` | `string \| undefined` | Optional | Used for PENS code payments only. USI scheme.<br>**Constraints**: *Maximum Length*: `35` |
| `ultimateCreditorName` | `string \| undefined` | Optional | Used for PENS code payments only. Name of the Ultimate Creditor.<br>**Constraints**: *Maximum Length*: `140` |

## Example (as JSON)

```json
{
  "TransactionId": "N00100000000",
  "DateTime": "20/10/2020 12:00:01 AM",
  "RemitterName": "ABC XYZ",
  "Amount": "10.0000",
  "AccountName": "Test1",
  "Bsb": "123-123",
  "PaymentDescription": "This is a free text which describes payment details",
  "payId": "test1@monoova.com",
  "payIdName": "monoova payIdName",
  "SourceBsb": "123-123",
  "SourceAccountNumber": "123456789",
  "SourceAccountName": "Monoova Payers Name",
  "EndToEndId": "TEST_EndToEnd_ID"
}
```

