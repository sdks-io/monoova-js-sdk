
# To Npp Credit Bank Account Details

## Structure

`ToNppCreditBankAccountDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsbNumber` | `string` | Required | BSB (Bank-State-Branch) number. The format is a string in the following format:&nbsp;‘999-999’. |
| `accountNumber` | `string` | Required | This is the bank account number.<br>**Constraints**: *Maximum Length*: `28`, *Pattern*: `^[a-zA-Z0-9]*\z` |
| `accountName` | `string` | Required | This is the name of the account.<br>**Constraints**: *Minimum Length*: `2` |
| `endToEndId` | `string \| undefined` | Optional | Osko End to End identifier submitted by Payer.<br>**Constraints**: *Maximum Length*: `35` |
| `remitterName` | `string \| undefined` | Optional | Remitting Entity.<br/> Note&#58; Remitter name must not be able to be mistaken for another entity (e.g. ATO) and we will do checks.<br>**Constraints**: *Maximum Length*: `140` |

## Example (as JSON)

```json
{
  "bsbNumber": "062-205",
  "accountNumber": "123456789",
  "accountName": "Monoova Payments",
  "endToEndId": "ABC/123-4356",
  "remitterName": "Monoova123"
}
```

