
# Event Pendingrtgs Imt Webhook

## Structure

`EventPendingrtgsImtWebhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | Total Number of records. |
| `totalAmount` | `number \| undefined` | Optional | Sum total of amount for all transactions. |
| `rtgsImtDetails` | [`PendingRtgsImtWebhookDetails[] \| undefined`](../../doc/models/pending-rtgs-imt-webhook-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "TotalCount": 1,
  "TotalAmount": 800.0,
  "RtgsImtDetails": [
    {
      "TransactionId": "TransactionId4",
      "AccountNumber": "AccountNumber8",
      "BSB": "BSB4",
      "AccountName": "AccountName4",
      "TransactionReferenceNumber": "TransactionReferenceNumber8"
    },
    {
      "TransactionId": "TransactionId3",
      "AccountNumber": "AccountNumber9",
      "BSB": "BSB3",
      "AccountName": "AccountName5",
      "TransactionReferenceNumber": "TransactionReferenceNumber9"
    },
    {
      "TransactionId": "TransactionId2",
      "AccountNumber": "AccountNumber0",
      "BSB": "BSB2",
      "AccountName": "AccountName6",
      "TransactionReferenceNumber": "TransactionReferenceNumber0"
    }
  ]
}
```

