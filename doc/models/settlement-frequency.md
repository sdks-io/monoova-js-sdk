
# Settlement Frequency

## Structure

`SettlementFrequency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | [`Key3Enum \| undefined`](../../doc/models/key-3-enum.md) | Optional | - |
| `value` | [`ValueEnum \| undefined`](../../doc/models/value-enum.md) | Optional | None (No Settlement)<br>  Daily (Every Business Day)<br>  BeginningOfMonth (First Business Day of Month)<br>  EndOfMonth (Last Business Day of Month)<br>  MidMonth (15th of month)<br>  OnDemand (Only when user initiated)<br>  OnDemandWithCatch (User initiated and EOD)<br>  OncePerDay (Will not run at EOD if a manual settlement prior to for same day)<br>  Ignore (Ignore during import)<br><br>**Default**: `ValueEnum.Daily` |

## Example (as JSON)

```json
{
  "key": "SettlementFrequency",
  "value": "Daily"
}
```

