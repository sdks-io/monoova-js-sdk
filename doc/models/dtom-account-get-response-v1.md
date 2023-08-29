
# DTOM Account Get Response V1

## Structure

`DTOMAccountGetResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `details` | [`DTOMAccountDetails \| undefined`](../../doc/models/dtom-account-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "details": {
    "accountNumber": 10,
    "name": "name0",
    "abn": "abn6",
    "contactName": "contactName4",
    "contactNumber": "contactNumber4"
  }
}
```

