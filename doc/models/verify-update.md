
# Verify Update

## Structure

`VerifyUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Required | token from verify/v1/aba/initiate. (Inititiates a verification transaction) |
| `remitter` | `string \| undefined` | Optional | See <a href="/payments#tag/Verify"> Verify </a> section.<br>**Constraints**: *Maximum Length*: `16` |
| `verificationIdentifier` | `string` | Required | A description supplied by the VerificationSigninMerchant to distinguish this entry from others in a listing. This could be an encoded string from the signon merchant.<br>**Constraints**: *Maximum Length*: `512` |
| `hasDDAuthority` | `boolean` | Required | Can the system use this account to direct debit. Has an authority been granted.<br>**Default**: `true` |
| `bankAccountTitle` | `string \| undefined` | Optional | The Title of the Bank Account for DE file.<br>**Constraints**: *Maximum Length*: `32` |

## Example (as JSON)

```json
{
  "token": "f45d1c83-1533-4cbb-ae05-4381e181cb18",
  "remitter": "MPRetail",
  "verificationIdentifier": "MP Retail Account",
  "hasDDAuthority": true,
  "bankAccountTitle": "Monoova Bank Account"
}
```

