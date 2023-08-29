
# Source Account

This is the  sourceAccount

## Structure

`SourceAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsbNumber` | `string \| undefined` | Optional | 6 digits with a '-'. <br/> `at least one of BSB/AccountNumber or AccountName is required` |
| `accountNumber` | `number \| undefined` | Optional | 3 to 9 digits. <br/> `at least one of BSB/AccountNumber or AccountName is required` |
| `accountName` | `string \| undefined` | Optional | String of max 140 chars. Not case sensitive. <br/> `at least one of BSB/AccountNumber or AccountName is required`<br>**Constraints**: *Maximum Length*: `140` |
| `accountStatus` | [`AccountStatusEnum \| undefined`](../../doc/models/account-status-enum.md) | Optional | enabled/disabled. Default to enabled.<br>**Default**: `AccountStatusEnum.Enabled` |

## Example (as JSON)

```json
{
  "bsbNumber": "802-985",
  "accountNumber": 123456789,
  "accountName": "Monoova Source Account Name",
  "accountStatus": "enabled"
}
```

