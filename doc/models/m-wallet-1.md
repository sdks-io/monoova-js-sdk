
# M Wallet 1

## Structure

`MWallet1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | 16-Digit account number that uniquely identifies the mWallet.<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `pin` | `string \| undefined` | Optional | 4 digit numerical pin.<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |

## Example (as JSON)

```json
{
  "token": "6279059729909082",
  "pin": "5555"
}
```

