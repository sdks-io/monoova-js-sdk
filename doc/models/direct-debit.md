
# Direct Debit

## Structure

`DirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsbNumber` | `string \| undefined` | Optional | BSB (Bank-State-Branch) number. The format is a string in the following format:&nbsp;‘999-999’. |
| `accountNumber` | `number \| undefined` | Optional | This is the bank account number. Range of '100' to '999999999' |
| `accountName` | `string \| undefined` | Optional | This is the name of the account. Minimum length is 2, Max length is 32.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `32`, *Pattern*: `@"^[a-zA-Z0-9 \.\(\+\$\*\)\^\[\];\-\/,%_?:#@'=&!]*$"` |

## Example (as JSON)

```json
{
  "bsbNumber": "062-205",
  "accountNumber": 68,
  "accountName": "accountName4"
}
```

