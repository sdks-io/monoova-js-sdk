
# ABA Token

disbursement to token

## Structure

`ABAToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'token'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toToken` | `string` | Required | The text (GUID) that identifies the token |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |
| `lodgementReference` | `string \| undefined` | Optional | Reference will appear on payees statement. Refer to the disbursement object, May be overwritten for some account configurations,contact us for more details.<br>**Constraints**: *Maximum Length*: `18`, *Pattern*: `@"^[a-zA-Z0-9 \.\(\+\$\*\)\^\[\];\-\/,%_?:#@'=&!]*$"` |

## Example (as JSON)

```json
{
  "disbursementMethod": "token",
  "description": "disbursement to ABAToken",
  "toToken": "552489dac-5239-11ed-8a2f-d32b5c8d034c",
  "amount": 10.0,
  "lodgementReference": "lodgementReference2"
}
```

