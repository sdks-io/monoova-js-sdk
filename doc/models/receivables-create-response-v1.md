
# Receivables Create Response V1

## Structure

`ReceivablesCreateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `bsb` | `string \| undefined` | Optional | The BSB number corresponding to the bank account number. |
| `bankAccountNumber` | `number \| undefined` | Optional | The bank account number generated. |
| `bankAccountName` | `string \| undefined` | Optional | The name of the account to be paid into. Not used for validation of incoming payments. |
| `clientUniqueId` | `string \| undefined` | Optional | A identifier assigned to the account. Must be unique. If not provided Monoova will generate and return a value automatically. |
| `isActive` | `boolean \| undefined` | Optional | Used to open and close account numbers. Closed account numbers will return all payments made to that account number. |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Account is being setup for Npp. Please allow a few minutes for the account to become active",
  "bsb": "802-985",
  "bankAccountNumber": 153884104,
  "bankAccountName": "Bank1234444",
  "clientUniqueId": "862944D057FC408B9B04541C2BA12",
  "isActive": false
}
```

