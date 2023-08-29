
# Subscriptions Report V1

## Structure

`SubscriptionsReportV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `notifications` | [`NotificationResponse[] \| undefined`](../../doc/models/notification-response.md) | Optional | Object containing notification details |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "notifications": [
    {
      "dateTime": "dateTime1",
      "eventName": "InboundDirectCredit",
      "lastResponseCode": 185,
      "lastRetryDateTime": "lastRetryDateTime1",
      "retryCount": 65
    }
  ]
}
```

