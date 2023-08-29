
# Pay Id Update Pay Id Name

## Structure

`PayIdUpdatePayIdName`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `number` | Required | The bank account number for the account against when you Register a PayID. |
| `payId` | `string` | Required | Email address for the PayID.<br>**Constraints**: *Maximum Length*: `256` |
| `payIdName` | `string` | Required | Name displayed to the payers in order to identify you.<br>**Constraints**: *Maximum Length*: `140` |

## Example (as JSON)

```json
{
  "bankAccountNumber": 123409870,
  "payId": "f3y237@monoova.com",
  "payIdName": "John Smith"
}
```

