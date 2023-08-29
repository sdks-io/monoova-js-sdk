
# To B Pay Details

## Structure

`ToBPayDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `number` | Required | BPAY Biller code |
| `referenceNumber` | `bigint` | Required | BPAY Customer Reference Number. If this field is empty this denotes that the customerReferenceNumber is variable for each bill and should not be reused. |

## Example (as JSON)

```json
{
  "billerCode": 857763,
  "referenceNumber": 6279059700000505
}
```

