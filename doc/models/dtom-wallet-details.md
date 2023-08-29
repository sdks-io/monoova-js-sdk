
# DTOM Wallet Details

## Structure

`DTOMWalletDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdDateTime` | `string \| undefined` | Optional | Date that this customer was created.ISO 8601 date-time format.Note that Timezone is suppressed.The example Timezone is Sydney local time |
| `accountNumber` | `string \| undefined` | Optional | 16-Digit account number that uniquely identifies the customer |
| `name` | `string \| undefined` | Optional | Customers full name |
| `nickName` | `string \| undefined` | Optional | This is a short form name of the customer |
| `email` | `string \| undefined` | Optional | Email address of the customer |
| `mobile` | `string \| undefined` | Optional | Mobile phone number of the customer |
| `lastTransactionDate` | `string \| undefined` | Optional | Date of the last transaction that the customer performed. ISO 8601 date format. This is an empty string if no transactions.Note that Timezone is suppressed.The example Timezone is Sydney local time |
| `contactPhone` | `string \| undefined` | Optional | Contact phone number for customer. Can be a mobile or landline |
| `authenticationEmail` | `string \| undefined` | Optional | Unique email address used to authenticate customer. Can be null |
| `authenticationMobile` | `string \| undefined` | Optional | Unique mobile number used to authenticate customer. Can be null |
| `authenticationLandLine` | `string \| undefined` | Optional | Unique telephone number used to authenticate customer. Can be null |
| `registeredByMAccountNumber` | `string \| undefined` | Optional | 16-Digit account number of the mAccount who created the customer |
| `isOnHold` | `boolean \| undefined` | Optional | The customer’s account has been put on hold |
| `isClosed` | `boolean \| undefined` | Optional | The customer’s account has been closed |
| `isStolen` | `boolean \| undefined` | Optional | - |
| `isRegistered` | `boolean \| undefined` | Optional | The mWallet is registered and is able to purchase restricted itemsfrom the mAccount such as BPAY |
| `financials` | [`DTOMWalletFinancials \| undefined`](../../doc/models/dtom-wallet-financials.md) | Optional | - |
| `options` | [`DTOMWalletOptionItem[] \| undefined`](../../doc/models/dtom-wallet-option-item.md) | Optional | mWalletOptionItem |

## Example (as JSON)

```json
{
  "createdDateTime": "01/19/2017 14:26:14",
  "accountNumber": "6279059700022400",
  "name": "Kelly",
  "nickName": "Kel",
  "email": "mPayments@monoova.com",
  "mobile": "0414811110",
  "contactPhone": "0414 555 555",
  "authenticationEmail": "mPayments@monoova.com",
  "authenticationMobile": "0414811110",
  "authenticationLandLine": "null",
  "registeredByMAccountNumber": "6279059700000810",
  "isOnHold": false,
  "isClosed": false,
  "isStolen": false,
  "isRegistered": true
}
```

