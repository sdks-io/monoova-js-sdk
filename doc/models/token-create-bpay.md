
# Token Create BPAY

## Structure

`TokenCreateBPAY`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The mWallet or mAccount 16-Digit number that owns the payload. |
| `description` | `string \| undefined` | Optional | A simple text description that is associated with the token. For example “Monthly Electricity Bill BPAY”. |
| `billerCode` | `number` | Required | Biller Code as shown on the Bill. Must be a valid BPAY Biller on token creation. |
| `customerReferenceNumber` | `bigint` | Required | Customer Reference Number as shown on the Bill. Must be a valid BPAY Customer Reference Number on token creation. |
| `amount` | `number` | Required | Amount as shown on the Bill. Must be a valid amount on token creation. |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700010827",
  "description": "Monthly Electricity Bill BPAY",
  "billerCode": 857763,
  "customerReferenceNumber": 6279059700010918,
  "amount": 100.0
}
```

