
# DTO Tools Bsb Validate Response V1

## Structure

`DTOToolsBsbValidateResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `bsb` | `string \| undefined` | Optional | The BSBNumber that was passed as a parameter |
| `closed` | `boolean \| undefined` | Optional | Indicates if the branch has been closed. If true, the address field MAY contain a reference to a replacement BSB number |
| `address` | `string \| undefined` | Optional | The branch address |
| `city` | `string \| undefined` | Optional | The branch city |
| `state` | `string \| undefined` | Optional | The branch state e.g. NSW, VIC, QLD etc |
| `postCode` | `string \| undefined` | Optional | The branch post code |
| `bankCode` | `string \| undefined` | Optional | The bank code e.g.ANZ, CBA, NAB, WBC etc |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "bsb": "012-433",
  "closed": false,
  "address": "Shop 1-047 Henry St",
  "city": "Penrith",
  "state": "NSW",
  "postCode": "2750",
  "bankCode": "ANZ"
}
```

