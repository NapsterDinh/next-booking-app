/// <reference types="react" />

import { ServiceIdType } from "@/types";
import { IPurchaseVolumeAddViewState } from "@PageComponents/order/document/purchase_volume_add/view/RoutePageStore";

export interface FooterPurchaseVolumeAddProps {
  page: ServiceIdType;
  viewState: IPurchaseVolumeAddViewState;
}

/**
 * FooterPurchaseVolumeAdd Component
 */
export declare const FooterPurchaseVolumeAdd: React.FC<FooterPurchaseVolumeAddProps>;
