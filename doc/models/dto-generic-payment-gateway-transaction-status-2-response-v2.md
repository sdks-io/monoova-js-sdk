
# DTO Generic Payment Gateway Transaction Status 2 Response V2

## Structure

`DTOGenericPaymentGatewayTransactionStatus2ResponseV2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `statuses` | [`DTOGenericPaymentGatewayTransactionStatus[] \| undefined`](../../doc/models/dto-generic-payment-gateway-transaction-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "statuses": [
    {
      "completedDate": "completedDate0",
      "uniqueReference": "uniqueReference4",
      "statusDescription": "statusDescription2",
      "transactionStatus": "transactionStatus2",
      "dishonouredDate": "dishonouredDate4"
    },
    {
      "completedDate": "completedDate1",
      "uniqueReference": "uniqueReference3",
      "statusDescription": "statusDescription3",
      "transactionStatus": "transactionStatus3",
      "dishonouredDate": "dishonouredDate5"
    }
  ]
}
```

