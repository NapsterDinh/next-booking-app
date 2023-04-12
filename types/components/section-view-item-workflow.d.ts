/// <reference types="react" />

import { LinkToWorkflowProps } from "@/types";
import { TDocumentStatus } from "@Service/values/Document";

export type SectionViewItemWorkflowProps = LinkToWorkflowProps & {
  autoSendDocumentAfterApprove: 0 | 1 | null;
  /** 文書状態種別タイプ */
  documentStatus: TDocumentStatus;
};

/**
 * SectionViewItemWorkflow Component
 */
export declare const SectionViewItemWorkflow: React.FC<SectionViewItemWorkflowProps>;
