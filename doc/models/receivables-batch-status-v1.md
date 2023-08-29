
# Receivables Batch Status V1

## Structure

`ReceivablesBatchStatusV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `durationMs` | `bigint \| undefined` | Optional | This value represents the total time in milliseconds that the Platform took to process the request. |
| `status` | `string \| undefined` | Optional | This is the status of executing the request.&nbsp;A code of ‘Ok’ indicates no errors |
| `statusDescription` | `string \| undefined` | Optional | This is a plain English description of the status. |
| `numberOfRecords` | `number \| undefined` | Optional | Number of records parsed in the batch file. |
| `batchUrl` | `string \| undefined` | Optional | URL to access the response report. |

## Example (as JSON)

```json
{
  "durationMs": 20,
  "status": "Ok",
  "statusDescription": "To view the batch Status result please use the URL https://samplefileurl.com.au/moapi/receivables/v1/download/BatchStatusResponse_20190621105139",
  "NumberOfRecords": 9.0,
  "batchUrl": "https://samplefileurl.com.au/moapi/receivables/v1/download/BatchStatusResponse_20190621105139"
}
```

