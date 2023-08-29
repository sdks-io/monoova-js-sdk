
# DTO Generic Payment Gateway Transaction Status

## Structure

`DTOGenericPaymentGatewayTransactionStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `completedDate` | `string \| undefined` | Optional | - |
| `uniqueReference` | `string \| undefined` | Optional | - |
| `statusDescription` | `string \| undefined` | Optional | - |
| `transactionStatus` | `string \| undefined` | Optional | - |
| `dishonouredDate` | `string \| undefined` | Optional | - |
| `creditCardPaymentStatus` | `unknown \| undefined` | Optional | - |
| `waitingOnClearedFundsDate` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "completedDate": "2020-01-17",
  "uniqueReference": "Reference12345678",
  "statusDescription": "DirectDebit to SignInmAccount",
  "transactionStatus": "Complete",
  "dishonouredDate": "dishonouredDate0"
}
```

