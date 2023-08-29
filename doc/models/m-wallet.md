
# M Wallet

disbursement to mWallet

## Structure

`MWallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'mWallet'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toMWallet` | `string` | Required | 16-Digit account number that uniquely identifies the mWallet<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |

## Example (as JSON)

```json
{
  "disbursementMethod": "mWallet",
  "description": "disbursement to mWallet",
  "toMWallet": "6279059729909082",
  "amount": 10.0
}
```

