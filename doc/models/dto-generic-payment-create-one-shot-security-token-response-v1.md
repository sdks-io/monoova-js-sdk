
# DTO Generic Payment Create One Shot Security Token Response V1

## Structure

`DTOGenericPaymentCreateOneShotSecurityTokenResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `oneShotSecurityToken` | `string \| undefined` | Optional | The token to use instead of UserName |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "oneShotSecurityToken": "2215125a-b80b-41aa-af58-740d21b303ed"
}
```

