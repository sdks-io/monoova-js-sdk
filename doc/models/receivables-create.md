
# Receivables Create

## Structure

`ReceivablesCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountName` | `string` | Required | The name of the account to be paid into. Not used for validation of incoming payments.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `32`, *Pattern*: `“ !\"#$%&'()*,-./:;=?@[a-zA-B0-9]{\|}”` |
| `clientUniqueId` | `string \| undefined` | Optional | An identifier assigned to the account. Must be unique. If not provided Monoova will generate and return a value automatically.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `35`, *Pattern*: `[a-zA-Z0-9]` |
| `isActive` | `boolean \| undefined` | Optional | Used to open and close account numbers. Closed account numbers will return all payments made to that account number. If not provided this value defaults to false. The Automatcher account can take up to 5 mins to be registered and become active before a PayID can be assigned or deposits can be made to the account. The status will automatically changes from false to true.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "bankAccountName": "bankAccountName8",
  "clientUniqueId": "862944D057FC408B9B04541C2BA12",
  "isActive": true
}
```

