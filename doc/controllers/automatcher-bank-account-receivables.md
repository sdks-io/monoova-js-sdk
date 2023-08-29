# Automatcher Bank Account Receivables

```ts
const automatcherBankAccountReceivablesController = new AutomatcherBankAccountReceivablesController(client);
```

## Class Name

`AutomatcherBankAccountReceivablesController`

## Methods

* [Receivables Create](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-create)
* [Receivables Status](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-status)
* [Receivables Inbound Direct Debit Report Date](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-inbound-direct-debit-report-date)
* [Receivables Report Date](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-report-date)
* [Pay to Receivables Report Date](../../doc/controllers/automatcher-bank-account-receivables.md#pay-to-receivables-report-date)
* [Receivables Batch Create](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-batch-create)
* [Receivablesbatch Status](../../doc/controllers/automatcher-bank-account-receivables.md#receivablesbatch-status)
* [Receivables List Accounts](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-list-accounts)
* [Receivables Refund](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-refund)
* [Receivables Process Direct Debit](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-process-direct-debit)
* [Receivables Process Rtgs Imt](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-process-rtgs-imt)
* [Receivables RTGSIMT Report Date](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-rtgsimt-report-date)
* [Receivables Status by Bank](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-status-by-bank)
* [Receivables Status by Client ID](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-status-by-client-id)
* [Receivables Report Last Settlement](../../doc/controllers/automatcher-bank-account-receivables.md#receivables-report-last-settlement)


# Receivables Create

Creates a new bank-account number. For the creation of batches of account numbers, please see <a href="/payments#operation/ReceivablesBatchCreate"> /receivables/v1/batchCreate </a> These account numbers can be used along with the returned BSB to receive payments from any bank in Australia. Payments to an invalid bank-account number, i.e. one that has not been created, will be returned by Monoova to the remitting institution. Each account number has a check digit to minimize common payer errors such as adjacent transposition errors or single-digit typos. An optional unique ID can be linked to each account number for your reference. If a unique ID is not provided, Monoova will generate and return one automatically. If isActive is omitted, it will default to false. This can be changed to true via the <a href="/payments#operation/ReceivablesStatus"> /receivables/v1/status</a> endpoint.

```ts
async receivablesCreate(
  body?: ReceivablesCreate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesCreateResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesCreate \| undefined`](../../doc/models/receivables-create.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesCreateResponseV1`](../../doc/models/receivables-create-response-v1.md)

## Example Usage

```ts
const body: ReceivablesCreate = {
  bankAccountName: 'bankAccountName2',
  clientUniqueId: '862944D057FC408B9B04541C2BA12',
  isActive: true,
};

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesCreate(
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


# Receivables Status

Bank accounts can be active or inactive. Inactive accounts will have all payments rejected and returned to the payer. Status can be called using either bank account number or clientuniqueId.

```ts
async receivablesStatus(
  body?: ReceivablesStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesStatusSetResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesStatus \| undefined`](../../doc/models/receivables-status.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesStatusSetResponseV1`](../../doc/models/receivables-status-set-response-v1.md)

## Example Usage

```ts
const body: ReceivablesStatus = {
  bankAccountNumber: 153884104,
  clientUniqueId: '862944D057FC408B9B04541C2BA12',
  isActive: false,
};

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesStatus(
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


# Receivables Inbound Direct Debit Report Date

The report is an application/octet-stream, columns are comma separated. Where a comma(,) or double quote(") is present in any of the below fields, the field will be encased in double quotes and/or escaped as per <a href="https://tools.ietf.org/html/rfc4180" target="_blank">RFC4180</a><br> . <table class="tb"> <tr> <td class="td"> Transaction ID </td> <td class="td"> Batch ID </td> <td class="td"> DateTime </td> <td class="td"> Status </td> <td class="td"> RejectionReason </td> <td class="td"> BSB </td> <td class="td"> AccountNumber </td> <td class="td"> AccountName </td> <td class="td"> Amount </td> <td class="td"> LodgementRef </td> <td class="td"> RemitterName </td> <td class="td"> RespondBeforeDateTime </td> <td class="td"> NameOfUserSupplyingFile </td> <td class="td"> NumberOfUserSupplyingFile </td> <td class="td"> DescriptionOfEntriesOnFile </td> <td class="td"> Indicator </td> <td class="td"> WithholdingTaxAmount (if applicable) </td> <td class="td"> SourceBsb (if applicable) </td> <td class="td"> SourceAccountNumber (if applicable) </td> </tr> <tr> <td class="td"> <br/> <br/> Monoova generated <br/> Unique ID. <br/> Max 12 chars. <br/> <br/> <br/> </td> <td class="td"> Payment Batch ID. <br/> Payments come in batches <br/> throughout the day. <br/> Max 12 chars. Blank if NPP. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Transaction status, <br/> possible values:&nbsp; <br/> Pending, Accept, Reject </td> <td class="td"> Text supplied when rejecting<br/> a direct debit. <br/> Max 250 Chars </td> <td class="td"> Payee BSB. <br/> Max 7 Chars. </td> <td class="td"> Payee Bank Account <br/> Number. Max 34 chars. </td> <td class="td"> Payer submitted Account <br/> Name. Max 32 chars. </td> <td class="td"> Payment amount, <br/> 2 decimal places <br/> for cents. Max 11 chars. </td> <td class="td"> Payer submitted reference. <br/> Max 280 chars. </td> <td class="td"> Remitting Entity. <br/> Max 140 chars. </td> <td class="td"> Time by when you have to  <br/> respond to the Inbound  <br/> Direct Debit request. </td> <td class="td"> Preferred name of the <br/> User supplying <br/> the Direct Entry file. </td> <td class="td"> This is the User Identification <br/> Number which is assigned by  <br/> APCA and User Financial Institutions. </td> <td class="td"> Direct Entry file description. <br/> </td> <td class="td"> Blank; OR 'W' dividend paid to a <br/> resident of a country where a double  <br/> tax agreement is in force. 'X' dividend  <br/> paid to a resident of any other country. <br/> 'Y' interest paid to all non-resident. <br/> Max 1 chars. </td> <td class="td"> Blank OR Payment amount, <br/> 2 decimal places for cents.<br/> Max 9 chars. </td> <td class="td"> Payee BSB. <br/> Max 7 Chars. </td> <td class="td"> Payee Bank Account <br/> Number. Max 34 chars. </td> </tr> </table> <br/> <br> Note&#58; Source account details do not appear by default, please contact Monoova for further information <br/>

```ts
async receivablesInboundDirectDebitReportDate(
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
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesInboundDirectDebitReportDate(date);
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


# Receivables Report Date

Returns a report of all received transactions for the day with associated details, this includes Direct Entry and NPP Receivables. If requested multiple times on the current date (calendar day, AEDT), the report is cumulative. E.g. if, on the same day, a report is requested at 10am and another one at 1pm, the report at 1pm will contain all the transactions already contained in the 10am report, in addition to any new transactions. Direct Entry transactions arrive in batches 7 times throughout the day, 8.30am, 11.30am, 14.30pm, 17.30pm, 19.45pm, 21.45pm and 22.50pm (emergency), business days only. NPP Transactions may arrive at anytime, we recommend <a href="/payments#tag/Subscriptions"> subscribing to a webhook </a> to receive new transaction notifications. <br/> <br/> The report is an application/octet-stream, columns are comma separated. Where a comma(,) or double quote(") is present in any of the below fields, the field will be encased in double quotes and/or escaped as per <a href="https://tools.ietf.org/html/rfc4180" target="_blank">RFC4180</a><br> Columns are as follows:&nbsp; <style type="text/css"> .tb { table-layout:auto; width:100px;!important } .td { overflow:hidden; white-space:nowrap; text-overflow:ellipsis; !important} </style> <table class="tb"> <tr> <td class="td"> Transaction ID </td> <td class="td"> Batch ID </td> <td class="td"> Datetime </td> <td class="td"> BSB </td> <td class="td"> AccountNumber </td> <td class="td"> AccountName </td> <td class="td"> PayId </td> <td class="td"> PayId Name </td> <td class="td"> TransactionCode </td> <td class="td"> TransactionType </td> <td class="td"> Amount </td> <td class="td"> LodgementRef </td> <td class="td"> RemitterName </td> <td class="td"> Indicator </td> <td class="td"> WithholdingTaxAmount (if applicable) </td> <td class="td"> EndToEndId</td> <td class="td"> RespondBeforeDateTime </td> <td class="td"> NameOfUserSupplyingFile </td> <td class="td"> NumberOfUserSupplyingFile </td> <td class="td"> DescriptionOfEntriesOnFile </td> <td class="td"> SourceBsb </td> <td class="td"> SourceAccountNumber </td> <td class="td"> SourceAccountName </td> <td class="td"> CategoryPurposeCode </td> <td class="td"> CreditorReferenceInformation </td> <td class="td"> USINumber </td> <td class="td"> USIScheme </td> <td class="td"> UltimateCreditorName </td> </tr> <tr> <td class="td"> <br/> <br/> Monoova generated <br/> Unique ID. <br/> Max 12 chars. <br/> <br/> <br/> </td> <td class="td"> Payment Batch ID. <br/> Payments come in batches <br/> throughout the day. <br/> Max 12 chars. Blank if NPP. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Payee BSB. <br/> Max 7 Chars. </td> <td class="td"> Payee Bank Account <br/> Number. Max 34 chars. </td> <td class="td"> Payer submitted Account <br/> Name. Max 32 chars. </td> <td class="td"> Email address for the PayID. <br/> Max 256 chars. </td> <td class="td"> Name displayed to the payers <br/> Max 140 chars. </td> <td class="td"> Industry standard transaction <br/> code. “50” for credit. <br/> Refer to Direct entry standard <br/> for definitions 51-57. <br/> Max 5 chars. </td> <td class="td"> Possible Values:<br/> 'DE' or 'NPP'  <br/> </td> <td class="td"> Payment amount, <br/> 2 decimal places <br/> for cents. Max 11 chars. </td> <td class="td"> Payer submitted reference. <br/> Max 280 chars. </td> <td class="td"> Remitting Entity. <br/> Max 140 chars. </td> <td class="td"> Blank; OR 'W' dividend paid to a <br/> resident of a country where a double  <br/> tax agreement is in force. 'X' dividend  <br/> paid to a resident of any other country. <br/> 'Y' interest paid to all non-resident. <br/> Max 1 chars. </td> <td class="td"> Blank OR Payment amount, <br/> 2 decimal places for cents.<br/> Max 9 chars. </td> <td class="td"> Osko End to End identifier <br/> submitted by Payer. <br/> Max 35 chars. </td> <td class="td"> Time by when you have to  <br/> respond to the Inbound  <br/> Direct Debit request. </td> <td class="td"> Preferred name of the <br/> User supplying <br/> the Direct Entry file. </td> <td class="td"> This is the User Identification <br/> Number which is assigned by  <br/> APCA and User Financial Institutions. </td> <td class="td"> Direct Entry file description. <br/> </td> <td class="td"> Payer BSB.<br/> Max 7 Chars.<br/> <br/> </td> <td class="td"> Payer Bank Account Number. <br/> Max 34 chars. <br/> </td> <td class="td"> This field appears for NPP transactions  <br/> only and is the payers bank account name.  <br/> For DE transactions please refer to the  <br/> RemitterName Field. Max 140 Chars. <br/> </td> <td class="td"> NPP payment purpose code, max 4 chars.<br/> Possible values:<br/> Blank, <br/> SALA = Salary, <br/> PENS = SuperAnnuation, <br/> SUPP = E-Invoice, <br/> TAXS = Tax </td> <td class="td"> Used for SALA, PENS, SUPP and TAXS <br/> transactions only. <br/> Reference related to payment type. <br/> Max 35 chars. </td> <td class="td"> Used for PENS code payments only. <br/> Unique Superannuation ID (USI) <br/> Max 35 chars. </td> <td class="td"> Used for PENS code payments only. <br/> USI scheme. <br/> Max 35 chars. </td> <td class="td"> Used for PENS code payments only. <br/> Name of the Ultimate Creditor. <br/> Max 140 chars. </td> </tr> </table> <p> Note:&nbsp; Source account details do not appear by default, please contact Monoova for further information. Also note, we will only retrieve 1 month transaction at a time</p> <br/> <h4>Possible transaction codes</h4> <table> <tr> <th>Code</th> <th>Transaction Description</th> </tr> <tr> <td>13</td> <td>Externally initiated debit items </td> </tr> <tr> <td>50</td> <td>Externally initiated credit items with the exception of those bearing Transaction Codes </tr> <tr> <td>51</td> <td>Australian Government Security Interest</td> </tr> <tr> <td>52</td> <td>Family Allowance </td> </tr> <tr> <td>53</td> <td>Pay</td> </tr> <tr> <td>54</td> <td>Pension</td> </tr> <tr> <td>55</td> <td>Allotment</td> </tr> <tr> <td>56</td> <td>Dividend</td> </tr> <tr> <td>57</td> <td>Debenture/Note Interest</td> </tr> </table> <br>

```ts
async receivablesReportDate(
  date: string,
  endDate?: string,
  skip?: number,
  take?: number,
  accountNumber?: number,
  clientUniqueId?: string,
  transactionType?: TransactionTypeEnum,
  transactionCode?: TransactionCodeEnum,
  payId?: string,
  payIdName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | Format:&nbsp; 'yyyyMMddHHmmss'. This becomes the start date of the report if report is being fetched for a date range. |
| `endDate` | `string \| undefined` | Query, Optional | Format:&nbsp; yyyyMMddHHmmss. Use this to fetch the report for a date range. |
| `skip` | `number \| undefined` | Query, Optional | Number of records to skip. 0 is the first record. |
| `take` | `number \| undefined` | Query, Optional | Number of records to take. If endDate is provided maximum take is 10000. |
| `accountNumber` | `number \| undefined` | Query, Optional | Payee bank account number. |
| `clientUniqueId` | `string \| undefined` | Query, Optional | The unique identifier for the account. |
| `transactionType` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Query, Optional | Possible Values:&nbsp; 'DE' or 'NPP'. |
| `transactionCode` | [`TransactionCodeEnum \| undefined`](../../doc/models/transaction-code-enum.md) | Query, Optional | Industry standard transaction code. only applicable for DE. Possible values:&nbsp; “13” for Debit, “50” for credit.Refer to Direct entry standard for definitions 51-57. |
| `payId` | `string \| undefined` | Query, Optional | Email address for the PayID. |
| `payIdName` | `string \| undefined` | Query, Optional | Name displayed to the payers. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const date = '20200401000001';

const endDate = '20200408235959';

const skip = 0;

const take = 1000;

const accountNumber = 123456789;

const clientUniqueId = '862944d057FC408B9B04541C2BA12';

const transactionType = TransactionTypeEnum.DE;

const transactionCode = TransactionCodeEnum.Enum13;

const payId = 'xxx@xxx.xx';

const payIdName = 'abcdefgh';

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesReportDate(
    date,
    endDate,
    skip,
    take,
    accountNumber,
    clientUniqueId,
    transactionType,
    transactionCode,
    payId,
    payIdName
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


# Pay to Receivables Report Date

Returns a report of PayTo transactions for the day with associated details. If requested multiple times on the current date (calendar day, AEDT), the report is cumulative. E.g. if, on the same day, a report is requested at 10am and another one at 1pm, the report at 1pm will contain all the transactions already contained in the 10am report, in addition to any new transactions. PayTo Transactions may arrive at anytime, we recommend <a href="/payments#tag/Subscriptions"> subscribing to a webhook </a> to receive new transaction notifications. <br/> <br/> The report is an application/octet-stream, columns are comma separated. Where a comma(,) or double quote(") is present in any of the below fields, the field will be encased in double quotes and/or escaped as per <a href="https://tools.ietf.org/html/rfc4180" target="_blank">RFC4180</a><br> Columns are as follows:&nbsp; <style type="text/css"> .tb { table-layout:auto; width:100px;!important } .td { overflow:hidden; white-space:nowrap; text-overflow:ellipsis; !important} </style> <table class="tb"> <tr> <td class="td"> Transaction ID </td> <td class="td"> Batch ID </td> <td class="td"> Datetime </td> <td class="td"> BSB </td> <td class="td"> AccountNumber </td> <td class="td"> AccountName </td> <td class="td"> PayId </td> <td class="td"> PayId Name </td> <td class="td"> TransactionCode </td> <td class="td"> TransactionType </td> <td class="td"> Amount </td> <td class="td"> LodgementRef </td> <td class="td"> RemitterName </td> <td class="td"> Indicator </td> <td class="td"> WithholdingTaxAmount (if applicable) </td> <td class="td"> EndToEndId</td> <td class="td"> RespondBeforeDateTime </td> <td class="td"> NameOfUserSupplyingFile </td> <td class="td"> NumberOfUserSupplyingFile </td> <td class="td"> DescriptionOfEntriesOnFile </td> <td class="td"> SourceBsb </td> <td class="td"> SourceAccountNumber </td> <td class="td"> SourceAccountName </td> <td class="td"> CategoryPurposeCode </td> <td class="td"> CreditorReferenceInformation </td> <td class="td"> USINumber </td> <td class="td"> USIScheme </td> <td class="td"> UltimateCreditorName </td> <td class="td"> MMSId </td> <td class="td"> InitiatingPartyName </td>

</tr> <tr> <td class="td"> <br/> <br/> Monoova generated <br/> Unique ID. <br/> Max 12 chars. <br/> <br/> <br/> </td> <td class="td"> Payment Batch ID. <br/> Payments come in batches <br/> throughout the day. <br/> Max 12 chars. Blank if NPP. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Payee BSB. <br/> Max 7 Chars. </td> <td class="td"> Payee Bank Account <br/> Number. Max 34 chars. </td> <td class="td"> Payer submitted Account <br/> Name. Max 32 chars. </td> <td class="td"> Email address for the PayID. <br/> Max 256 chars. </td> <td class="td"> Name displayed to the payers <br/> Max 140 chars. </td> <td class="td"> Industry standard transaction <br/> code. “50” for credit. <br/> Refer to Direct entry standard <br/> for definitions 51-57. <br/> Max 5 chars. </td> <td class="td"> Possible Values:<br/> 'DE' or 'NPP'  <br/> </td> <td class="td"> Payment amount, <br/> 2 decimal places <br/> for cents. Max 11 chars. </td> <td class="td"> Payer submitted reference. <br/> Max 500 chars. </td> <td class="td"> Remitting Entity. <br/> Max 140 chars. </td> <td class="td"> Blank; OR 'W' dividend paid to a <br/> resident of a country where a double  <br/> tax agreement is in force. 'X' dividend  <br/> paid to a resident of any other country. <br/> 'Y' interest paid to all non-resident. <br/> Max 1 chars. </td> <td class="td"> Blank OR Payment amount, <br/> 2 decimal places for cents.<br/> Max 9 chars. </td> <td class="td"> Osko End to End identifier <br/> submitted by Payer. </td> <td class="td"> Time by when you have to  <br/> respond to the Inbound  <br/> Direct Debit request. </td> <td class="td"> Preferred name of the <br/> User supplying <br/> the Direct Entry file. </td> <td class="td"> This is the User Identification <br/> Number which is assigned by  <br/> APCA and User Financial Institutions. </td> <td class="td"> Direct Entry file description. <br/> </td> <td class="td"> Payer BSB.<br/> Max 7 Chars.<br/> <br/> </td> <td class="td"> Payer Bank Account Number. <br/> Max 34 chars. <br/> </td> <td class="td"> This field appears for NPP transactions  <br/> only and is the payers bank account name.  <br/> For DE transactions please refer to the  <br/> RemitterName Field. Max 140 Chars. <br/> </td> <td class="td"> NPP payment purpose code, max 4 chars.<br/> Possible values:<br/> Blank, <br/> SALA = Salary, <br/> PENS = SuperAnnuation, <br/> SUPP = E-Invoice, <br/> TAXS = Tax </td> <td class="td"> Used for SALA, PENS, SUPP and TAXS <br/> transactions only. <br/> Reference related to payment type. <br/> Max 35 chars. </td> <td class="td"> Used for PENS code payments only. <br/> Unique Superannuation ID (USI) <br/> Max 35 chars. </td> <td class="td"> Used for PENS code payments only. <br/> USI scheme. <br/> Max 35 chars. </td> <td class="td"> Used for PENS code payments only. <br/> Name of the Ultimate Creditor. <br/> Max 140 chars. </td> <td class="td"> Id assigned by NPPA for payment agreement </td> <td class="td"> Iniation Party name. <br/> </td>
</tr> </table> <p> Note:&nbsp; Source account details do not appear by default, please contact Monoova for further information. Also note, we will only retrieve 1 month transaction at a time</p> <br/> <h4>Possible transaction codes</h4> <table> <tr> <th>Code</th> <th>Transaction Description</th> </tr> <tr> <td>13</td> <td>Externally initiated debit items </td> </tr> <tr> <td>50</td> <td>Externally initiated credit items with the exception of those bearing Transaction Codes </tr> <tr> <td>51</td> <td>Australian Government Security Interest</td> </tr> <tr> <td>52</td> <td>Family Allowance </td> </tr> <tr> <td>53</td> <td>Pay</td> </tr> <tr> <td>54</td> <td>Pension</td> </tr> <tr> <td>55</td> <td>Allotment</td> </tr> <tr> <td>56</td> <td>Dividend</td> </tr> <tr> <td>57</td> <td>Debenture/Note Interest</td> </tr> </table> <br>


```ts
async payToReceivablesReportDate(
  date: string,
  endDate?: string,
  skip?: number,
  take?: number,
  accountNumber?: number,
  clientUniqueId?: string,
  transactionType?: TransactionTypeEnum,
  transactionCode?: TransactionCodeEnum,
  payId?: string,
  payIdName?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | Format:&nbsp; 'yyyyMMddHHmmss'. This becomes the start date of the report if report is being fetched for a date range. |
| `endDate` | `string \| undefined` | Query, Optional | Format:&nbsp; yyyyMMddHHmmss. Use this to fetch the report for a date range. |
| `skip` | `number \| undefined` | Query, Optional | Number of records to skip. 0 is the first record. |
| `take` | `number \| undefined` | Query, Optional | Number of records to take. If endDate is provided maximum take is 10000. |
| `accountNumber` | `number \| undefined` | Query, Optional | Payee bank account number. |
| `clientUniqueId` | `string \| undefined` | Query, Optional | The unique identifier for the account. |
| `transactionType` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Query, Optional | Possible Values:&nbsp; 'DE' or 'NPP'. |
| `transactionCode` | [`TransactionCodeEnum \| undefined`](../../doc/models/transaction-code-enum.md) | Query, Optional | Industry standard transaction code. only applicable for DE. Possible values:&nbsp; “13” for Debit, “50” for credit.Refer to Direct entry standard for definitions 51-57. |
| `payId` | `string \| undefined` | Query, Optional | Email address for the PayID. |
| `payIdName` | `string \| undefined` | Query, Optional | Name displayed to the payers. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const date = '20200401000001';

const endDate = '20200408235959';

const skip = 0;

const take = 1000;

const accountNumber = 123456789;

const clientUniqueId = '862944d057FC408B9B04541C2BA12';

const transactionType = TransactionTypeEnum.DE;

const transactionCode = TransactionCodeEnum.Enum13;

const payId = 'xxx@xxx.xx';

const payIdName = 'abcdefgh';

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.payToReceivablesReportDate(
    date,
    endDate,
    skip,
    take,
    accountNumber,
    clientUniqueId,
    transactionType,
    transactionCode,
    payId,
    payIdName
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


# Receivables Batch Create

The batch create API has the same functionality as the <a href="/payments#operation/ReceivablesCreate"> /receivables/v1/create  </a> endpoint however it allows you to create up to 50,000 accounts in a single call by submitting a file. We recommend this for circumstances where > 100 accounts need to be created within a short time period.
Creation of accounts with isActive=true is restricted to 1000. Multiple batches cannot be requested at the same time, you have to wait for the completion of a batch before requesting a new one.
The Batch Create API also supports a lightweight option whereby many accounts can be created by submitting a single line. This option automatically sets isActive = true, hence you can only request the creation of 1000 accounts in one request. For this method, all accounts will be created with the same specified name, and clientuniqueid’s cannot be specified will be automatically generated. <br/> <br/>

```ts
async receivablesBatchCreate(
  body?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesBatchCreateV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesBatchCreateV1`](../../doc/models/receivables-batch-create-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesBatchCreate();
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


# Receivablesbatch Status

The batch Status API functions similarly to the <a href="/payments#operation/ReceivablesStatus"> /receivables/v1/Status </a> API, however it allows you to update accounts in batch. You can only update 1000 records per request. Multiple batches cannot be requested at the same time, you have to wait for the completion of a batch before requesting a new one. <br/> <br/>

```ts
async receivablesbatchStatus(
  body?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesBatchStatusV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesBatchStatusV1`](../../doc/models/receivables-batch-status-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesbatchStatus();
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


# Receivables List Accounts

List Accounts will return a list of all account numbers you have linked to your Sign in. <br/> <br/>

```ts
async receivablesListAccounts(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesListAccountsV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesListAccountsV1`](../../doc/models/receivables-list-accounts-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesListAccounts();
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


# Receivables Refund

The refund API allows the transfer funds back to the payer for transactions received via EFT. The funds are sent to details as supplied by the payer institution. Please note that not all institutions provide valid payer details, in some cases the refund will not be successful. <br/> <br/>

```ts
async receivablesRefund(
  body?: ReceivablesRefund,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesRefundResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesRefund \| undefined`](../../doc/models/receivables-refund.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesRefundResponseV1`](../../doc/models/receivables-refund-response-v1.md)

## Example Usage

```ts
const body: ReceivablesRefund = {
  uniqueReference: 'Reference6436302',
  originalTransactionId: 'D00100027170',
  refundAmount: 1,
  description: 'Test Refund. Inv#123456',
  refundReference: 'RefundRef001',
};

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesRefund(
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


# Receivables Process Direct Debit

Automatcher accounts can also process direct debits from external organisations against them. By default this behaviour is disabled. If configured to allow direct debits, a notification will be sent when an external party attempts to debit one of your accounts, and if accepted, the funds will be deducted from your sign in mAccount. <br><br> Notification of a pending direct debit are sent via a <a href="/payments#operation/InboundDirectDebitWebhook"> callback </a> or a <a href="/payments#operation/ReceivablesInboundDirectDebitReportDate"> report </a> API can be called to list all pending debits. <br><br> After receiving a notification, you have until 4:00pm next business day (from the time the initial debit is received) to instruct us on what action to take; either approve or reject. If no action is taken the transaction will be placed into a pending status until expiry next business day at 4pm. <br><br> For expiring transactions, the direct debit request will automatically be actioned based on your account default configuration. <br><br> Configuration options are:<br><br> a)  Accept direct debit request for all requests<br> b)  Reject direct debit for all requests <br><br> Note if you do not have sufficient balance in your sign in mAccount you cannot accept direct debits and expiring direct debits will be automatically returned regardless of configuration.

```ts
async receivablesProcessDirectDebit(
  body?: ReceivablesProcessdirectdebit,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesProcessDirectDebitResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesProcessdirectdebit \| undefined`](../../doc/models/receivables-processdirectdebit.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesProcessDirectDebitResponseV1`](../../doc/models/receivables-process-direct-debit-response-v1.md)

## Example Usage

```ts
const body: ReceivablesProcessdirectdebit = {
  transactionId: 'D00100539578',
  response: ResponseEnum.Accept,
  returnCode: ReturnCodeEnum.ReferToCustomer,
};

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesProcessDirectDebit(
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


# Receivables Process Rtgs Imt

Automatcher accounts can be configurated to receive Swift Transfers. This includes both RTGS (Real Time Gross Settlement) and IMT (International Money Transfers). <br><br> If the account is not configured to receive Swift Transfers, the transaction will be automatically rejected on our end. If configured to allow RTGS/IMT transactions, a notification will be sent when an external party attempts to credit to one of your accounts, and if accepted, the funds will be credited to your sign in mAccount or nominated mAccount. Please contact Monoova for configuration of account. <br><br> Notification of a RTGS/IMT are sent via a <a href="/payments/payments#operation/PendingInboundRtgsImt"> callback </a> or a <a href="/payments#operation/ReceivablesRTGSIMTReportDate"> report </a> API can be called to list all pending transactions. <br><br> After receiving a notification, you have 2 business days to either confirm or reject. If no action is taken the transaction will be placed into a pending status until expiry. <br><br> For expiring transactions, the RTGS/IMT transactions will automatically be actioned based on your account default configuration. <br><br> Configuration options are:<br><br> a)  Confirm - Accept all incoming RTGS/IMT Transactions<br> b)  Reject  - Reject all incoming RTGS/IMT Transactions <br><br>

```ts
async receivablesProcessRtgsImt(
  body?: ReceivablesProcessrtgsimt,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesProcessDirectDebitResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ReceivablesProcessrtgsimt \| undefined`](../../doc/models/receivables-processrtgsimt.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesProcessDirectDebitResponseV1`](../../doc/models/receivables-process-direct-debit-response-v1.md)

## Example Usage

```ts
const body: ReceivablesProcessrtgsimt = {
  transactionId: 'D00100539578',
  response: Response1Enum.Reject,
  rejectionReasonCode: RejectionReasonCodeEnum.AM06,
};

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesProcessRtgsImt(
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


# Receivables RTGSIMT Report Date

Returns a report of all received transactions for the day with associated details, this includes RTGS (real-time gross settlement) and International Money Transfer. If requested multiple times on the current date (calendar day, AEDT), the report is cumulative. E.g. if, on the same day, a report is requested at 10am and another one at 1pm, the report at 1pm will contain all the transactions already contained in the 10am report, in addition to any new transactions. <br/> <br/> The report is an application/octet-stream, columns are comma separated. Where a comma(,) or double quote(") is present in any of the below fields, the field will be encased in double quotes and/or escaped as per <a href="https://tools.ietf.org/html/rfc4180" target="_blank">RFC4180</a><br> Columns are as follows:&nbsp; <table class="tb"> <tr> <td class="td"> Transaction ID </td> <td class="td"> AccountNumber </td> <td class="td"> BSB </td> <td class="td"> AccountName </td> <td class="td"> TransactionReferenceNumber </td> <td class="td"> Amount </td> <td class="td"> Status </td> <td class="td"> LodgementRef </td> <td class="td"> Date </td> <td class="td"> SourceAccountDetails </td> <td class="td"> RespondBeforeDateTime </td> <td class="td"> RejectReasonDescription </td> <td class="td"> ProcessedDate </td> <td class="td"> SendingOrganisation </td> <td class="td"> ReceivingOrganisation </td> <td class="td"> OrderingInstitution </td> <td class="td"> OriginatingAddress </td> </tr> <tr> <td class="td"> <br/> <br/> Monoova generated <br/> Unique ID. <br/> Max 12 chars. <br/> <br/> <br/> </td> <td class="td"> Payee Bank Account <br/> Number. Max 34 chars. </td> <td class="td"> Payee BSB. <br/> Max 7 Chars. </td> <td class="td"> Payer submitted Account <br/> Name. Max 32 chars. </td> <td class="td"> TransactionReferenceNumber. <br/> Max 21 chars. </td> <td class="td"> Payment amount, <br/> 2 decimal places <br/> for cents. Max 11 chars. </td> <td class="td"> Transaction status, <br/> possible values:&nbsp; <br/> Pending, Confirmed and Rejected. </td> <td class="td"> Payer submitted reference. <br/> Max 280 chars. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Source Account Name address and account number </td> <td class="td"> The time user has to Confirm/Reject a transaction. AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Reason why transaction was rejected. <br/> Max 500 chars. </td> <td class="td"> The time when transaction was Confirmed/Rejected. AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> Sending Organisation. <br/> Max 100 chars. </td> <td class="td"> Receiving Organisation. <br/> Max 100 chars. </td> <td class="td"> Ordering Institution. <br/> Max 100 chars. </td> <td class="td"> Originating Address. <br/> Max 100 chars. </td>

</tr> </table> <br/>


```ts
async receivablesRTGSIMTReportDate(
  date: string,
  endDate?: string,
  skip?: number,
  take?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | This becomes the start date of the report if report is being fetched for a date range. Date format should be 'yyyy-MM-dd' format. |
| `endDate` | `string \| undefined` | Query, Optional | Use this to fetch the report for a date range. Date format should be 'yyyy-MM-dd' format |
| `skip` | `number \| undefined` | Query, Optional | Number of records to skip. 1 is the first record.Value should be greater than 0 |
| `take` | `number \| undefined` | Query, Optional | Number of records to take. If endDate is provided maximum take is 10000. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const date = '2020-03-15';

const endDate = '2020-04-08';

const skip = 1;

const take = 1000;

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesRTGSIMTReportDate(
    date,
    endDate,
    skip,
    take
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


# Receivables Status by Bank

Returns the status of a bank account number. Without changing the status, this API is used for checking the status of a bank account. Status can be called using either bankaccount number or clientUniqueId.

```ts
async receivablesStatusByBank(
  bankAccountNumber: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesStatusGetResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `number` | Template, Required | The bank account number generated. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesStatusGetResponseV1`](../../doc/models/receivables-status-get-response-v1.md)

## Example Usage

```ts
const bankAccountNumber = 153884104;

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesStatusByBank(bankAccountNumber);
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


# Receivables Status by Client ID

Returns the status of a bank account number. Without changing the status, this API is used for checking the status of a bank account. Status can be called using either bankAccount number or clientUniqueId.

```ts
async receivablesStatusByClientID(
  clientUniqueId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesStatusGetResponseV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientUniqueId` | `string` | Template, Required | An identifier assigned to the account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesStatusGetResponseV1`](../../doc/models/receivables-status-get-response-v1.md)

## Example Usage

```ts
const clientUniqueId = '862944d057FC408B9B04541C2BA12';

try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesStatusByClientID(clientUniqueId);
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


# Receivables Report Last Settlement

Returns the latest settlement for received funds. We suggest using this as a lightweight polling endpoint to establish when new transactions have been received. Transactions arrive in batches.

```ts
async receivablesReportLastSettlement(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReceivablesReportLastSettlementV1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReceivablesReportLastSettlementV1`](../../doc/models/receivables-report-last-settlement-v1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await automatcherBankAccountReceivablesController.receivablesReportLastSettlement();
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

