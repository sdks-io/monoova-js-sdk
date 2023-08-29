
# DTOBPAY Biller V1

## Structure

`DTOBPAYBillerV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `string \| undefined` | Optional | This is the BPAY biller code that was requested. billerCodemust be numeric |
| `billerLongName` | `string \| undefined` | Optional | A long description of the billername |
| `billerShortName` | `string \| undefined` | Optional | A short decription of the billername |
| `acceptedPaymentMethods` | `string \| undefined` | Optional | Must be set to “1”. Field reserved for future expansion |
| `activationDate` | `string \| undefined` | Optional | Date this biller was activated for BPAY. ISO 8601 date format with time set to 00:00:00. Note that Timezone is suppressed.The example Timezone is Sydney local time |
| `deactivationDate` | `string \| undefined` | Optional | Date this biller was deactivated for BPAY. ISO 8601 date format with time set to  00:00:00 or an empty string if not deactivated.Note that Timezone is suppressed.The example Timezone is Sydney local time |
| `minPaymentAmount` | `number \| undefined` | Optional | This is the minimum amount that the BPAY biller associated with the billerCodeaccepts for bill payment |
| `maxPaymentAmount` | `number \| undefined` | Optional | This is the maximum amount that the BPAY biller associated with the billerCodeaccepts for bill payment |
| `crnValidationRuleName` | `string \| undefined` | Optional | For internal use only. Set to an empty string |
| `checkDigitRuleName` | `string \| undefined` | Optional | For internal use only. Set to an empty string |
| `lengthMask` | `string \| undefined` | Optional | A mask in which the position of each ‘Y’ character indicates each valid length that the reference number can take.At least one ‘Y’ character will be present |
| `fixedDigits` | `string \| undefined` | Optional | This describes which, if any, fixed digits that are standard in the BPAY Customer Reference Number |
| `isVariableCrn` | `boolean \| undefined` | Optional | Indicates whether BPAY Customer Reference Numbers (CRN) for this billerchanges for each individual customer’s bill or do they remain the same.Non variable CRNs can be stored and used later, however they must always be validated as part of paying a bill via the gateway.Variable CRNs should not be stored as they are incorrect for subsequent bills. |

## Example (as JSON)

```json
{
  "billerCode": "857763",
  "billerLongName": "Monoova FINANCE PTY LTD",
  "billerShortName": "Monoova",
  "acceptedPaymentMethods": "1",
  "activationDate": "05/29/2013 00:00:00",
  "minPaymentAmount": 10,
  "maxPaymentAmount": 100000,
  "lengthMask": "               Y    ",
  "fixedDigits": "627905              ",
  "isVariableCrn": false
}
```

