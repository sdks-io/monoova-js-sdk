
# DTO Verify Account Get Response V1

## Structure

`DTOVerifyAccountGetResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `details` | [`DTOVerifyAccountDetails \| undefined`](../../doc/models/dto-verify-account-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "details": {
    "token": "token4",
    "created": "created0",
    "updated": "updated4",
    "lastSystemBSBValidation": "lastSystemBSBValidation2",
    "comment": "comment4"
  }
}
```

