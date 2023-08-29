
# DTOBPAY Biller Response V1

## Structure

`DTOBPAYBillerResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `biller` | [`DTOBPAYBillerV1 \| undefined`](../../doc/models/dtobpay-biller-v1.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "biller": {
    "billerCode": "billerCode0",
    "billerLongName": "billerLongName0",
    "billerShortName": "billerShortName0",
    "acceptedPaymentMethods": "acceptedPaymentMethods4",
    "activationDate": "activationDate2"
  }
}
```

