
# DTO Verify Account List Response V1

## Structure

`DTOVerifyAccountListResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `list` | [`DTOVerifyAccountDetails[] \| undefined`](../../doc/models/dto-verify-account-details.md) | Optional | VerifyAccountDetails |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "list": [
    {
      "token": "token0",
      "created": "created6",
      "updated": "updated8",
      "lastSystemBSBValidation": "lastSystemBSBValidation8",
      "comment": "comment0"
    }
  ]
}
```

