
# Subscriptions Create

## Structure

`SubscriptionsCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | [`EventNameEnum`](../../doc/models/event-name-enum.md) | Required | The type of event to be sent to this URL via callback.<br>**Constraints**: *Maximum Length*: `50` |
| `targetUrl` | `string` | Required | This is the API endpoint where the call back notification will be sent. |
| `subscriptionStatus` | `string` | Required | On/Off. Defaults to Off.<br>**Default**: `'Off'`<br>**Constraints**: *Maximum Length*: `50` |
| `securityToken` | `string \| undefined` | Optional | This token will be sent back with the callback in Authorization header. <br> (Authorization:&nbsp; <strong>[type] [credentials] </strong>&nbsp;(e.x Basic Rjc1234567890jdGMS67890U78...)) <br> When creating the token, both 'type' and 'credentials' are required. |

## Example (as JSON)

```json
{
  "eventName": "NPPReceivePayment",
  "targetUrl": "http://www.abc.com.au",
  "subscriptionStatus": "On",
  "securityToken": "Basic Rjc1234567890jdGMS00MUU01234567890I3OTUyRk1234567890UEB51234567890TM0NjM="
}
```

