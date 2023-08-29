
# DTO Generic Payment Settings Response V1

## Structure

`DTOGenericPaymentSettingsResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `disbursementFees` | [`DTOGenericPaymentDisbursementFeeV1[] \| undefined`](../../doc/models/dto-generic-payment-disbursement-fee-v1.md) | Optional | An array of DisbursementFeeDetail |
| `loadFees` | [`DTOGenericPaymentLoadFeeV1[] \| undefined`](../../doc/models/dto-generic-payment-load-fee-v1.md) | Optional | An array of LoadFeeDetai |
| `canDebitCreditCards` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to debit/Refund credit cards |
| `canPayBpay` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to make PBAY payments |
| `canImpersonate` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to use the security/v1/createImpersonationTokenAsIssuer |
| `canDirectDebit` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to Direct Debit an ABA |
| `canDirectCredit` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to Direct Credit an ABA |
| `canCreateMAccounts` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to create mAccounts |
| `canCreateMWallets` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to create mWallets |
| `canAccessUserDatabase` | `boolean \| undefined` | Optional | True if the Sign-In Account has permission to access the User Database |
| `isIssuer` | `boolean \| undefined` | Optional | True if the Sign-In Account is an issuer |
| `issuerMAccountNumber` | `string \| undefined` | Optional | 16-digit Account number of Issuer. |
| `monthlyFeeExGst` | `number \| undefined` | Optional | The monthly fee(ExGst) for the Sign-In Account |
| `clearingMAccountNumber` | `string \| undefined` | Optional | 16-digit Account number of Sign-In Clearing Account |
| `feeMAccountNumber` | `string \| undefined` | Optional | 16-Digit Account number of Fee Account if there is one |
| `feeMAccountMonthlyFeeExGst` | `number \| undefined` | Optional | Monthly fee (ExGST) of the Sign-In Fee Account |
| `childMAccountSetUpFeeExGst` | `number \| undefined` | Optional | Set-up fee (ExGST) for each mAccount created via mAccount/v1/create |
| `childMAccountMonthlyFeeExGst` | `number \| undefined` | Optional | Monthly fee (ExGST) for each mAccount created vian mAccount/v1/create |
| `requiresClearedFundsOnly` | `boolean \| undefined` | Optional | if 'true', acccount has set up as ClearedFunds |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "canDebitCreditCards": true,
  "canPayBpay": true,
  "canImpersonate": true,
  "canDirectDebit": true,
  "canDirectCredit": true,
  "canCreateMAccounts": true,
  "canCreateMWallets": true,
  "canAccessUserDatabase": true,
  "isIssuer": true,
  "issuerMAccountNumber": "0000000000000000",
  "monthlyFeeExGst": 25,
  "clearingMAccountNumber": "6279059705699616",
  "feeMAccountNumber": "6279059710265874",
  "feeMAccountMonthlyFeeExGst": 2,
  "childMAccountSetUpFeeExGst": 0,
  "childMAccountMonthlyFeeExGst": 5,
  "requiresClearedFundsOnly": true,
  "disbursementFees": [
    {
      "method": "method9",
      "feePercentageExGst": 24.69,
      "feeFixedExGst": 249.85
    },
    {
      "method": "method8",
      "feePercentageExGst": 24.68,
      "feeFixedExGst": 249.84
    }
  ],
  "loadFees": [
    {
      "method": "method7",
      "cardType": "cardType3",
      "debitFromMAccount": "debitFromMAccount3",
      "feePercentageExGst": 77.27,
      "feeFixedExGst": 46.43
    }
  ]
}
```

