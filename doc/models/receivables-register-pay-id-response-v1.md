
# Receivables Register Pay Id Response V1

## Structure

`ReceivablesRegisterPayIdResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `payIdDetails` | [`PayIdDetails \| undefined`](../../doc/models/pay-id-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "PayIdDetails": {
    "BankAccountNumber": 56,
    "PayId": "PayId6",
    "PayIdName": "PayIdName6",
    "PayIdStatus": "Enable"
  }
}
```

