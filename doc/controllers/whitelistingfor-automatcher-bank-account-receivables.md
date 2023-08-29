# Whitelistingfor Automatcher Bank Account Receivables

```ts
const whitelistingforAutomatcherBankAccountReceivablesController = new WhitelistingforAutomatcherBankAccountReceivablesController(client);
```

## Class Name

`WhitelistingforAutomatcherBankAccountReceivablesController`

## Methods

* [Receivables List Whitelist Source Accounts](../../doc/controllers/whitelistingfor-automatcher-bank-account-receivables.md#receivables-list-whitelist-source-accounts)
* [Receivables Create Whitelist Source Account](../../doc/controllers/whitelistingfor-automatcher-bank-account-receivables.md#receivables-create-whitelist-source-account)
* [Receivables Update Whitelist Source Account](../../doc/controllers/whitelistingfor-automatcher-bank-account-receivables.md#receivables-update-whitelist-source-account)
* [Receivables Rejected Transactions Report](../../doc/controllers/whitelistingfor-automatcher-bank-account-receivables.md#receivables-rejected-transactions-report)


# Receivables List Whitelist Source Accounts

This endpoint will list all whitelisted source account details linked to the queried Automatcher account number.

```ts
async receivablesListWhitelistSourceAccounts(
  automatcherBankAccountNumber: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesGetWhiteListingAccountsResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `automatcherBankAccountNumber` | `number` | Template, Required | Valid receivables bank account number belonging to the Sign-in mAccount. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesGetWhiteListingAccountsResponseV1`](../../doc/models/receivables-get-white-listing-accounts-response-v1.md)

## Example Usage

```ts
const automatcherBankAccountNumber = 311673871;

try {
  const { result, ...httpResponse } = await whitelistingForAutomatcherBankAccountReceivablesController.receivablesListWhitelistSourceAccounts(automatcherBankAccountNumber);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Receivables Create Whitelist Source Account

Use this API to create a new whitelist entry for an automatcher account. Multiple source bank account numbers or bank account names can be whitelisted against each Automatcher number. The system will automatically return payments if the payment details do not match one of the entries.<br/><br/> Make sure to set the account status to “Enabled” to accept payments for the set of rules defined, the status can always be updated if the rule no longer applies using the update endpoint. <br/>

```ts
async receivablesCreateWhitelistSourceAccount(
  body?: ReceivablesCreateWhiteListingAccount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesCreateWhiteListingAccountResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesCreateWhiteListingAccount \| undefined`](../../doc/models/receivables-create-white-listing-account.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesCreateWhiteListingAccountResponseV1`](../../doc/models/receivables-create-white-listing-account-response-v1.md)

## Example Usage

```ts
const body: ReceivablesCreateWhiteListingAccount = {
  automatcherBankAccountNumber: 311673871,
};

try {
  const { result, ...httpResponse } = await whitelistingForAutomatcherBankAccountReceivablesController.receivablesCreateWhitelistSourceAccount(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Receivables Update Whitelist Source Account

Use this endpoint to change the status of a whitelisted source account.

```ts
async receivablesUpdateWhitelistSourceAccount(
  body?: ReceivablesUpdateWhiteListingAccount,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesUpdateWhiteListingAccountResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesUpdateWhiteListingAccount \| undefined`](../../doc/models/receivables-update-white-listing-account.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesUpdateWhiteListingAccountResponseV1`](../../doc/models/receivables-update-white-listing-account-response-v1.md)

## Example Usage

```ts
const body: ReceivablesUpdateWhiteListingAccount = {
  automatcherBankAccountNumber: 311673871,
};

try {
  const { result, ...httpResponse } = await whitelistingForAutomatcherBankAccountReceivablesController.receivablesUpdateWhitelistSourceAccount(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Receivables Rejected Transactions Report

Returns a report of all rejected transactions for the day with associated details, this includes Direct Entry and NPP Receivables. If requested multiple times on the current date (calendar day, AEDT), the report is cumulative. <table class="tb"> <tr> <td class="td"> ID </td> <td class="td"> Batch ID </td> <td class="td"> Datetime </td> <td class="td"> BSB </td> <td class="td"> AccountNumber </td> <td class="td"> AccountName </td> <td class="td"> PayId </td> <td class="td"> PayId Name </td> <td class="td"> TransactionCode </td> <td class="td"> TransactionType </td> <td class="td"> Amount </td> <td class="td"> LodgementRef </td> <td class="td"> RemitterName </td> <td class="td"> Indicator </td> <td class="td"> WithholdingTaxAmount (if applicable) </td> <td class="td"> EndToEndId</td> <td class="td"> NameOfUserSupplyingFile </td> <td class="td"> NumberOfUserSupplyingFile </td> <td class="td"> DescriptionOfEntriesOnFile </td> <td class="td"> Reason </td> <td class="td"> Status </td> <td class="td"> SourceBsb </td> <td class="td"> SourceAccountNumber </td> <td class="td"> SourceAccountName </td> </tr> <tr> <td class="td"> <br/> <br/> Monoova generated <br/> Unique ID. <br/> Max 12 chars. <br/> <br/> <br/> </td> <td class="td"> Payment Batch ID. <br/> Payments come in batches <br/> throughout the day. <br/> Max 12 chars. Blank if NPP. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Payee BSB. <br/> Max 7 Chars. </td> <td class="td"> Payee Bank Account <br/> Number. Max 34 chars. </td> <td class="td"> Payer submitted Account <br/> Name. Max 32 chars. </td> <td class="td"> Email address for the PayID. <br/> Max 256 chars. </td> <td class="td"> Name displayed to the payers <br/> Max 140 chars. </td> <td class="td"> Industry standard transaction <br/> code. “50” for credit. <br/> Refer to Direct entry standard <br/> for definitions 51-57. <br/> Max 5 chars. </td> <td class="td"> Possible Values:<br/> 'DE' or 'NPP'  <br/> </td> <td class="td"> Payment amount, <br/> 2 decimal places <br/> for cents. Max 11 chars. </td> <td class="td"> Payer submitted reference. <br/> Max 280 chars. </td> <td class="td"> Remitting Entity. <br/> Max 140 chars. </td> <td class="td"> Blank; OR 'W' dividend paid to a <br/> resident of a country where a double  <br/> tax agreement is in force. 'X' dividend  <br/> paid to a resident of any other country. <br/> 'Y' interest paid to all non-resident. <br/> Max 1 chars. </td> <td class="td"> Blank OR Payment amount, <br/> 2 decimal places for cents.<br/> Max 9 chars. </td> <td class="td"> Osko End to End identifier <br/> submitted by Payer. </td> <td class="td"> Preferred name of the <br/> User supplying <br/> the Direct Entry file. </td> <td class="td"> This is the User Identification <br/> Number which is assigned by  <br/> APCA and User Financial Institutions. </td> <td class="td"> Direct Entry file description. <br/> </td> <td class="td"> Reson for the rejection. <br/> </td> <td class="td"> Transaction Status. <br/> </td> <td class="td"> Payer BSB.<br/> Max 7 Chars.<br/> <br/> </td> <td class="td"> Payer Bank Account Number. <br/> Max 34 chars. <br/> </td> <td class="td"> This field appears for NPP transactions  <br/> only and is the payers bank account name.  <br/> For DE transactions please refer to the  <br/> RemitterName Field. Max 140 Chars. <br/> </td> </tr> </table> <p> Note:&nbsp; Source account details do not appear by default, please contact Monoova for further information</p> <br/> <h4>Possible transaction codes</h4> <table> <tr> <th>Code</th> <th>Transaction Description</th> </tr> <tr> <td>13</td> <td>Externally initiated debit items </td> </tr> <tr> <td>50</td> <td>Externally initiated credit items with the exception of those bearing Transaction Codes </tr> <tr> <td>51</td> <td>Australian Government Security Interest</td> </tr> <tr> <td>52</td> <td>Family Allowance </td> </tr> <tr> <td>53</td> <td>Pay</td> </tr> <tr> <td>54</td> <td>Pension</td> </tr> <tr> <td>55</td> <td>Allotment</td> </tr> <tr> <td>56</td> <td>Dividend</td> </tr> <tr> <td>57</td> <td>Debenture/Note Interest</td> </tr> </table> <br>

```ts
async receivablesRejectedTransactionsReport(
  date: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | date format should be 'yyyy-MM-dd' format. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const date = '2020-03-15';

try {
  const { result, ...httpResponse } = await whitelistingForAutomatcherBankAccountReceivablesController.receivablesRejectedTransactionsReport(date);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |

