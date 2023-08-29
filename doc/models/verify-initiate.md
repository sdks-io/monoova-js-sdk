
# Verify Initiate

## Structure

`VerifyInitiate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bsb` | `string` | Required | BSB number of associated bank account. BSB format is ‘000-000’.<br>**Constraints**: *Maximum Length*: `7` |
| `bankAccountNumber` | `number` | Required | Bank account number of associated bank account. |
| `bankAccountTitle` | `string` | Required | Bank account title or name of associated bank account.<br>**Constraints**: *Maximum Length*: `32` |
| `remitter` | `string \| undefined` | Optional | See <a href="/payments#tag/Verify"> Verify </a> section.<br>**Constraints**: *Maximum Length*: `16` |
| `verificationIdentifier` | `string` | Required | A description supplied by the VerificationSigninMerchant to distinguish this entry from others in a listing. This could be an encoded string from the signon merchant.<br>**Constraints**: *Maximum Length*: `512` |
| `hasDDAuthority` | `boolean` | Required | Can the system use this account to direct debit. Has an authority been granted.<br>**Default**: `true` |

## Example (as JSON)

```json
{
  "bsb": "012-366",
  "bankAccountNumber": 123456789,
  "bankAccountTitle": "Monoova Bank Account",
  "remitter": "MPRetail",
  "verificationIdentifier": "MP Retail Account",
  "hasDDAuthority": true
}
```

