
# DTO Token List Response V1

## Structure

`DTOTokenListResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `tokens` | [`DTOTokenDetails[] \| undefined`](../../doc/models/dto-token-details.md) | Optional | An array of TokenDetails |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "tokens": [
    {
      "token": "token7",
      "hint": "hint9",
      "payloadType": "payloadType7",
      "description": "description1"
    },
    {
      "token": "token6",
      "hint": "hint0",
      "payloadType": "payloadType8",
      "description": "description0"
    },
    {
      "token": "token5",
      "hint": "hint1",
      "payloadType": "payloadType9",
      "description": "description9"
    }
  ]
}
```

