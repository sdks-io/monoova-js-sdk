
# Subscriptions Update

## Structure

`SubscriptionsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | Unique id for the subscription that needs to be updated. |
| `targetUrl` | `string` | Required | This is the API endpoint where the call back notification will be sent. |
| `subscriptionStatus` | `string` | Required | On/Off. Defaults to Off.<br>**Default**: `'Off'`<br>**Constraints**: *Maximum Length*: `50` |
| `securityToken` | `string \| undefined` | Optional | This token will be sent back with the callback in Authorization header. <br> (Authorization:&nbsp; <strong>[type] [credentials] </strong>&nbsp;(e.x Basic Rjc1234567890jdGMS67890U78...)) <br> When updating the token, both 'type' and 'credentials' are required. |

## Example (as JSON)

```json
{
  "id": 1,
  "targetUrl": "http://www.abc1.com.au",
  "subscriptionStatus": "On",
  "securityToken": "Basic Rjc1234567890jdGMS00MUU01234567890I3OTUyRk1234567890UEB51234567890TM0NjM="
}
```

