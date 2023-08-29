
# DTO Verify Account Initiate Response V1

## Structure

`DTOVerifyAccountInitiateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `token` | `string \| undefined` | Optional | The text(GUID) that identifies the token. |
| `feeAmountExGst` | `number \| undefined` | Optional | This is the fee amount Excluding GST |
| `feeAmountIncGst` | `number \| undefined` | Optional | This is the total fee amount Including GST |
| `feeAmountGstComp` | `number \| undefined` | Optional | This is the GST Component of the fee amount |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "token": "97649d82-fa5b-4481-90a8-ec4ef9a854ab",
  "feeAmountExGst": 0.5,
  "feeAmountIncGst": 0.55,
  "feeAmountGstComp": 0.05
}
```

