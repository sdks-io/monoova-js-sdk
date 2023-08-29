
# M Account Send Statement

## Structure

`MAccountSendStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 16-Digit account number that uniquely identifies the mAccount. |
| `frequency` | `string` | Required | An enumeration of fixed selection types. <strong> All, Today, ThisMonth, LastMonth, ThisFinancialYear, LastFinancialYear, Custom </strong> |
| `startDate` | `string \| undefined` | Optional | Start date of statement when the frequency is set to custom. In ISO 8601 date-time format. Note that Timezone is suppressed. The default Timezone is Sydney local time. Required field when frequency is set to custom. |
| `endDate` | `string \| undefined` | Optional | End date of statement when the frequency is set to custom. In ISO 8601 date-time format. Note that Timezone is suppressed. The default Timezone is Sydney local time. Required field when frequency is set to custom. |

## Example (as JSON)

```json
{
  "accountNumber": "6279059700023123",
  "frequency": "Custom",
  "startDate": "07/11/2018 00:00:00",
  "endDate": "08/11/2018 00:00:00"
}
```

