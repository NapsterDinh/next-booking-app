/// <reference types="react" />

import { ServiceIdType } from "@/types";

export interface UseDownloadPDFProps {
  page: ServiceIdType;
  documentId: number;
  individualTradeRequestApprovalNumber: string;
  connectFilePrintFlg: boolean;
}

export interface ReturnUseDownloadPDF {
  handleDownloadPDF: () => Promise<void>;
}

/**
 * useDownloadPDF Component
 */
export declare const useDownloadPDF: (props: UseDownloadPDFProps) => ReturnUseDownloadPDF;
