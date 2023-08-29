# Webhooks

The examples of webhooks for the purpose of receiving transaction notifications. <table> <tr><th>Event name</th><th>Notification sent when</th> </tr> <tr><td>	NPPReceivepayment	</td><td>	Payment received via NPP rail	</td></tr> <tr><td>	PayToReceivePayment	</td><td>	Payment received as initiated through PayTo	</td></tr> <tr><td>	InboundDirectCredit	</td><td>	Payment received via direct entry rail. Note funds settled in batch via BECS settlement windows.	</td></tr> <tr><td>	InboundDirectDebit	</td><td>	Received 3rd party request to direct debit automatcher account	</td></tr> <tr><td>	DirectEntryDishonour	</td><td>	a direct debit request / direct credit payout has been dishonoured	</td></tr> <tr><td>	PendingInboundRtgsImt	</td><td>	RTGS/IMT transactions are received	</td></tr> <tr><td>	InboundRtgsImtStatus	</td><td>	the status of an RTGS/IMT transaction changes	</td></tr> <tr><td>	NppReturn	</td><td>	an NPP payment is returned	</td></tr> <tr><td>	NppPaymentStatus	</td><td>	the status of a pending NPP payment is updated	</td></tr>

</table> <br/>


```ts
const webhooksController = new WebhooksController(client);
```

## Class Name

`WebhooksController`

## Methods

