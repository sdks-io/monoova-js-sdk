/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  DTOBPAYBillerResponseV1,
  dTOBPAYBillerResponseV1Schema,
} from '../models/dTOBPAYBillerResponseV1';
import {
  DTOBPAYBillersResponseV1,
  dTOBPAYBillersResponseV1Schema,
} from '../models/dTOBPAYBillersResponseV1';
import {
  DTOBPAYHistoryResponseV1,
  dTOBPAYHistoryResponseV1Schema,
} from '../models/dTOBPAYHistoryResponseV1';
import {
  DTOBPAYReceiptResponseV1,
  dTOBPAYReceiptResponseV1Schema,
} from '../models/dTOBPAYReceiptResponseV1';
import {
  DTOValidateBPAYResponseV1,
  dTOValidateBPAYResponseV1Schema,
} from '../models/dTOValidateBPAYResponseV1';
import { bigint, number, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class BPAYController extends BaseController {
  /**
   * Returns a report of all received  BPAY transactions for the day with associated details. If
   * requested multiple times on the current date (calendar day, AEDT), the report is cumulative. E.g. if,
   * on the same day, a report is requested at 10am and another one at 1pm, the report at 1pm will
   * contain all the transactions already contained in the 10am report, in addition to any new
   * transactions. <br/> <br/> The report is an application/octet-stream, columns are comma separated.
   * Where a comma(,) or double quote(") is present in any of the below fields, the field will be encased
   * in double quotes and/or escaped as per <a href="https://tools.ietf.org/html/rfc4180"
   * target="_blank">RFC4180</a><br> Columns are as follows:&nbsp; <style type="text/css"> .tb { table-
   * layout:auto; width:100px;!important } .td { overflow:hidden; white-space:nowrap; text-overflow:
   * ellipsis; !important} </style> <table class="tb"> <tr> <td class="td"> Transaction Id </td> <td
   * class="td"> Batch Id </td> <td class="td"> BPAY Settlement Date </td> <td class="td"> Payment
   * Accepted DateTime </td> <td class="td"> Payment Type </td> <td class="td"> Payer Institution Code
   * </td> <td class="td"> Payer State </td> <td class="td"> Biller Code </td> <td class="td"> Customer
   * Reference Number </td> <td class="td"> Payment Method </td> <td class="td"> Amount </td> <td
   * class="td"> Transaction Reference Number </td> </tr> <tr> <td class="td"> <br/> <br/> Monoova
   * generated Unique ID.<br/> Integer.<br/> <br/> <br/> <br/> </td> <td class="td"> Payment Batch ID.
   * <br/> Payments come in batches <br/> throughout the day. <br/> Integer.<br/> </td> <td class="td">
   * AEDT, Sydney. <br/> Max 27 chars. </td> <td class="td"> AEDT, Sydney. <br/> Max 27 chars. </td> <td
   * class="td"> Possible values:&nbsp; <br/> 'Payment', 'Error Correction', 'Reversal'. </td> <td
   * class="td"> PayerInstitutionCode. <br/> Max 3 chars. </td> <td class="td"> PayerState <br/> Max 3
   * chars. </td> <td class="td"> BillerCode <br/> Max 10 chars. </td> <td class="td">
   * CustomerReferenceNumber  <br/> Max 20 chars. </td> <td class="td"> PaymentMethod <br/> Max 3 chars.
   * <br/> </td> <td class="td"> Amount, <br/> 2 decimal places <br/> for cents. Max 12 chars. </td> <td
   * class="td"> TransactionReferenceNumber. <br/> Max 21 chars. </td> </tr> </table>
   *
   * @param date Format:&nbsp; 'yyyy-MM-dd'. The date for which Monoova received the BPAY Receivable
   *                       transactions.
   * @param skip Number of records to skip. 1 is the first record.
   * @param take Number of records to take.
   * @return Response from the API call
   */
  async bPAYReceivablesReport(
    date: string,
    skip?: number,
    take?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      date: [date, string()],
      skip: [skip, optional(number())],
      take: [take, optional(number())],
    });
    req.query('skip', mapped.skip);
    req.query('take', mapped.take);
    req.appendTemplatePath`/bpay/v1/bpayInReport/${mapped.date}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * This API validates the BPAY Biller Code and optionally the BPAY Customer Reference Number and Amount.
   * For a complete BPAY validation the BPAY Biller Code, BPAY Customer Reference Number and Amount must
   * be supplied. When fully validated a BPAY financial transaction should be made as soon as practicable
   * as some BPAY combinations are date sensitive. BPAY validation uses the BPAY subsystem error codes.
   * <br/> Sample URL:&nbsp; https://api.mpay.com.au/bpay/v1/validate/{billerCode}?
   * custRef={CRN}&amount={amount}
   *
   * @param billerCode This is the BPAY biller code that was requested. billerCode must be numeric
   * @param custRef    BPAY Customer Reference Number. If this field is empty this denotes that the
   *                             customerReferenceNumber is variable for each bill and should not be reused.
   * @param amount     Bill amount to be validated. <strong> Note if CustRef is not provided, amount will
   *                             not validate as it is dependent on both the CRN and Biller. </strong> The maximum
   *                             value of the field is $9999999999.99.
   * @return Response from the API call
   */
  async bPAYValidate(
    billerCode: string,
    custRef?: string,
    amount?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOValidateBPAYResponseV1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      billerCode: [billerCode, string()],
      custRef: [custRef, optional(string())],
      amount: [amount, optional(number())],
    });
    req.query('custRef', mapped.custRef);
    req.query('amount', mapped.amount);
    req.appendTemplatePath`/bpay/v1/validate/${mapped.billerCode}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(dTOValidateBPAYResponseV1Schema, requestOptions);
  }

  /**
   * This API returns extended information for the BPAY biller. Status will be “UnknownBillerCode” if
   * Biller Code is invalid.
   *
   * @param billerCode This is the BPAY biller code that was requested. billerCode must be numeric
   * @return Response from the API call
   */
  async bPAYGetBiller(
    billerCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOBPAYBillerResponseV1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ billerCode: [billerCode, string()] });
    req.appendTemplatePath`/bpay/v1/biller/${mapped.billerCode}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(dTOBPAYBillerResponseV1Schema, requestOptions);
  }

  /**
   * This API returns the list of BPAY receipts. <br/> <strong> Note&#58;</strong>  Filters - One of the
   * below options should be provided by customer. <br/> 1) UniqueReference <br/> 2) Biller Code +
   * CustomerReferenceNumber + DateTime
   *
   * @return Response from the API call
   */
  async bPAYGetReceipts(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOBPAYReceiptResponseV1>> {
    const req = this.createRequest('GET', '/bpay/v1/receipts');
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(dTOBPAYReceiptResponseV1Schema, requestOptions);
  }

  /**
   * This API returns an array of BPAY billers matched to the case insensitive search string. The system
   * matches on the billerLongName and billerShortName. Use skip and take to page through result set.
   * Skip and take will be changed back to their defaults if they are over-range. Status will be
   * “UnknownBillerCode” if there are no matches.
   *
   * @param search The search string
   * @param skip   The actual number of records skipped.
   * @param take   The number of records that were requested.
   * @return Response from the API call
   */
  async bPAYGetBillers(
    search?: string,
    skip?: number,
    take?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOBPAYBillersResponseV1>> {
    const req = this.createRequest('GET', '/bpay/v1/billers');
    const mapped = req.prepareArgs({
      search: [search, optional(string())],
      skip: [skip, optional(number())],
      take: [take, optional(number())],
    });
    req.query('search', mapped.search);
    req.query('skip', mapped.skip);
    req.query('take', mapped.take);
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(dTOBPAYBillersResponseV1Schema, requestOptions);
  }

  /**
   * This API returns the mWallets history of BPAY payments. The returned history list is sorted by the
   * count property of the BPAYHistoryItem descending.
   *
   * @param accountNumber associated 'mWallet' 16 digit number
   * @param take          The number of records that were requested.
   * @return Response from the API call
   */
  async bPAYGetHistory(
    accountNumber: bigint,
    take?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DTOBPAYHistoryResponseV1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      accountNumber: [accountNumber, bigint()],
      take: [take, optional(number())],
    });
    req.query('take', mapped.take);
    req.appendTemplatePath`/bpay/v1/history/${mapped.accountNumber}`;
    req.throwOn(400, ApiError, 'Bad request');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(dTOBPAYHistoryResponseV1Schema, requestOptions);
  }
}
