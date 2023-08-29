
# DTOM Account Cleared Funds Account

## Structure

`DTOMAccountClearedFundsAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `availableBalance` | `number \| undefined` | Optional | available funds |
| `unclearedFunds` | `number \| undefined` | Optional | on hold funds from Direct Debit transaction |
| `uniqueReferencesWaitingToClear` | `string[] \| undefined` | Optional | an list of cleardsfunds transaction that is waiting to clear |

## Example (as JSON)

```json
{
  "availableBalance": 1250.3,
  "unclearedFunds": 20.0,
  "uniqueReferencesWaitingToClear": [
    "uniqueReferencesWaitingToClear7"
  ]
}
```

