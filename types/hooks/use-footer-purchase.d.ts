// / <reference types="react" />

import { ServiceIdType } from "@/types";
import { IPurchaseOrderViewState } from "@PageComponents/order/document/purchase/estimate_each_time/view/RoutePageStore";
import { IVolumePurchaseViewState } from "@PageComponents/order/document/purchase/volume/view/RoutePageStore";

export interface UseFooterPurchaseProps {
  page: ServiceIdType;
  viewState: IPurchaseOrderViewState | IVolumePurchaseViewState;
}

export interface ReturnUseFooterPurchase {
  showModal: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: ModalContentProps | null;
  visibleDialog: boolean;
  toggleDialog: React.Dispatch<React.SetStateAction<boolean>>;
  dialogContent: DialogContentProps | null;
  handleRefuse: () => void;
  handleSendBack: () => void;
  handleConfirmed: () => void;
  handleInvoice: () => void;
  handleCopy: () => Promise<void>;
  handleModify: () => void;
  handleSubmitOpenDialog: () => void;
  isPulldown: boolean;
  canSendBack: boolean;
  canConfirmed: boolean;
  canInvoice: boolean;
  canCopy: boolean;
  canModify: boolean;
  canSubmit: boolean;
}

export interface ModalContentProps {
  label: string;
  toastMessage: string;
  sendFunction: (reason: string) => Promise<void>;
}

export interface DialogContentProps {
  message: string;
  subMessage: string;
  isWarning?: boolean;
  sendFunction: () => Promise<void>;
}

/**
 * useFooterPurchase Component
 */
export declare const useFooterPurchase: (props: UseFooterPurchaseProps) => ReturnUseFooterPurchase;
