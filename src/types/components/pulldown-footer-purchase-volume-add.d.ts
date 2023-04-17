/// <reference types="react" />

import { TRole } from "@Service/UserInfoService";

export interface PulldownFooterPurchaseVolumeAddProps {
  authorities: number[];
  role: TRole;
  handleDeclinature: () => void;
}

/**
 * PulldownFooterPurchaseVolumeAdd Component
 */
export declare const PulldownFooterPurchaseVolumeAdd: React.FC<PulldownFooterPurchaseVolumeAddProps>;
