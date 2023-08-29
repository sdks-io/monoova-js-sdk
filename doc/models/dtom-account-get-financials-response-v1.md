
# DTOM Account Get Financials Response V1

## Structure

`DTOMAccountGetFinancialsResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `financials` | [`DTOMAccountFinancials \| undefined`](../../doc/models/dtom-account-financials.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "financials": {
    "accountNumber": 28,
    "actualBalance": 104.08,
    "clearedFundsOnly": false,
    "creditLimit": 212.32,
    "feeAccountActualBalance": 88.92
  }
}
```

