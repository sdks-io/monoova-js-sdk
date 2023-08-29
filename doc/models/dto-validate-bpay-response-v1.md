
# DTO Validate BPAY Response V1

## Structure

`DTOValidateBPAYResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `validation` | [`DTOBPAYValidationV1 \| undefined`](../../doc/models/dtobpay-validation-v1.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "validation": {
    "billerCode": "billerCode6",
    "customerReferenceNumber": "customerReferenceNumber0",
    "amount": "amount0",
    "billerName": "billerName0",
    "isVariableCrn": false
  }
}
```

