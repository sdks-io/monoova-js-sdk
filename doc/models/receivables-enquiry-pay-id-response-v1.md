
# Receivables Enquiry Pay Id Response V1

## Structure

`ReceivablesEnquiryPayIdResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `bankAccountNumber` | `bigint \| undefined` | Optional | The bank account number for the account against which you are trying to Register a PayID |
| `lastResolutionDateTime` | `string \| undefined` | Optional | Datetime this PayId was last resolved |
| `lastUpdatedDateTime` | `string \| undefined` | Optional | - |
| `payIdName` | `string \| undefined` | Optional | Name displayed to the payers in order to identify you |
| `registrationDateTime` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "BankAccountNumber": 111111012345678,
  "LastResolutionDateTime": "03/17/2019 07:45:00",
  "LastUpdatedDateTime": "03/14/2019 00:44:53",
  "PayIdName": "John Smith",
  "RegistrationDateTime": "03/14/2019 00:44:53"
}
```

