
# Receivables Processdirectdebit

## Structure

`ReceivablesProcessdirectdebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionId` | `string` | Required | This is the transactionId that was returned when the transaction was executed.<br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |
| `response` | [`ResponseEnum`](../../doc/models/response-enum.md) | Required | Accept to accept direct debit transaction. Reject to reject direct debit transaction. |
| `rejectionReason` | `string \| undefined` | Optional | Text supplied when rejecting a direct debit.<br>**Constraints**: *Maximum Length*: `250` |
| `returnCode` | [`ReturnCodeEnum \| undefined`](../../doc/models/return-code-enum.md) | Optional | This is optional field. default is ReferToCustomer.<br>**Default**: `ReturnCodeEnum.ReferToCustomer` |

## Example (as JSON)

```json
{
  "transactionId": "D00100539578",
  "response": "Accept",
  "returnCode": "ReferToCustomer",
  "rejectionReason": "rejectionReason0"
}
```

