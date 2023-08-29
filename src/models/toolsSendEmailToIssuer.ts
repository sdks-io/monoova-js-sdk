/**
 * Monoova Payments APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface ToolsSendEmailToIssuer {
  /** This is the emails subject. */
  subject: string;
  /** Set to true if the body contains HTML. */
  isBodyHtml?: boolean;
  /** Email body. Can be HTML or plain text. */
  body?: string;
}

export const toolsSendEmailToIssuerSchema: Schema<ToolsSendEmailToIssuer> = object(
  {
    subject: ['subject', string()],
    isBodyHtml: ['isBodyHtml', optional(boolean())],
    body: ['body', optional(string())],
  }
);