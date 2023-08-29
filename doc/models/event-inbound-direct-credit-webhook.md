
# Event Inbound Direct Credit Webhook

## Structure

`EventInboundDirectCreditWebhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | Total Number of Direct Credits. |
| `totalAmount` | `number \| undefined` | Optional | Total Amount of Direct Credits. |
| `directCreditDetails` | [`InboundDirectCreditWebhookDirectCreditDetails[] \| undefined`](../../doc/models/inbound-direct-credit-webhook-direct-credit-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "TotalCount": 2,
  "TotalAmount": 3.0,
  "DirectCreditDetails": [
    {
      "TransactionId": "TransactionId5",
      "BatchId": "BatchId9",
      "DateTime": "DateTime3",
      "Bsb": "Bsb3",
      "AccountNumber": 115
    },
    {
      "TransactionId": "TransactionId6",
      "BatchId": "BatchId0",
      "DateTime": "DateTime4",
      "Bsb": "Bsb4",
      "AccountNumber": 116
    }
  ]
}
```

