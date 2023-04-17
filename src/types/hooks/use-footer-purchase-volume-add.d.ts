/// <reference types="react" />

import { TModalStatusType } from "@/src/components";
import { IPurchaseVolumeAddViewState } from "@PageComponents/order/document/purchase_volume_add/view/RoutePageStore";

export interface UseFooterPurchaseVolumeAddProps {
  viewState: IPurchaseVolumeAddViewState;
}

export interface ReturnUseFooterPurchaseVolumeAdd {
  modalStatus: TModalStatusType;
  changeModalStatus: React.Dispatch<React.SetStateAction<TModalStatusType>>;
  modalContent: {
    completeMessage: string;
    handle: (reason: string) => Promise<void>;
  } | null;
  visibleDialog: boolean;
  toggleDialog: React.Dispatch<React.SetStateAction<boolean>>;
  dialogContent: DialogContentProps | null;
  handleDeclinature: () => void;
  handleSendBack: () => void;
  handleConfirmed: () => void;
  handleModify: () => void;
  handleSubmitOpenDialog: () => void;
  isPulldown: boolean;
  canSendBack: boolean;
  canConfirmed: boolean;
  canModify: boolean;
  canSubmit: boolean;
}

export interface DialogContentProps {
  message: string;
  subMessage: string;
  isWarning?: boolean;
  sendFunction: () => Promise<void>;
}

/**
 * useFooterPurchaseVolumeAdd Component
 */
export declare const useFooterPurchaseVolumeAdd: (
  props: UseFooterPurchaseVolumeAddProps,
) => ReturnUseFooterPurchaseVolumeAdd;
