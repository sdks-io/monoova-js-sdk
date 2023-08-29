
# Tools Send Email to Issuer

## Structure

`ToolsSendEmailToIssuer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subject` | `string` | Required | This is the emails subject. |
| `isBodyHtml` | `boolean \| undefined` | Optional | Set to true if the body contains HTML.<br>**Default**: `false` |
| `body` | `string \| undefined` | Optional | Email body. Can be HTML or plain text. |

## Example (as JSON)

```json
{
  "subject": "Please call me ASAP",
  "isBodyHtml": false,
  "body": "I have forgotten my password"
}
```

