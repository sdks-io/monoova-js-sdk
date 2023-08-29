
# DTO Token Update Response V1

## Structure

`DTOTokenUpdateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `token` | `string \| undefined` | Optional | Token updated in the form of a GUID |
| `hint` | `string \| undefined` | Optional | Updated Text that gives sufficient information to allow the tokento be selected but does not compromise security |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "token": "9395ddef-69cb-4f38-8836-3c6502c72182",
  "hint": "Bank: ANZ Account: 123456789"
}
```

