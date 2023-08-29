
# DTOM Wallet Financials

## Structure

`DTOMWalletFinancials`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actualBalance` | `number \| undefined` | Optional | Current remaining balance on the mWalletaccount |
| `availableSpend` | `number \| undefined` | Optional | The amount of funds that can be debited from the mWallet |
| `availableLoad` | `number \| undefined` | Optional | The amount of funds that can be credited to the mWallet |

## Example (as JSON)

```json
{
  "actualBalance": 0.0,
  "availableSpend": 3000.0,
  "availableLoad": 3000.0
}
```