* [Receivables Receive Payment Webhook](../../doc/controllers/webhooks.md#receivables-receive-payment-webhook)
* [Inbound Direct Credit Webhook](../../doc/controllers/webhooks.md#inbound-direct-credit-webhook)
* [Npp Payment Status](../../doc/controllers/webhooks.md#npp-payment-status)
* [Pay to Receive Payment Webhook](../../doc/controllers/webhooks.md#pay-to-receive-payment-webhook)
* [Inbound Direct Debit Webhook](../../doc/controllers/webhooks.md#inbound-direct-debit-webhook)
* [Direct Entry Dishonour](../../doc/controllers/webhooks.md#direct-entry-dishonour)
* [Inbound Rtgs Imt Status](../../doc/controllers/webhooks.md#inbound-rtgs-imt-status)
* [Npp Return](../../doc/controllers/webhooks.md#npp-return)
* [Pending Inbound Rtgs Imt](../../doc/controllers/webhooks.md#pending-inbound-rtgs-imt)


# Receivables Receive Payment Webhook

When an NPP payment is received, Monoova will send a callback with the below format. To subscribe to a webhook use the <a href="/payments#tag/Subscriptions"> Subscriptions </a> APIs. Event name:&nbsp;<strong>NPPReceivePayment</strong> <br/>

```ts
async receivablesReceivePaymentWebhook(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventReceivePaymentWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventReceivePaymentWebhook \| undefined`](../../doc/models/event-receive-payment-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventReceivePaymentWebhook = {
  transactionId: 'N00100000000',
  dateTime: '20/10/2020 12:00:01 AM',
  remitterName: 'ABC XYZ',
  amount: '10.0000',
  accountName: 'Test1',
  bsb: '123-123',
  paymentDescription: 'This is a free text which describes payment details',
  payId: 'test1@monoova.com',
  payIdName: 'monoova payIdName',
  sourceBsb: '123-123',
  sourceAccountNumber: '123456789',
  sourceAccountName: 'Monoova Payers Name',
  endToEndId: 'TEST_EndToEnd_ID',
};

try {
  const { result, ...httpResponse } = await webhooksController.receivablesReceivePaymentWebhook(
    authorization,
    verificationSignature,
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


# Inbound Direct Credit Webhook

Subscribing to the direct credit event webhook will allow us to notify you when an inbound direct credit is received on one of your accounts. As direct credits arrive in batches, you will receive the data in an JSON array with multiple transactions multiple times per day. Event name:&nbsp;<strong>InboundDirectCredit</strong> <br/>

```ts
async inboundDirectCreditWebhook(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventInboundDirectCreditWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventInboundDirectCreditWebhook \| undefined`](../../doc/models/event-inbound-direct-credit-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventInboundDirectCreditWebhook = {
  totalCount: 2,
  totalAmount: 3,
};

try {
  const { result, ...httpResponse } = await webhooksController.inboundDirectCreditWebhook(
    authorization,
    verificationSignature,
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


# Npp Payment Status

Subscribing to the npp payment status event webhook will allow us to notify you when the status of a pending NPP Payment gets updated. Event name:&nbsp;<strong>NppPaymentStatus</strong> <br/> <strong>Note:&nbsp; </strong> Receive an NPP Payment Status Webhook notification when the status of an NPP payment changes so you don’t need to poll for updates.<br/>

```ts
async nppPaymentStatus(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventNppPaymentStatusWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventNppPaymentStatusWebhook \| undefined`](../../doc/models/event-npp-payment-status-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventNppPaymentStatusWebhook = {
  transactionDate: '07/22/2019 00:00:00',
  uniqueReference: '2215125a-b80b-41aa-af58-740d21b303ed',
  transactionId: 1234567,
  amount: 2,
  bsb: '802-985',
  accountNumber: '123456789',
  accountName: 'Monoova',
  payId: 'MW9GM4@monoova.me',
  payIdType: PayIdType1Enum.Email,
  endToEndId: 'ABC/123-4356',
  remitterName: 'Monoova123',
  lodgementRef: 'Ref1',
  rejectionDateTime: '07/22/2019 00:00:00',
  rejectionReasonDescription: 'ACCOUNT CLOSED',
  rejectionTransactionId: 1234567,
};

try {
  const { result, ...httpResponse } = await webhooksController.nppPaymentStatus(
    authorization,
    verificationSignature,
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


# Pay to Receive Payment Webhook

When an NPP payment is received, Monoova will send a callback with the below format. To subscribe to a webhook use the <a href="/payments#tag/Subscriptions"> Subscriptions </a> APIs. Event name:&nbsp;<strong>PayToReceivePayment</strong> <br/>

```ts
async payToReceivePaymentWebhook(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventPayToreceivePaymentWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventPayToreceivePaymentWebhook \| undefined`](../../doc/models/event-pay-toreceive-payment-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventPayToreceivePaymentWebhook = {
  transactionId: 'N00100000000',
  dateTime: '20/10/2020 12:00:01 AM',
  remitterName: 'ABC XYZ',
  amount: '10.0000',
  accountName: 'Test1',
  bsb: '123-123',
  paymentDescription: 'This is a free text which describes payment details',
  payId: 'test1@monoova.com',
  payIdName: 'monoova payIdName',
  sourceBsb: '123-123',
  sourceAccountNumber: '123456789',
  sourceAccountName: 'Monoova Payers Name',
  endToEndId: 'TEST_EndToEnd_ID',
};

try {
  const { result, ...httpResponse } = await webhooksController.payToReceivePaymentWebhook(
    authorization,
    verificationSignature,
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


# Inbound Direct Debit Webhook

Subscribing to the direct debit event webhook will allow us to notify you when an inbound direct debit is received on one of your accounts. As direct debits arrive in batches, you will receive the data in an JSON array with multiple transactions multiple times per day. Event name:&nbsp;<strong>InboundDirectDebit</strong> <br/> <br/> Note:&nbsp; Source account details do not appear by default, please contact Monoova for further information <br/>

```ts
async inboundDirectDebitWebhook(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventInboundDirectDebitWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventInboundDirectDebitWebhook \| undefined`](../../doc/models/event-inbound-direct-debit-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventInboundDirectDebitWebhook = {
  totalCount: 1,
  totalAmount: 1,
};

try {
  const { result, ...httpResponse } = await webhooksController.inboundDirectDebitWebhook(
    authorization,
    verificationSignature,
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


# Direct Entry Dishonour

Subscribing to the direct entry dishonours event webhook will allow us to notify you when an dishonour transaction is made. Event name:&nbsp;<strong>DirectEntryDishonour</strong> <br/>

```ts
async directEntryDishonour(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventDirectEntryDishonoursWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventDirectEntryDishonoursWebhook \| undefined`](../../doc/models/event-direct-entry-dishonours-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventDirectEntryDishonoursWebhook = {
  returnDate: '07/22/2019 00:00:00',
  amount: 2,
  type: 'Credit',
  returnReason: 'ACCOUNT CLOSED',
  transactionDate: '07/19/2019 00:00:00',
  originalTransactionId: 1234567,
  transactionReference: '2215125a-b80b-41aa-af58-740d21b303ed',
};

try {
  const { result, ...httpResponse } = await webhooksController.directEntryDishonour(
    authorization,
    verificationSignature,
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


# Inbound Rtgs Imt Status

Subscribing to the RTGS/IMT status event webhook will allow us to notify you when status of an RTGS/IMT transaction changes. Event name:&nbsp;<strong>InboundRtgsImtStatus</strong> <br/>

```ts
async inboundRtgsImtStatus(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventInboundRtgsImtStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventInboundRtgsImtStatus \| undefined`](../../doc/models/event-inbound-rtgs-imt-status.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventInboundRtgsImtStatus = {
  transactionId: 'R12345678',
  accountNumber: '123456789',
  bsb: '802-985',
  accountName: 'Monoova',
  transactionReferenceNumber: 'MONOOVARE070222b-2',
  amount: 800,
  status: 'Confirmed',
  lodgementRef: 'IMT Gift CF3528811 0737599',
  date: '07/22/2019 00:00:00',
  sourceDetails: '123123123456789 JOHN Test 123 SAMPLE ST SAMPLEVILLE NSW AUSTRALIA 1234',
  processedDateTime: '02/08/2022 00:00:00',
  rejectReasonDescription: 'null',
  sendingOrganisation: 'ABCWAU4BAXXX',
  receivingOrganisation: 'MONOOVA PAYMENTS P/L',
  orderingInstitution: 'CDEWAU4BAXXX',
  orderingAddress: 'FTBAAUSRBXXX',
};

try {
  const { result, ...httpResponse } = await webhooksController.inboundRtgsImtStatus(
    authorization,
    verificationSignature,
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


# Npp Return

Subscribing to the npp return event webhook will allow us to notify you when an npp payment gets returned is made. Event name:&nbsp;<strong>NppReturn</strong> <br/>

```ts
async nppReturn(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventNppReturnWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventNppReturnWebhook \| undefined`](../../doc/models/event-npp-return-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventNppReturnWebhook = {
  returnDate: '07/22/2019 00:00:00',
  amount: 2,
  bsb: '802-985',
  accountNumber: '123456789',
  accountName: 'Monoova',
  payId: 'MW9GM4@monoova.me',
  payIdType: PayIdType1Enum.Email,
  endToEndId: 'ABC/123-4356',
  returnReason: 'ACCOUNT CLOSED',
  transactionDate: '07/19/2019 00:00:00',
  transactionId: 1234567,
  uniqueReference: '2215125a-b80b-41aa-af58-740d21b303ed',
  remitterName: 'Monoova123',
  lodgementRef: 'Ref1',
  returnTransactionId: 1234567,
};

try {
  const { result, ...httpResponse } = await webhooksController.nppReturn(
    authorization,
    verificationSignature,
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


# Pending Inbound Rtgs Imt

Subscribing to the Pending RTGS/IMT event webhook will allow us to notify you when a RTGS/IMT transaction is received on one of your accounts. As RTGS/IMT transaction arrive in batches, you will receive the data in an JSON array with multiple transactions multiple times per day. Event name:&nbsp;<strong>PendingInboundRtgsImt</strong> <br/>

```ts
async pendingInboundRtgsImt(
  authorization?: string,
  verificationSignature?: string,
  webhookid?: number,
  body?: EventPendingrtgsImtWebhook,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `verificationSignature` | `string \| undefined` | Header, Optional | This is a base64 encoded cryptographic signature that should be used<br/> to verify both the integrity of the message as well as the source (Monoova). <br/> The signature's hashing method is SHA256 and the public key can be retrieved from <a href="/payments#operation/PublicCertificatePublicKey"> /public/v1/certificate/public-key </a>. |
| `webhookid` | `number \| undefined` | Header, Optional | Unique Id to identify this webhook notification. |
| `body` | [`EventPendingrtgsImtWebhook \| undefined`](../../doc/models/event-pendingrtgs-imt-webhook.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const authorization = 'Bearer <TOKEN>';

const verificationSignature = 'e+AFAj2W69rAwbsGn+rSSnFm2ISEblo0MXnx9Qtoh2k5mst1cEEpcrVSzGL jzOPlEL2Ea/iYLbFGzDdxVRTcNLINOhsXM/smimNjBt8sq30FbvSNMjlfDn rZ6FOIkl3E3cu9B+M4OVL8HafPohb67IRNDNyCnCvBM10qHrioiak=';

const body: EventPendingrtgsImtWebhook = {
  totalCount: 1,
  totalAmount: 800,
};

try {
  const { result, ...httpResponse } = await webhooksController.pendingInboundRtgsImt(
    authorization,
    verificationSignature,
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

