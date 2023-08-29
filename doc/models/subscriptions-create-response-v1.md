
# Subscriptions Create Response V1

## Structure

`SubscriptionsCreateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `id` | `number \| undefined` | Optional | Unique id for the subscription |
| `dateTime` | `string \| undefined` | Optional | Date time the subscription was last updated |
| `eventName` | `string \| undefined` | Optional | The type of event to be sent to this URL via callback. Possible values: NPPReceivepayment |
| `targetUrl` | `string \| undefined` | Optional | This is the API endpoint where the call back notification will be sent. |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "id": 2,
  "dateTime": "11/14/2019 3:41:05 PM",
  "eventName": "NPPReceivePayment",
  "targetUrl": "http://www.abc.com.au"
}
```

