
# Pay Id Details

## Structure

`PayIdDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `number \| undefined` | Optional | The bank account number for the account against which you are trying to Register a PayID |
| `payId` | `string \| undefined` | Optional | Email address for the PayID. Max length: 256 |
| `payIdName` | `string \| undefined` | Optional | Name displayed to the payers in order to identify you |
| `payIdStatus` | [`PayIdStatusEnum \| undefined`](../../doc/models/pay-id-status-enum.md) | Optional | Status of your PayID. Possible values: Enable, Disable, Deregister, Port |

## Example (as JSON)

```json
{
  "BankAccountNumber": 123409870,
  "PayId": "f3y237@monoova.me",
  "PayIdName": "John Smith",
  "PayIdStatus": "Enable"
}
```

