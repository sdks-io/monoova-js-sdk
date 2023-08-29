
# M Wallet Create

## Structure

`MWalletCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | `string` | Required | Email address, Telephone number, landline number or mWallet account number.<br>**Constraints**: *Maximum Length*: `300` |
| `pin` | `number` | Required | 4 digit numerical pin. |
| `name` | `string` | Required | Full name of customer.<br>**Constraints**: *Maximum Length*: `50` |
| `nickName` | `string \| undefined` | Optional | This is a short form name of the customer. Can be empty.<br>**Constraints**: *Maximum Length*: `20` |
| `dateOfBirth` | `string` | Required | Birth date of customer or require field in ISO 8601 date-time format. Note that Timezone is suppressed. The default Timezone is Sydney local time. |
| `phone` | `number \| undefined` | Optional | Contact phone number. This is not used for authentication. Required field in conjunction with email address that must start with 0. All non-numbers are stripped. <br/>Phone numbers are validated with google’s common <a href="https://github.com/google/libphonenumber" target='_blank' rel="noopener noreferrer">library</a>. Numbers that can't be validated as correct cannot be used in mWallet creation. A test tool for the validation routine can be found <a target='_blank' href="https://libphonenumber.appspot.com/" rel="noopener noreferrer">here</a>. |
| `email` | `string \| undefined` | Optional | Contact email. This is not used for authentication. Limited to 300 characters. Required field in conjunction with phone and should contain @ and follow normal email format conventions. Converted to lowercase. This email address is used to email the customer receipts for BPAY transactions.<br>**Constraints**: *Maximum Length*: `300` |
| `allowDuplicates` | `boolean \| undefined` | Optional | If true, allow the creation of a duplicate mWallet of any identifier type. |
| `abn` | `string \| undefined` | Optional | Company ABN of the mAccount. All non numbers are stripped |
| `options` | [`MobileForSms[] \| undefined`](../../doc/models/mobile-for-sms.md) | Optional | - |

## Example (as JSON)

```json
{
  "identifier": "0200000000",
  "pin": 0.0,
  "name": "Sample mWallet Name",
  "dateOfBirth": "01/01/1990 12:00:00",
  "email": "walletyser@monoova.com",
  "allowDuplicates": false,
  "abn": "77106249852",
  "nickName": "nickName4",
  "phone": 210.1
}
```

