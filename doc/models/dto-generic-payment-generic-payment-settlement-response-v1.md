
# DTO Generic Payment Generic Payment Settlement Response V1

## Structure

`DTOGenericPaymentGenericPaymentSettlementResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `settlements` | [`DTOGenericPaymentGenericPaymentSettlementItemV1[] \| undefined`](../../doc/models/dto-generic-payment-generic-payment-settlement-item-v1.md) | Optional | An array of SettlementItem’s |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "settlements": [
    {
      "uniqueReferenced": "uniqueReferenced5",
      "transactionId": 3,
      "disbursementAmount": 75.63,
      "disbursementMethod": "disbursementMethod3",
      "feeAmountExclGst": 222.37
    },
    {
      "uniqueReferenced": "uniqueReferenced6",
      "transactionId": 4,
      "disbursementAmount": 75.64,
      "disbursementMethod": "disbursementMethod4",
      "feeAmountExclGst": 222.38
    }
  ]
}
```

