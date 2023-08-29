
# DTO Tools Ping Response V1

## Structure

`DTOToolsPingResponseV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `version` | `string \| undefined` | Optional | A string containing the Version of the Platform with the current Date Time at the server |
| `environment` | `string \| undefined` | Optional | A string containing the Version of the Platform with the current Date Time at the server |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "Operation completed successfully",
  "version": "Monoova Payments Platform Tools V:1.00 Engine V:4.74 Environment: Sandbox DateTime: 09 - Nov - 2018 10:48:09 AM",
  "environment": "Sandbox"
}
```

