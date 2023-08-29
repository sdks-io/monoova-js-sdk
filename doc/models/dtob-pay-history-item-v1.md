
# DTOB Pay History Item V1

## Structure

`DTOBPayHistoryItemV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `string \| undefined` | Optional | BPAY Biller code |
| `customerReferenceNumber` | `string \| undefined` | Optional | BBPAY Customer Reference Number. If this field is empty this denotes that the customerReferenceNumber is variable for each bill and should not be reused |
| `billerName` | `string \| undefined` | Optional | Long form of the BPAY Biller Name |
| `count` | `number \| undefined` | Optional | The number of usages of these detailsthat the mWallet has succeeded in paying previously |

## Example (as JSON)

```json
{
  "billerCode": "23796",
  "customerReferenceNumber": "2000046986210",
  "billerName": "TELSTRA CORPORATION LTD",
  "count": 27
}
```

