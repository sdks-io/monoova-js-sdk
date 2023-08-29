
# Receivables Status

## Structure

`ReceivablesStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `number \| undefined` | Optional | The bank account number for the account to open or close. <br/> `at least one of clientUniqueId or bankAccountNumber required` |
| `clientUniqueId` | `string \| undefined` | Optional | The unique identifier for the account to open or close. <br/> `at least one of clientUniqueId or bankAccountNumber required`<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `35` |
| `isActive` | `boolean \| undefined` | Optional | Used to open and close account numbers. Closed account numbers will return all payments made to that account number. |

## Example (as JSON)

```json
{
  "bankAccountNumber": 153884104,
  "clientUniqueId": "862944D057FC408B9B04541C2BA12",
  "isActive": false
}
```

