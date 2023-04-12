import { TRole } from "@Service/UserInfoService";

/** 権限許可タイプ */ export const PERMISSION_TYPE = {
  /** 契約書作成 */ CONTRACT_CREATING: 36,
  /** 取引先管理 */ CLIENT_MANAGEMENT: 80,
  /** 発注書作成 */ PURCHASE_ORDER_CREATING: 84,
  /** テンプレート管理 */ TEMPLATE_MANAGEMENT: 85,
  /** 発注取引管理 */ ORDER_ISSUE_TRADING_MANAGEMENT: 83,
  /** 受注取引管理 */ ORDER_ACCEPT_TRADING_MANAGEMENT: 87,
  /** 出来高発注 */ VOLUME_PURCHASE: 91,
  /** 契約書付加 */ CONTRACT_ATTACH: 97,
  /** 契約書除去 */ CONTRACT_DETACH: 98,
} as const;
/** 権限許可タイプ */ export type TPermission = (typeof PERMISSION_TYPE)[keyof typeof PERMISSION_TYPE];

/** ロール種類 */ const ROLE_TYPE = {
  /** 自社担当者 */ OWNER: "isOwnCompanyPerson",
  /** 参照者 */ REFERRER: "isReferrer",
  /** 編集者 */ EDITOR: "isEditor",
};
/** ロール種類 */ type TRoleName = (typeof ROLE_TYPE)[keyof typeof ROLE_TYPE];

/** ボタン操作権限許可タイプ */ export const BUTTON_PERMISSION_TYPE: {
  [key: string]: {
    authorities: TPermission[];
    roles: TRoleName[];
  };
} = {
  /** 発注書作成 */ PURCHASE_ORDER_CREATING: {
    authorities: [PERMISSION_TYPE.PURCHASE_ORDER_CREATING],
    roles: [],
  },
  /** 発注取引管理_編集 */ ORDER_ISSUE_EDIT: {
    authorities: [PERMISSION_TYPE.ORDER_ISSUE_TRADING_MANAGEMENT],
    roles: [ROLE_TYPE.OWNER, ROLE_TYPE.EDITOR],
  },
  /** 受注取引管理_編集 */ ORDER_ACCEPT_EDIT: {
    authorities: [PERMISSION_TYPE.ORDER_ACCEPT_TRADING_MANAGEMENT],
    roles: [ROLE_TYPE.OWNER, ROLE_TYPE.EDITOR],
  },
  /** 契約書付加 */ CONTRACT_ATTACH: {
    authorities: [PERMISSION_TYPE.CONTRACT_ATTACH],
    roles: [],
  },
  /** 契約書除去 */ CONTRACT_DETACH: {
    authorities: [PERMISSION_TYPE.CONTRACT_DETACH],
    roles: [],
  },
};
/** ボタン操作権限許可タイプ */ export type TButtonPermission =
  (typeof BUTTON_PERMISSION_TYPE)[keyof typeof BUTTON_PERMISSION_TYPE];

/**
 * 画面遷移を認可するか
 * @returns {boolean} 認可するときtrue
 */
const navigationAllows = ({
  authorities,
  permissionType,
}: {
  /** 権限番号一覧 */ authorities: number[];
  /** 権限許可タイプ */ permissionType: TPermission;
}): boolean => {
  return authorities.some((authority) => authority === permissionType);
};

/**
 * ボタン操作を認可しないか
 * @returns {boolean} 認可しないときtrue
 */
const buttonDisallow = ({
  authorities,
  role,
  permissionType,
}: {
  /** 権限番号一覧 */ authorities: number[];
  /** ロール一覧 */ role: TRole;
  /** ボタン操作権限許可タイプ */ permissionType: TButtonPermission;
}) => {
  // 権限取得できていないときは認可しない
  if (!authorities || !role) {
    return true;
  }

  // 権限番号に一致するものがあれば認可する
  if (permissionType.authorities.some((allowType) => authorities.some((authority) => authority === allowType))) {
    return false;
  }

  // ロールに一致するものがあれば認可する
  if (permissionType.roles.some((allowType) => role[allowType])) {
    return false;
  }

  return true;
};

/** 権限Util */
export default { navigationAllows, buttonDisallow };
