
# M Account

disbursement to mAccount

## Structure

`MAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'mAccount'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toMAccount` | `string` | Required | 16-Digit account number that uniquely identifies the mAccount<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |

## Example (as JSON)

```json
{
  "disbursementMethod": "mAccount",
  "description": "disbursement to mAccount",
  "toMAccount": "6279059726039800",
  "amount": 10.0
}
```

