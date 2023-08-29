
# Event Inbound Direct Debit Webhook

## Structure

`EventInboundDirectDebitWebhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | Total Number of Direct Debits. |
| `totalAmount` | `number \| undefined` | Optional | Total Amount of Direct Debits. |
| `directDebitDetails` | [`InboundDirectDebitWebhookDirectDebitDetails[] \| undefined`](../../doc/models/inbound-direct-debit-webhook-direct-debit-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "TotalCount": 1,
  "TotalAmount": 1.0,
  "DirectDebitDetails": [
    {
      "TransactionId": "TransactionId3",
      "BatchId": "BatchId1",
      "DateTime": "DateTime5",
      "Status": "Status3",
      "RespondBeforeDateTime": "RespondBeforeDateTime7"
    }
  ]
}
```

