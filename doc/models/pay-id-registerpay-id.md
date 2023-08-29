
# Pay Id Registerpay Id

## Structure

`PayIdRegisterpayId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `number` | Required | The bank account number for the account against which you are trying to Register a PayID |
| `payIdName` | `string` | Required | Name displayed to the payers in order to identify you.<br>**Constraints**: *Maximum Length*: `140` |
| `payId` | `string \| undefined` | Optional | Email address for the PayID.<br>**Constraints**: *Maximum Length*: `256` |

## Example (as JSON)

```json
{
  "bankAccountNumber": 123409870,
  "payIdName": "John Smith",
  "payId": "payId8"
}
```

