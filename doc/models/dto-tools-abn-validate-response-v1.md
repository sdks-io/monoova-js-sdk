
# DTO Tools Abn Validate Response V1

## Structure

`DTOToolsAbnValidateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `abn` | `string \| undefined` | Optional | The Australian Business Number that was passed as aparameter formatted as ’99 999 999 999’ |
| `lastUpdatedDate` | `string \| undefined` | Optional | The date the ABN record was last updated |
| `isAbnValid` | `boolean \| undefined` | Optional | If true, indicates the identity has a valid ABN |
| `isCharity` | `boolean \| undefined` | Optional | If true, indicates the identity is a registered charity |
| `entityTypeCode` | `string \| undefined` | Optional | The abbreviation of the type of business entity |
| `entityTypeDescription` | `string \| undefined` | Optional | A description the type of business entity |
| `organisationName` | `string \| undefined` | Optional | The current name of the business entity |
| `legalName` | `string \| undefined` | Optional | If business is a Sole Trader, contains the persons name |
| `organisationNameFromDate` | `string \| undefined` | Optional | The date the organisationName was last updated |
| `businessPhysicalAddressStateCode` | `string \| undefined` | Optional | The state code of the business physical address – eg. ‘NSW’ |
| `businessPhysicalAddressPostCode` | `string \| undefined` | Optional | The post code of the business physical address |
| `businessPhysicalAddressEffectiveFromDate` | `string \| undefined` | Optional | The date the business physical address was last updated |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "abn": "24 611 393 554",
  "lastUpdatedDate": "02/28/2017 00:00:00",
  "isAbnValid": true,
  "isCharity": false,
  "entityTypeCode": "PRV",
  "entityTypeDescription": "Australian Private Company",
  "organisationName": "Monoova GROUP LIMITED",
  "legalName": "null",
  "organisationNameFromDate": "02/28/2017 00:00:00",
  "businessPhysicalAddressStateCode": "NSW",
  "businessPhysicalAddressPostCode": "2060",
  "businessPhysicalAddressEffectiveFromDate": "07/01/2016 00:00:00"
}
```

