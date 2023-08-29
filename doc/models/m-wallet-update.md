
# M Wallet Update

## Structure

`MWalletUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | 16-Digit mWallet account number to update.<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `pin` | `number` | Required | 4 digit numerical pin. |
| `name` | `string` | Required | Full name of customer. |
| `nickName` | `string \| undefined` | Optional | This is a short form name of the customer. Can be empty |
| `phone` | `number \| undefined` | Optional | Contact phone number. This is not used for authentication. Required field in conjunction with email address that must start with 0. All non-numbers are stripped. |
| `email` | `string \| undefined` | Optional | Contact email. This is not used for authentication. Limited to 300 characters. Required field in conjunction with phone and should contain @ and follow normal email format conventions. Converted to lowercase. |
| `abn` | `string \| undefined` | Optional | Company ABN of the mAccount. All non numbers are stripped |
| `options` | [`MobileForSms[] \| undefined`](../../doc/models/mobile-for-sms.md) | Optional | - |

## Example (as JSON)

```json
{
  "accountNumber": "6279059736211111",
  "pin": 5555.0,
  "name": "mPayments Retail",
  "nickName": "mPayments",
  "email": "mPayments@monoova.com",
  "abn": "77106249852",
  "phone": 210.1,
  "options": [
    {
      "key": "MobileForSms",
      "value": 70297171
    },
    {
      "key": "MobileForSms",
      "value": 70297171
    }
  ]
}
```

