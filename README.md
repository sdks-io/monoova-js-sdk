
# Getting Started with Monoova Payments API

## Introduction

### Introduction

<p> 
  Monoova has developed a powerful payments engine which allows you to receive, manage and pay funds in AUD in Australia automatically.
  This service is made available to Monoova’s clients through a set of easy-to-use RESTful APIs with JSON payloads described in this document.
  The central idea is to reduce the cost, risk and effort normally associated with managing complex money movements so that you can focus on growing your business.
</p> 
<p> 
 Our clients can receive and reconcile funds via Realtime transfers (NPP), direct credits/debits, BPAY and cards. 
 They can then manage those funds by building virtual account/wallet hierarchies to get bespoke reporting, reconciliation and much more. 
 And finally, our clients can pay funds via Realtime transfers (NPP) direct credits and BPAY. 
 As new technologies become available (e.g. NPP Mandated payments) we will make additional methods of receiving, managing and paying available.
</p> 
<p> 
  All information flows are real-time.
  Moving money between various Monoova accounts is also real time.
  All money flows in and out of the Engine are as fast as the banking system allows.
</p>
<p> 
  The sandbox environment is open to everyone who signs up on our <a href="https://developer.monoova.com/user/login" target="_blank">Developer Portal</a> at no cost.
  The sandbox environment allows you to test out the functionality of our API in a consequence free development environment.
  Access to the live environment is granted once you have (1) gone through our compliance process and (2) had formal sign-off on your sandbox integration.
</p> 
<br/><br/>
<p> <strong> Note&#58;</strong> Please note we do not accept TLS 1.0 or 1.1 connections</p>


### Getting started



- Sign on to our <a href="https://developer.monoova.com/user/login" target="_blank">Developer Portal</a> which you already have done
- Get your sandbox API key under **MANAGE > ACCOUNTS** in the Developer Portal
- [Authenticate](#section/Authentication)
- Browse this document to find the functions you need
- Begin experimenting with your first API calls by sending HTTP requests to the endpoints described in this document
- Use the provided examples in the document as guidance

To try out our API you can use a client such as <a href="https://www.getpostman.com" target="_blank"> Postman </a> <br><br>
You can download a postman collection of our API by clicking the link below:<br><br>
<a href="https://god.gw.postman.com/run-collection/21268484-4f72cf91-d973-488a-8c19-74fb369621d2?action=collection%2Ffork&collection-url=entityId%3D21268484-4f72cf91-d973-488a-8c19-74fb369621d2%26entityType%3Dcollection%26workspaceId%3D0a304f49-2e6e-4498-8d43-3b68ee26aee6" target="_blank">
<img src="https://run.pstmn.io/button.svg" alt="Run in Postman" />
</a>

### Authentication

All RESTful APIs in this document use BASIC Authentication (except those in public/v1) in two scenarios either

- <strong> API KEY </strong>
- <strong> OneShotSecurityToken </strong><br><br>

> **Sandbox Authentication Credentials**

<table>
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Username</td>
    <td>API Key (obtained from the <a href="https://developer.monoova.com/user/login" target="_blank">Developer Portal</a>) </td>
  </tr>
  <tr>
    <td>Password</td>
    <td>leave blank when using API key; Monoova will provide password for OneShotSecurityToken</td>
  </tr>
  <tr>
    <td>Base URL</td>
    <td>https://api.m-pay.com.au/</td>
  </tr>
</table> <br>


> **Live Authentication Credentials**
> This will be provided by Monoova after a technical review. <br>

<table>
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Username</td>
    <td>API Key (obtained from the Production Portal; Production credentials will be supplied by Monoova) </td>
  </tr>
  <tr>
    <td>Password</td>
    <td>leave blank when using API key; Monoova will provide password for OneShotSecurityToken</td>
  </tr>
  <tr>
    <td>Base URL</td>
    <td>https://api.mpay.com.au/</td>
  </tr>
</table> <br>


When using the LIVE Engine, your Sign-In Account is given five (5) attempts to authenticate your credentials.
On the fifth failure your Sign-In Account is locked for one (1) hour.
The returned data will indicate that your account is locked and the time in UTC that the account will be unlocked.
If you require the account to be unlocked on the LIVE system you may contact your Monoova representative and at his or her discretion they will unlock the account.
See the API routes in Security to manage Passwords and Tokens. <br><br>

<h3> UserName/Password </h3>
Using this scenario, you can configure BASIC Authentication with the following <br> <br>
<li> <strong> UserName </strong> - API Key (obtained from the <a href="https://developer.monoova.com/user/login" target="_blank">Developer Portal</a>) Production credentials will be supplied by Monoova when you have demonstrated successful implementation of the API on our Sandbox environment.</li>
<li> <strong> Password </strong> - When using your API Key, no password is required. 
If the key is compromised, it can be re-rolled via the <a href="https://developer.monoova.com/user/login" target="_blank">Developer Portal</a>. </li> <br>


## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install sdksio-monoova-sdk@1.0.0
```

For additional package details, see the [Npm page for the sdksio-monoova-sdk@1.0.0  npm](https://www.npmjs.com/package/sdksio-monoova-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
  basicAuthUserName: 'BasicAuthUserName',
  basicAuthPassword: 'BasicAuthPassword',
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** Production URL |
| environment2 | Sandbox URL |

## Authorization

This API uses `Basic Authentication`.

## List of APIs

* [Automatcher Bank Account Receivables](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/automatcher-bank-account-receivables.md)
* [Whitelistingfor Automatcher Bank Account Receivables](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/whitelistingfor-automatcher-bank-account-receivables.md)
* [Testing Reference Data](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/testing-reference-data.md)
* [Financial](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/financial.md)
* [BPAY](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/bpay.md)
* [Verify](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/verify.md)
* [Pay ID](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/pay-id.md)
* [Tools](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/tools.md)
* [Subscriptions](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/subscriptions.md)
* [Webhooks](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/webhooks.md)
* [Reports](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/reports.md)
* [Token](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/token.md)
* [Security](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/security.md)
* [M Account](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/m-account.md)
* [M Wallet](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/controllers/m-wallet.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/monoova-js-sdk/tree/1.0.0/doc/api-error.md)

