/// <reference types="react" />

import { TDocumentStatus } from "@Service/values/Document";

/**
 * Utility function to create a { K: V } from string[]
 * ユニオン型の文字列リテラルを使用して文字列ベースの列挙型を模倣
 */
export const StringsToEnum = <T extends string>(array: Array<T>): { [K in T]: K } => {
  return array.reduce((prev, current) => {
    prev[current] = current;
    return prev;
  }, Object.create(null));
};

/**
 * ORDER:               発注書
 * PURCHASE_VOLUME:     出来高発注書
 * PURCHASE_VOLUME_ADD: 出来高追加発注書
 * STATEMENT_MODIFY:    明細数量訂正書 ＊対応スコープ外
 */
const services = ["ORDER", "PURCHASE_VOLUME", "PURCHASE_VOLUME_ADD", "STATEMENT_MODIFY"];

const ServicesId = StringsToEnum(services);

/** サービス ID タイプの型生成 - ユニオン型 */
export type ServiceIdType = keyof typeof ServicesId;

export interface LinkToWorkflowProps {
  /** 文書状態種別タイプ */
  documentStatus: TDocumentStatus;
  /** サービス ID タイプ */
  serviceIdType: ServiceIdType;
  /** 文書識別子 */
  documentId: number;
  /** 申請番号 */
  workflowApplyNo: string | null;
}

/**
 * LinkToWorkflow Element
 */
export declare const LinkToWorkflow: React.FC<LinkToWorkflowProps>;
