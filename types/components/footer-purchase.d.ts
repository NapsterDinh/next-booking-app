/// <reference types="react" />

import { ServiceIdType } from "@/types";
import { IPurchaseOrderViewState } from "@PageComponents/order/document/purchase/estimate_each_time/view/RoutePageStore";
import { IVolumePurchaseViewState } from "@PageComponents/order/document/purchase/volume/view/RoutePageStore";
import { IPurchaseVolumeAddViewState } from "@PageComponents/order/document/purchase_volume_add/view/RoutePageStore";

export interface FooterPurchaseProps {
  page: ServiceIdType;
  viewState: IPurchaseOrderViewState | IVolumePurchaseViewState | IPurchaseVolumeAddViewState;
}

/**
 * FooterPurchase Component
 */
export declare const FooterPurchase: React.FC<FooterPurchaseProps>;
