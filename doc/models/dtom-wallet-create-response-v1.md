
# DTOM Wallet Create Response V1

## Structure

`DTOMWalletCreateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `accountNumber` | `string \| undefined` | Optional | New 16 character mWallet account number |
| `mWallet` | [`DTOMWalletDetails \| undefined`](../../doc/models/dtom-wallet-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "accountNumber": "6279052236217305",
  "mWallet": {
    "createdDateTime": "createdDateTime2",
    "accountNumber": "accountNumber6",
    "name": "name6",
    "nickName": "nickName8",
    "email": "email0"
  }
}
```

