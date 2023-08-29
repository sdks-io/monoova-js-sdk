
# To Direct Credit Details

## Structure

`ToDirectCreditDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsbNumber` | `string` | Required | BSB (Bank-State-Branch) number. The format is a string in the following format:&nbsp;‘999-999’. |
| `accountNumber` | `string` | Required | This is the bank account number.<br>**Constraints**: *Maximum Length*: `9`, *Pattern*: `^[a-zA-Z0-9]*\z` |
| `accountName` | `string` | Required | This is the name of the account. Minimum length is 2, Max length is 32.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `32`, *Pattern*: `@"^[a-zA-Z0-9 \.\(\+\$\*\)\^\[\];\-\/,%_?:#@'=&!]*$"` |

## Example (as JSON)

```json
{
  "bsbNumber": "062-205",
  "accountNumber": "123456789",
  "accountName": "accountName4"
}
```

