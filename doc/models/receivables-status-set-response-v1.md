
# Receivables Status Set Response V1

## Structure

`ReceivablesStatusSetResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `bsb` | `string \| undefined` | Optional | The BSB number corresponding to the bank account number. |
| `bankAccountNumber` | `number \| undefined` | Optional | The bank account number for which isActive has been updated. |
| `bankAccountName` | `string \| undefined` | Optional | The name of the account to be paid into. Not used for validation of incoming payments. |
| `clientUniqueId` | `string \| undefined` | Optional | The unique identifier for which isActive has been updated. |
| `isActive` | `boolean \| undefined` | Optional | The value for isActive after update. true or false. |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "bsb": "123-123",
  "bankAccountNumber": 153884104,
  "bankAccountName": "Bank1234444",
  "clientUniqueId": "862944D057FC408B9B04541C2BA12",
  "isActive": false
}
```

