
# Payment Source M Account

payment source from mAccount

## Structure

`PaymentSourceMAccount`

## Inherits From

[`FinancialTransaction`](../../doc/models/financial-transaction.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mAccount` | [`MAccount2 \| undefined`](../../doc/models/m-account-2.md) | Optional | - |
| `description` | `string \| undefined` | Optional | This description will be displayed on the mAccount statements. If any disbursement object is present, this description will be overwritten. This description will only display on statements for payments directly into the sign in mAccount. (ie no disbursement object)<br>**Constraints**: *Maximum Length*: `500` |
| `disbursements` | [`Disbursement[] \| undefined`](../../doc/models/disbursement.md) | Optional | - |

## Example (as JSON)

```json
{
  "uniqueReference": "f484ec18-6e1f-481b-a4bf-bea515d8lk34",
  "printUniqueReferenceOnStatement": false,
  "totalAmount": 10.0,
  "description": "payment source from mAccount",
  "paymentSource": "mAccount",
  "mAccount": {
    "token": "token6"
  },
  "disbursements": [
    {
      "disbursementMethod": "directCredit",
      "description": "description4",
      "toDirectCreditDetails": {
        "bsbNumber": "bsbNumber8",
        "accountNumber": "accountNumber0",
        "accountName": "accountName6"
      },
      "amount": 9.86,
      "lodgementReference": "lodgementReference8"
    },
    {
      "disbursementMethod": "directCredit",
      "description": "description5",
      "toDirectCreditDetails": {
        "bsbNumber": "bsbNumber9",
        "accountNumber": "accountNumber1",
        "accountName": "accountName7"
      },
      "amount": 9.87,
      "lodgementReference": "lodgementReference7"
    }
  ]
}
```

