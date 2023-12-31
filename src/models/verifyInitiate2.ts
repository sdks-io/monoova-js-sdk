/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { CreditMethodEnum, creditMethodEnumSchema } from './creditMethodEnum';
import { PayIdTypeEnum, payIdTypeEnumSchema } from './payIdTypeEnum';

export interface VerifyInitiate2 {
  /** Credit method. Possible values:&nbsp; 'NppCreditBankAccount' or 'NppCreditPayId' */
  creditMethod: CreditMethodEnum;
  /** BSB number of associated bank account. BSB format is ‘000-000’. `When creditMethod is 'NppCreditBankAccount' this field is required` */
  bsb?: string;
  /** Bank account number of associated bank account. `When creditMethod is 'NppCreditBankAccount' this field is required` */
  bankAccountNumber?: number;
  /** Bank account title or name of associated bank account. */
  accountName: string;
  /** More details at <a href="/payments#tag/Verify"> Verify </a> section. */
  remitter?: string;
  /** PayId Type. Possible values:&nbsp; ABN, Email, PhoneNumber, OrganisationId, ACN `When creditMethod is 'NppCreditPayId' this field is required` */
  payIdType?: PayIdTypeEnum;
  /** PayId Identifier of the Payee. `When creditMethod is 'NppCreditPayId' this field is required` */
  payId?: string;
  /** A description supplied by the VerificationSigninMerchant to distinguish this entry from others in a listing. This could be an encoded string from the signon merchant. */
  verificationIdentifier: string;
}

export const verifyInitiate2Schema: Schema<VerifyInitiate2> = object({
  creditMethod: ['creditMethod', creditMethodEnumSchema],
  bsb: ['bsb', optional(string())],
  bankAccountNumber: ['bankAccountNumber', optional(number())],
  accountName: ['accountName', string()],
  remitter: ['remitter', optional(string())],
  payIdType: ['payIdType', optional(payIdTypeEnumSchema)],
  payId: ['payId', optional(string())],
  verificationIdentifier: ['verificationIdentifier', string()],
});
