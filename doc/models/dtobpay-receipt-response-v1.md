
# DTOBPAY Receipt Response V1

## Structure

`DTOBPAYReceiptResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `receipts` | [`DTOBPAYReceiptV1[] \| undefined`](../../doc/models/dtobpay-receipt-v1.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "receipts": [
    {
      "billerCode": "billerCode9",
      "billerName": "billerName3",
      "receiptNumber": "receiptNumber5",
      "referenceNumber": "referenceNumber5",
      "status": "status3"
    },
    {
      "billerCode": "billerCode0",
      "billerName": "billerName4",
      "receiptNumber": "receiptNumber6",
      "referenceNumber": "referenceNumber6",
      "status": "status4"
    },
    {
      "billerCode": "billerCode1",
      "billerName": "billerName5",
      "receiptNumber": "receiptNumber7",
      "referenceNumber": "referenceNumber7",
      "status": "status5"
    }
  ]
}
```

