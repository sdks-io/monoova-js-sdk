
# M Wallet Transactions

## Structure

`MWalletTransactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 16-Digit account number that uniquely identifies the mWallet.<br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `16` |
| `pin` | `number` | Required | 4 digit numerical pin. |
| `startDate` | `string \| undefined` | Optional | Start date of statement when the frequency is set to custom. In ISO 8601 date-time format. Note that Timezone is suppressed. The default Timezone is Sydney local time. Required field when frequency is set to custom. |
| `endDate` | `string \| undefined` | Optional | End date of statement when the frequency is set to custom. In ISO 8601 date-time format. Note that Timezone is suppressed. The default Timezone is Sydney local time. Required field when frequency is set to custom. |
| `skip` | `number \| undefined` | Optional | Number of records to skip. 0 is the first record. |
| `take` | `number \| undefined` | Optional | Number of records to take. If take is 0 the all records will be returned. |
| `descending` | `boolean \| undefined` | Optional | Sort the returned transaction list ascending or descending. |
| `useTime` | `boolean \| undefined` | Optional | Use the time component of startDate and endDate in the selection. |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700022400",
  "pin": 5555.0,
  "startDate": "07/11/2018 00:00:00",
  "endDate": "02/28/2018 00:00:00",
  "skip": 0.0,
  "take": 50.0,
  "descending": false,
  "useTime": false
}
```

