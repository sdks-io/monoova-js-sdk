
# Token Update BPAY

## Structure

`TokenUpdateBPAY`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The mWallet or mAccount 16-Digit number that owns the payload. |
| `tokenToUpdate` | `string` | Required | The text (GUID) that identifies the token. |
| `description` | `string \| undefined` | Optional | A simple text description that is associated with the token. For example “Monthly Electricity Bill BPAY”. |
| `billerCode` | `number` | Required | Biller Code as shown on the Bill. Must be a valid BPAY Biller on token creation. |
| `customerReferenceNumber` | `bigint` | Required | Customer Reference Number as shown on the Bill. Must be a valid BPAY Customer Reference Number on token creation |
| `amount` | `number` | Required | Amount as shown on the Bill. Must be a valid amount on token creation. |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700010827",
  "tokenToUpdate": "20c3a494-7010-4f22-babe-34d643e5e64f",
  "description": "Monthly Electricity Bill BPAY",
  "billerCode": 857763,
  "customerReferenceNumber": 6279059700010918,
  "amount": 100.0
}
```

