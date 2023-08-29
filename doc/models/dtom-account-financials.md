
# DTOM Account Financials

## Structure

`DTOMAccountFinancials`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `number \| undefined` | Optional | 16 digit mAccount Number |
| `actualBalance` | `number \| undefined` | Optional | Balance of the mAccount |
| `clearedFundsOnly` | `boolean \| undefined` | Optional | Whether mAccount is cleared funds |
| `creditLimit` | `number \| undefined` | Optional | mAccount credit limit |
| `feeAccountActualBalance` | `number \| undefined` | Optional | Balance of the feeAccount |
| `feeAccountNumber` | `number \| undefined` | Optional | 16 digit feeAccount number (returns value if hasSeparateFeeAccount is 'true') |
| `hasSeparateFeeAccount` | `boolean \| undefined` | Optional | Whether mAccount has SeparateFeeAccount |
| `lowerCreditLimit` | `number \| undefined` | Optional | mAccount lower credit limit |
| `minimumSettlementAmount` | `number \| undefined` | Optional | mAccount minimum SettlementAmount. minimum value is '0.02' |
| `settlementFrequency` | `string \| undefined` | Optional | mAccount settlement frequency |
| `upperCreditLimit` | `number \| undefined` | Optional | mAccount upper credit limit |
| `isFeeAccount` | `boolean \| undefined` | Optional | whether mAccount is fee account |
| `isParentAccount` | `boolean \| undefined` | Optional | whether mAccount is parent account |
| `isParentClearedFunds` | `boolean \| undefined` | Optional | whether mAccount is parent account |
| `clearedFundsAccountFinancials` | [`DTOMAccountClearedFundsAccount \| undefined`](../../doc/models/dtom-account-cleared-funds-account.md) | Optional | - |

## Example (as JSON)

```json
{
  "actualBalance": 1270.3,
  "clearedFundsOnly": true,
  "creditLimit": 10000.0,
  "feeAccountActualBalance": 17.985,
  "hasSeparateFeeAccount": true,
  "lowerCreditLimit": 0,
  "minimumSettlementAmount": 0.02,
  "settlementFrequency": "None",
  "upperCreditLimit": 10000,
  "isFeeAccount": false,
  "isParentAccount": true,
  "accountNumber": 68
}
```

