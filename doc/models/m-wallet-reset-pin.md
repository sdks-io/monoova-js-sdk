
# M Wallet Reset Pin

## Structure

`MWalletResetPin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 16-Digit mWallet account number to reset.<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `pin` | `number` | Required | 4 digit numerical pin. |
| `dateOfBirth` | `string` | Required | Birth date of customer or require field in ISO 8601 date-time format. Note that Timezone is suppressed. The default Timezone is Sydney local time. |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700011434",
  "pin": 5555.0,
  "dateOfBirth": "01/01/1990 12:00:00"
}
```

