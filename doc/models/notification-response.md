
# Notification Response

## Structure

`NotificationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string \| undefined` | Optional | Date time the subscription was last updated |
| `eventName` | [`EventName1Enum \| undefined`](../../doc/models/event-name-1-enum.md) | Optional | The type of event to be sent to this URL via callback.<br>**Constraints**: *Maximum Length*: `50` |
| `lastResponseCode` | `number \| undefined` | Optional | last response code received |
| `lastRetryDateTime` | `string \| undefined` | Optional | Date time the last retry was done |
| `retryCount` | `number \| undefined` | Optional | Number of retry |
| `status` | [`Status1Enum \| undefined`](../../doc/models/status-1-enum.md) | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `webhookId` | `number \| undefined` | Optional | Unique Id to identify this webhook notification. |

## Example (as JSON)

```json
{
  "dateTime": "11/14/2019 3:41:05 PM",
  "eventName": "NPPReceivePayment",
  "lastRetryDateTime": "11/14/2019 3:41:05 PM",
  "status": "Error",
  "url": "api.mpay.com/URL1",
  "webhookId": 678901,
  "lastResponseCode": 32,
  "retryCount": 152
}
```

