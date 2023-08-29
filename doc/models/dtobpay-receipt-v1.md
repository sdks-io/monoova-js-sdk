
# DTOBPAY Receipt V1

## Structure

`DTOBPAYReceiptV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `string \| undefined` | Optional | This is the BPAY biller code that was requested. billerCodemust be numeric |
| `billerName` | `string \| undefined` | Optional | This is the BPAY biller long name associated with the billerCode |
| `receiptNumber` | `string \| undefined` | Optional | BBPAY receipt Number. |
| `referenceNumber` | `string \| undefined` | Optional | BBPAY Customer Reference Number. If this field is empty this denotes that the customerReferenceNumber is variable for each bill and should not be reused |
| `status` | `string \| undefined` | Optional | Status of BPAY receipts |
| `transactionDateTime` | `string \| undefined` | Optional | The date time that the transaction was executed on the Platform Servers. Format is ISO8601 - 2015 -09 - 01T19: 19:58 |
| `voidDateTime` | `string \| undefined` | Optional | The date time that the transaction was void on the Platform Servers |

## Example (as JSON)

```json
{
  "billerCode": "123451",
  "billerName": "PTY LTD",
  "receiptNumber": "12334123",
  "referenceNumber": "1223451324343434",
  "status": "Paid",
  "transactionDateTime": "05/09/2022 13:11:38"
}
```

