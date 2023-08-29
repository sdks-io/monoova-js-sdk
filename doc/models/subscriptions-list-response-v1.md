
# Subscriptions List Response V1

## Structure

`SubscriptionsListResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `eventname` | [`SubscriptionsListItems[] \| undefined`](../../doc/models/subscriptions-list-items.md) | Optional | List of Subscription Items |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "eventname": [
    {
      "eventName": "eventName4",
      "id": 58,
      "targetUrl": "targetUrl8",
      "status": "status6",
      "LastUpdated": "LastUpdated4"
    },
    {
      "eventName": "eventName5",
      "id": 59,
      "targetUrl": "targetUrl9",
      "status": "status7",
      "LastUpdated": "LastUpdated5"
    }
  ]
}
```

