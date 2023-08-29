
# M Account Create

## Structure

`MAccountCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | This is filled when updating the account details. |
| `allowDuplicates` | `boolean \| undefined` | Optional | If true, allow the creation of a new mAccount even though an existing mAccount with the same ABN exists. |
| `name` | `string` | Required | Company name of the mAccount.<br>**Constraints**: *Pattern*: `“ !\"#$%&'()*,-./:;=?@[a-zA-B0-9]{\|}”` |
| `abn` | `string` | Required | Company ABN of the mAccount. All non numbers are stripped. See allowDuplicates. |
| `contactName` | `string` | Required | Contact name. Spaces are stripped. |
| `contactNumber` | `number` | Required | Contact number. All non numbers are striped.<br>**Constraints**: `<= 15` |
| `email` | `string` | Required | Contact email. Converted to lowercase. |
| `addressLine1` | `string \| undefined` | Optional | An optional postal address line such as a Building, section or unit. |
| `addressLine2` | `string` | Required | An address line is the main postal address of the Company. |
| `suburb` | `string` | Required | Postal address suburb. |
| `state` | `string` | Required | Postal address state. |
| `postCode` | `string \| undefined` | Optional | Postal address post code. |
| `bsb` | `string \| undefined` | Optional | BSB number of associated bank account. BSB format is ‘000-000’. |
| `bankAccountNumber` | `number \| undefined` | Optional | Bank account number of associated bank account. |
| `bankAccountTitle` | `string \| undefined` | Optional | Bank account title or name of associated bank account. |
| `financials` | `boolean \| undefined` | Optional | See mAccountFinancials class This property is ignored when calling mAccount/v1/create and mAccount/v1/update. This property only contains valid values when calling mAccount/v1/get |
| `options` | [`Option[] \| undefined`](../../doc/models/option.md) | Optional | - |

## Example (as JSON)

```json
{
  "allowDuplicates": false,
  "name": "name0",
  "abn": "77 106 249 852",
  "contactName": "mPaysales",
  "contactNumber": 131.64,
  "email": "mPayments@Monoova.com.au",
  "addressLine1": "Level 6",
  "addressLine2": "97 Pacific Highway",
  "suburb": "North Sydney",
  "state": "NSW",
  "postCode": "2060",
  "bsb": "012-366",
  "bankAccountNumber": 123456789,
  "bankAccountTitle": "Monoova Bank Account",
  "accountNumber": "accountNumber2"
}
```

