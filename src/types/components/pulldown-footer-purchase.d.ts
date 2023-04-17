/// <reference types="react" />

import { TRole } from "@Service/UserInfoService";

export interface PulldownFooterPurchaseProps {
  authorities: number[];
  role: TRole;
  handleRefuse: () => void;
}

/**
 * PulldownFooterPurchase Component
 */
export declare const PulldownFooterPurchase: React.FC<PulldownFooterPurchaseProps>;
