
# DTO Verify Account Details

## Structure

`DTOVerifyAccountDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | The text(GUID) that identifies the token. |
| `created` | `string \| undefined` | Optional | Datetime that the request was created |
| `updated` | `string \| undefined` | Optional | Datetime that the direct debit authority flag was last updated |
| `lastSystemBSBValidation` | `string \| undefined` | Optional | System bsb validation timestamp |
| `comment` | `string \| undefined` | Optional | Your comment submitted when initiating the verify request |
| `bsb` | `string \| undefined` | Optional | BSB number of associated bank account. BSB format is ‘000-000’ |
| `bankAccountNumber` | `number \| undefined` | Optional | This is the bank accounts number |
| `bankAccountTitle` | `string \| undefined` | Optional | Bank account title or name of associated bank account |
| `remitter` | `string \| undefined` | Optional | Your example remitter code<br>**Constraints**: *Maximum Length*: `16` |
| `isBlacklisted` | `boolean \| undefined` | Optional | Blacklisted accounts cannot be transacted on |
| `hasDDAuthority` | `boolean \| undefined` | Optional | Flag that can be used to track which account you have direct debit authority for |
| `ddAuthorityChangedTimestamp` | `string \| undefined` | Optional | Datetime that the direct debit authority flag was last modified |
| `ddAuthorityChangedBy` | `string \| undefined` | Optional | Datetime that the request was created |
| `verificationIdentifier` | `string \| undefined` | Optional | Name of the verification token |
| `verificationStatus` | `string \| undefined` | Optional | Status of the verification token |
| `verificationSignonMerchant` | `string \| undefined` | Optional | mAccount which owns the verification token |
| `verificationRetryCount` | `number \| undefined` | Optional | Number of times verification has been retried |
| `verificationRetyCountBeforeLockout` | `number \| undefined` | Optional | Threshold number of verification failures that triggers a lockout |
| `verificationLastRetryTimestamp` | `string \| undefined` | Optional | Last verification attempt datetime |
| `verificationLastRetryLockoutMinutes` | `number \| undefined` | Optional | Lockout time in after verification failure threshold has been reached |
| `verificationDEJobId` | `number \| undefined` | Optional | Job ID for the verification transaction |
| `verificationRootId` | `number \| undefined` | Optional | Unique verification root ID |

## Example (as JSON)

```json
{
  "token": "97649d82-fa5b-4481-90a8-ec4ef9a854ab",
  "created": "11/19/2018 13:26:48",
  "updated": "11/19/2018 13:26:48",
  "comment": "null",
  "bsb": "062-205",
  "bankAccountNumber": 201786488,
  "bankAccountTitle": "MPayments Retail",
  "remitter": "MPRetail",
  "isBlacklisted": false,
  "hasDDAuthority": true,
  "ddAuthorityChangedTimestamp": "11/19/2018 13:26:48",
  "ddAuthorityChangedBy": "6279059761211264",
  "verificationIdentifier": "MP Retail Account",
  "verificationStatus": "Pending",
  "verificationSignonMerchant": "6279059761211264",
  "verificationRetryCount": 0,
  "verificationRetyCountBeforeLockout": 3,
  "verificationLastRetryTimestamp": "11/19/2018 13:26:48",
  "verificationLastRetryLockoutMinutes": 60,
  "verificationDEJobId": 93607,
  "verificationRootId": 438714,
  "lastSystemBSBValidation": "lastSystemBSBValidation8"
}
```

