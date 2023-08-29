
# Option

## Structure

`Option`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | [`KeyEnum \| undefined`](../../doc/models/key-enum.md) | Optional | - |
| `value` | [`Value1Enum \| undefined`](../../doc/models/value-1-enum.md) | Optional | None (No Settlement)<br>  Daily (Every Business Day)<br>  BeginningOfMonth (First Business Day of Month)<br>  EndOfMonth (Last Business Day of Month)<br>  MidMonth (15th of month)<br>  OnDemand (Only when user initiated)<br>  OnDemandWithCatch (User initiated and EOD)<br>  OncePerDay (Will not run at EOD if a manual settlement prior to for same day)<br>  Ignore (Ignore during import)<br> |

## Example (as JSON)

```json
{
  "key": "MinimumSettlementAmount",
  "value": 1
}
```

