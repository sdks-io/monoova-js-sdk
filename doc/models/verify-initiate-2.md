
# Verify Initiate 2

## Structure

`VerifyInitiate2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditMethod` | [`CreditMethodEnum`](../../doc/models/credit-method-enum.md) | Required | Credit method. Possible values:&nbsp; 'NppCreditBankAccount' or 'NppCreditPayId' |
| `bsb` | `string \| undefined` | Optional | BSB number of associated bank account. BSB format is ‘000-000’. `When creditMethod is 'NppCreditBankAccount' this field is required`<br>**Constraints**: *Maximum Length*: `7` |
| `bankAccountNumber` | `number \| undefined` | Optional | Bank account number of associated bank account. `When creditMethod is 'NppCreditBankAccount' this field is required` |
| `accountName` | `string` | Required | Bank account title or name of associated bank account.<br>**Constraints**: *Maximum Length*: `32` |
| `remitter` | `string \| undefined` | Optional | More details at <a href="/payments#tag/Verify"> Verify </a> section.<br>**Constraints**: *Maximum Length*: `140` |
| `payIdType` | [`PayIdTypeEnum \| undefined`](../../doc/models/pay-id-type-enum.md) | Optional | PayId Type. Possible values:&nbsp; ABN, Email, PhoneNumber, OrganisationId, ACN `When creditMethod is 'NppCreditPayId' this field is required` |
| `payId` | `string \| undefined` | Optional | PayId Identifier of the Payee. `When creditMethod is 'NppCreditPayId' this field is required`<br>**Constraints**: *Maximum Length*: `256` |
| `verificationIdentifier` | `string` | Required | A description supplied by the VerificationSigninMerchant to distinguish this entry from others in a listing. This could be an encoded string from the signon merchant.<br>**Constraints**: *Maximum Length*: `512` |

## Example (as JSON)

```json
{
  "creditMethod": "NppCreditBankAccount",
  "bsb": "802-985",
  "bankAccountNumber": 123456789,
  "accountName": "Monoova NPP Bank Account",
  "remitter": "Monoova Remitter",
  "payIdType": "Email",
  "payId": "MW9GM4@monoova.me",
  "verificationIdentifier": "NPP Bank Account Verification Identifier"
}
```

