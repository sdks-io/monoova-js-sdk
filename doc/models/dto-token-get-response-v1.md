
# DTO Token Get Response V1

## Structure

`DTOTokenGetResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `token` | `string \| undefined` | Optional | The text (GUID) that identifies the token |
| `hint` | `string \| undefined` | Optional | Text that gives sufficient information to allow the tokento be selected but does not compromise security |
| `payloadType` | `string \| undefined` | Optional | BPAY or AustralianBankAccount |
| `description` | `string \| undefined` | Optional | Text supplied when the tokenwas created |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "token": "0a4fe0d3-43c7-47ec-b089-4977cead9451",
  "hint": "Bank: CBA Account: 1234567",
  "payloadType": "BPAY",
  "description": "mPayments Bank Account"
}
```

