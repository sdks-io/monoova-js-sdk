
# Direct Credit

disbursement to directCredit

## Structure

`DirectCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'directCredit'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toDirectCreditDetails` | [`ToDirectCreditDetails`](../../doc/models/to-direct-credit-details.md) | Required | - |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |
| `lodgementReference` | `string \| undefined` | Optional | Reference will appear on payees statement. Refer to the disbursement object, May be overwritten for some account configurations, contact us for more details.<br>**Constraints**: *Maximum Length*: `18`, *Pattern*: `@"^[a-zA-Z0-9 \.\(\+\$\*\)\^\[\];\-\/,%_?:#@'=&!]*$"` |

## Example (as JSON)

```json
{
  "disbursementMethod": "directCredit",
  "description": "disbursement to directCredit",
  "toDirectCreditDetails": {
    "bsbNumber": "062-205",
    "accountNumber": "123456789",
    "accountName": "accountName2"
  },
  "amount": 10.0,
  "lodgementReference": "lodgementReference2"
}
```

