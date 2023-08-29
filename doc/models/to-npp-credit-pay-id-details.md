
# To Npp Credit Pay Id Details

## Structure

`ToNppCreditPayIdDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payId` | `string` | Required | PayId Identifier of the Payee.<br>**Constraints**: *Maximum Length*: `256` |
| `payIdType` | [`PayIdType1Enum`](../../doc/models/pay-id-type-1-enum.md) | Required | PayId Type. Possible values:&nbsp; ABN, Email, PhoneNumber, OrganisationId, ACN |
| `accountName` | `string` | Required | This is the name of the account.<br>**Constraints**: *Minimum Length*: `2` |
| `endToEndId` | `string \| undefined` | Optional | Osko End to End identifier submitted by Payer.<br>**Constraints**: *Maximum Length*: `35` |
| `remitterName` | `string \| undefined` | Optional | Remitting Entity. <br/> Note&#58; Remitter name must not be able to be mistaken for another entity (e.g. ATO) and we will do checks.<br>**Constraints**: *Maximum Length*: `140` |

## Example (as JSON)

```json
{
  "payId": "MW9GM4@monoova.me",
  "payIdType": "Email",
  "accountName": "Monoova Payments",
  "endToEndId": "ABC/123-4356",
  "remitterName": "Monoova123"
}
```

