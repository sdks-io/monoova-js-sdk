
# BPAY

disbursement to BPAY

## Structure

`BPAY`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursementMethod` | `string` | Required, Constant | **Default**: `'BPAY'` |
| `description` | `string \| undefined` | Optional | description for the transaction |
| `toBPayDetails` | [`ToBPayDetails`](../../doc/models/to-b-pay-details.md) | Required | - |
| `amount` | `number` | Required | This is the amount of funds to be paid<br>**Constraints**: `>= 0.01` |

## Example (as JSON)

```json
{
  "disbursementMethod": "BPAY",
  "description": "disbursement to BPAY",
  "toBPayDetails": {
    "billerCode": 857763,
    "referenceNumber": 6279059700000505
  },
  "amount": 10.0
}
```

