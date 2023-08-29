
# Payment Source M Wallet

payment source from mWallet

## Structure

`PaymentSourceMWallet`

## Inherits From

[`FinancialTransaction`](../../doc/models/financial-transaction.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mWallet` | [`MWallet1 \| undefined`](../../doc/models/m-wallet-1.md) | Optional | - |
| `description` | `string \| undefined` | Optional | This description will be displayed on the mAccount statements. If any disbursement object is present, this description will be overwritten. This description will only display on statements for payments directly into the sign in mAccount. (ie no disbursement object)<br>**Constraints**: *Maximum Length*: `500` |
| `disbursements` | [`Disbursement1[] \| undefined`](../../doc/models/disbursement-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "uniqueReference": "f484ec18-6e1f-481b-a4bf-bea515d8lk34",
  "printUniqueReferenceOnStatement": false,
  "totalAmount": 10.0,
  "description": "payment source from mWallet",
  "paymentSource": "mWallet",
  "mWallet": {
    "token": "token0",
    "pin": "pin4"
  },
  "disbursements": [
    {
      "disbursementMethod": "mAccount",
      "description": "description4",
      "toMAccount": "toMAccount0",
      "amount": 9.86,
      "toMWallet": "toMWallet2"
    },
    {
      "disbursementMethod": "mAccount",
      "description": "description5",
      "toMAccount": "toMAccount1",
      "amount": 9.87,
      "toMWallet": "toMWallet3"
    }
  ]
}
```

