
# Subscriptions Resend

## Structure

`SubscriptionsResend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `number` | Required | This is the Platform ID that is unique to your payment request. |
| `eventName` | `string` | Required, Constant | The type of event to be sent to this URL via callback.<br>**Default**: `'NPPReceivePayment'` |

## Example (as JSON)

```json
{
  "transactionId": 123456,
  "eventName": "NPPReceivePayment"
}
```

