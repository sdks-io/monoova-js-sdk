
# Pay Id Update Pay Id Status

## Structure

`PayIdUpdatePayIdStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `number` | Required | The bank account number for the account against when you Register a PayID. |
| `payId` | `string` | Required | Email address for the PayID.<br>**Constraints**: *Maximum Length*: `256` |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | Status of your PayID. Possible values: Enable, Disable, Deregister, Port |

## Example (as JSON)

```json
{
  "bankAccountNumber": 123409870,
  "payId": "f3y237@monoova.me",
  "status": "Disable"
}
```

