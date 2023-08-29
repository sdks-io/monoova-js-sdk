
# DTOM Account Details

## Structure

`DTOMAccountDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `bigint \| undefined` | Optional | 16-Digit account number that uniquely identifies the mAccount |
| `name` | `string \| undefined` | Optional | Company name of the mAccount |
| `abn` | `string \| undefined` | Optional | Company ABN of the mAccount. All non numbers are stripped |
| `contactName` | `string \| undefined` | Optional | Contact name. Spaces are stripped |
| `contactNumber` | `string \| undefined` | Optional | Contact number. All non numbers are striped |
| `email` | `string \| undefined` | Optional | Contact email. Converted to lowercase |
| `addressLine1` | `string \| undefined` | Optional | An optional postal addressline such as a Building, section or unit |
| `addressLine2` | `string \| undefined` | Optional | An address line is the main postal address of the Company |
| `suburb` | `string \| undefined` | Optional | Postal address suburb |
| `state` | `string \| undefined` | Optional | Postal addres sstate |
| `postCode` | `string \| undefined` | Optional | Postal address post code |
| `bsb` | `string \| undefined` | Optional | BSB number of associated bank account. BSB format is ‘000-000’ |
| `bankAccountNumber` | `number \| undefined` | Optional | Bank account number of associated bank account |
| `bankAccountTitle` | `string \| undefined` | Optional | Bank account title or nameof associated bank account |
| `allowDuplicates` | `boolean \| undefined` | Optional | If true, allow the creation of a new mAccount even though an existing mAccount with the same ABN exists |
| `feeAccount` | `number \| undefined` | Optional | - |
| `financials` | [`DTOMAccountFinancials \| undefined`](../../doc/models/dtom-account-financials.md) | Optional | - |
| `options` | [`DTOOptionItem[] \| undefined`](../../doc/models/dto-option-item.md) | Optional | an Array of mAccountOptionItem |

## Example (as JSON)

```json
{
  "accountNumber": 6279059700023123,
  "name": "Monoova Ltd",
  "abn": "77106249852",
  "contactName": "mPayRetail",
  "contactNumber": "0295555555",
  "email": "mPayments@monoova.com",
  "addressLine1": "Level 6",
  "addressLine2": "97 Pacific Highway",
  "suburb": "North Sydney",
  "state": "NSW",
  "postCode": "2060",
  "bsb": "012-366",
  "bankAccountNumber": 123456789,
  "bankAccountTitle": "Test Bank Account",
  "allowDuplicates": true
}
```

