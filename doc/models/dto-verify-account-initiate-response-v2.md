
# DTO Verify Account Initiate Response V2

## Structure

`DTOVerifyAccountInitiateResponseV2`

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
| `ownerName` | `string \| undefined` | Optional | This is the PayId Name set up by account holder. `When creditMethod is 'NppCreditBankAccount' this field is always Null` |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "token": "40a834c0-8819-49d4-97df-a42738b9f685",
  "feeAmountExGst": 1.0,
  "feeAmountIncGst": 1.1,
  "feeAmountGstComp": 0.1,
  "ownerName": "Monnova PayId Name"
}
```

