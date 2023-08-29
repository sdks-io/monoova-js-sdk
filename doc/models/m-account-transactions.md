
# M Account Transactions

## Structure

`MAccountTransactions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | 16-Digit account number that uniquely identifies the mAccount. |
| `frequency` | [`FrequencyEnum`](../../doc/models/frequency-enum.md) | Required | An enumeration of fixed selection types. possible values:&nbsp; Today, ThisMonth, LastMonth, Custom. A maximum of 3 months can be retrieved through Frequency = “Custom” |
| `startDate` | `string \| undefined` | Optional | Start date of statement when the frequency is set to custom. In ISO 8601 date-time format '2018-07-11T00:00:00'. Note that Timezone is suppressed. The default Timezone is Sydney local time. Required field when frequency is set to custom. |
| `endDate` | `string \| undefined` | Optional | End date of statement when the frequency is set to custom. In ISO 8601 date-time format 2018-08-11T00:00:00' . Note that Timezone is suppressed. The default Timezone is Sydney local time. Required field when frequency is set to custom. |
| `descending` | `boolean \| undefined` | Optional | Default to false. true to sort the returned transaction list as descending order.<br>**Default**: `false` |
| `useTime` | `boolean \| undefined` | Optional | Default to false. true to use startDate and endDate when the frequency is set to custom.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700023123",
  "frequency": "Custom",
  "startDate": "04/05/2020 00:00:00",
  "endDate": "04/22/2020 00:00:00",
  "descending": true,
  "useTime": true
}
```

