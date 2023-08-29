
# Npp Credit Pay Id

disbursement to NppCreditPayId

## Structure

`NppCreditPayId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'NppCreditPayId'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toNppCreditPayIdDetails` | [`ToNppCreditPayIdDetails`](../../doc/models/to-npp-credit-pay-id-details.md) | Required | - |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |
| `lodgementReference` | `string \| undefined` | Optional | Reference will appear on payees statement. Refer to the disbursement object, May be overwritten for some account configurations, contact us for more details.<br>**Constraints**: *Maximum Length*: `280` |

## Example (as JSON)

```json
{
  "disbursementMethod": "NppCreditPayId",
  "description": "disbursement to NppCreditPayId",
  "toNppCreditPayIdDetails": {
    "payId": "MW9GM4@monoova.me",
    "payIdType": "Email",
    "accountName": "Monoova Payments",
    "endToEndId": "ABC/123-4356",
    "remitterName": "Monoova123"
  },
  "amount": 10.0,
  "lodgementReference": "Test Monoova"
}
```

