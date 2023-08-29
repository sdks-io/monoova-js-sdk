
# Rejection Reason Code Enum

AM02    (Transaction amount is greater than allowed maximum) <br> AM06    (Transaction amount is less than agreed minimum) <br> AM07    (Amount has been  blocked by regulatory authorities.) <br> BE05      (Sender is not recognised by beneficiary) <br> AG01     (No agreement is on file at the receiver for affecting associated transaction) <br> MS01    (Reason has not been specified due to sensitivities.) <br> RR02  (Senders name and/or address needed for regulatory requirements is insufficient or missing.) <br> RR03  (Recipients name and/or address needed for regulatory requirements is insufficient or missing.) <br> BE04    (Specification of beneficiary address, which is required for payment, is missing/not correct.). <br> <strong> Note&#58; </strong> RejectionReasonCode is only required if response is "Reject". RejectionReasonCode can be omitted if response is "confirm".

## Enumeration

`RejectionReasonCodeEnum`

## Fields

| Name |
|  --- |
| `aM02` |
| `aM06` |
| `aM07` |
| `bE05` |
| `aG01` |
| `mS01` |
| `rR02` |
| `rR03` |
| `bE04` |

## Example

```
AM06
```

