
# Source Account 1

This is the  sourceAccount

## Structure

`SourceAccount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | String of max 140 chars. |
| `accountNumber` | `number \| undefined` | Optional | 3 to 9 digits. |
| `accountStatus` | [`AccountStatus1Enum`](../../doc/models/account-status-1-enum.md) | Required | This is a plain English description of the status. enabled/disabled. |
| `bsbNumber` | `string \| undefined` | Optional | 6 digits with a '-'. |
| `id` | `number` | Required | identifier for whiteList sourceAccount |

## Example (as JSON)

```json
{
  "accountName": "Monoova Source Account Name",
  "accountNumber": 123456789,
  "accountStatus": "disabled",
  "bsbNumber": "802-985",
  "id": 107
}
```

