
# Subscriptions List Items

## Structure

`SubscriptionsListItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string \| undefined` | Optional | The type of event to be sent to this URL via callback. Possible values: NPPReceivepayment |
| `id` | `number \| undefined` | Optional | Unique id for the subscription that needs to be updated |
| `targetUrl` | `string \| undefined` | Optional | This is the API endpoint where the call back notification will be sent. |
| `status` | `string \| undefined` | Optional | This is the Subscription Status. Can be On/off<br>**Default**: `'Off'` |
| `lastUpdated` | `string \| undefined` | Optional | Last Updated Time |
| `createdDate` | `string \| undefined` | Optional | Created Time |

## Example (as JSON)

```json
{
  "eventName": "NPPReceivePayment",
  "id": 1,
  "targetUrl": "http://www.abc1.com.au",
  "status": "On",
  "LastUpdated": "11/14/2019 3:41:05 PM",
  "createdDate": "11/14/2019 3:41:05 PM"
}
```

