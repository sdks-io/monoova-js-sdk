
# Verify Validate

## Structure

`VerifyValidate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Required | token from verify/v1/aba/initiate.(Inititiates a verification transaction) |
| `amount` | `number` | Required | amount for the verification.<br>**Constraints**: `>= 0.01` |
| `code` | `string` | Required | Once you receive the verification code, enter it here to confirm your identity. |

## Example (as JSON)

```json
{
  "token": "f45d1c83-1533-4cbb-ae05-4381e181cb18",
  "amount": 0.01,
  "code": "555555"
}
```

