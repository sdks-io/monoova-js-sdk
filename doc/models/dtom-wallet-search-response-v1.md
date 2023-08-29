
# DTOM Wallet Search Response V1

## Structure

`DTOMWalletSearchResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `mWallets` | [`DTOMWalletDetails[] \| undefined`](../../doc/models/dtom-wallet-details.md) | Optional | Array of WalletDetails |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "mWallets": [
    {
      "createdDateTime": "createdDateTime7",
      "accountNumber": "accountNumber1",
      "name": "name1",
      "nickName": "nickName3",
      "email": "email5"
    },
    {
      "createdDateTime": "createdDateTime6",
      "accountNumber": "accountNumber0",
      "name": "name2",
      "nickName": "nickName2",
      "email": "email4"
    },
    {
      "createdDateTime": "createdDateTime5",
      "accountNumber": "accountNumber9",
      "name": "name3",
      "nickName": "nickName1",
      "email": "email3"
    }
  ]
}
```

