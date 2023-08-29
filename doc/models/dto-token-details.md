
# DTO Token Details

## Structure

`DTOTokenDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | The text (GUID) that identifies the token |
| `hint` | `string \| undefined` | Optional | Text that gives sufficient information to allow the tokento be selected but does not compromise security |
| `payloadType` | `string \| undefined` | Optional | BPAY or AustralianBankAccount |
| `description` | `string \| undefined` | Optional | Text supplied when the tokenwas created |

## Example (as JSON)

```json
{
  "token": "0a4fe0d3-43c7-47ec-b089-4977cead9451",
  "hint": "Bank: CBA Account: 12345678",
  "payloadType": "BPAY",
  "description": "Everyday use bank"
}
```

