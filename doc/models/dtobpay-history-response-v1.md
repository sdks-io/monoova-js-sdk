
# DTOBPAY History Response V1

## Structure

`DTOBPAYHistoryResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `history` | [`DTOBPayHistoryItemV1[] \| undefined`](../../doc/models/dtob-pay-history-item-v1.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "history": [
    {
      "billerCode": "billerCode0",
      "customerReferenceNumber": "customerReferenceNumber6",
      "billerName": "billerName4",
      "count": 120
    },
    {
      "billerCode": "billerCode1",
      "customerReferenceNumber": "customerReferenceNumber5",
      "billerName": "billerName5",
      "count": 119
    }
  ]
}
```

