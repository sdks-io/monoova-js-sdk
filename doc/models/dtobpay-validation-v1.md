
# DTOBPAY Validation V1

## Structure

`DTOBPAYValidationV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billerCode` | `string \| undefined` | Optional | This is the BPAY biller code that was used to validate. billerCode must be numeric |
| `customerReferenceNumber` | `string \| undefined` | Optional | This is the BPAY customer reference number that was used to validate. customerReferenceNumber must be numeric |
| `amount` | `string \| undefined` | Optional | This is the amount that was used to validate. The maximum value of the field is $9999999999.99 however BPAY Billers will generally restrict the maximum value accepted for bill payment |
| `billerName` | `string \| undefined` | Optional | This is the BPAY biller long name associated with the billerCode |
| `isVariableCrn` | `boolean \| undefined` | Optional | Indicates whether BPAY Customer Reference Numbers(CRN) for this biller change for each individual customer’s bill or do they remain the same.Non variable CRNs can be stored and used later, however they must always be validated as part of paying a bill via the gateway.Variable CRNs should not be stored as they are incorrect for subsequent bills. |
| `minimumPaymentAmount` | `number \| undefined` | Optional | This is the minimum amount that the BPAY biller associated with the billerCode accepts for bill payment |
| `maximumPaymentAmount` | `number \| undefined` | Optional | This is the maximum amount that the BPAY biller associated with the billerCode accepts for bill payment |

## Example (as JSON)

```json
{
  "billerCode": "857763",
  "customerReferenceNumber": "6279059700000505",
  "amount": "100",
  "billerName": "Monoova FINANCE PTY LTD",
  "isVariableCrn": false,
  "minimumPaymentAmount": 10,
  "maximumPaymentAmount": 100000
}
```

