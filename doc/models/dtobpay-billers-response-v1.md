
# DTOBPAY Billers Response V1

## Structure

`DTOBPAYBillersResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `search` | `string \| undefined` | Optional | Text string to search for |
| `totalCount` | `number \| undefined` | Optional | The total number of BPAYBiller’s that match the search criteria |
| `skip` | `number \| undefined` | Optional | The search string |
| `take` | `number \| undefined` | Optional | The number of records that were requested |
| `billers` | [`DTOBPAYBillerV1[] \| undefined`](../../doc/models/dtobpay-biller-v1.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "search": "pty ltd",
  "totalCount": 4984,
  "skip": 0,
  "take": 50
}
```

