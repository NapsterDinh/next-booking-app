/** 法人格の位置タイプ */
export const LEGAL_PERSONALITY_POSITION_TYPE = {
  /** 社名の前 */ FRONT_OF_COMPANY_NAME: "1",
  /** 社名の後 */ BEHIND_THE_COMPANY_NAME: "2",
} as const;

/** 法人格の位置  */ export type TLegalPersonalityPosition =
  (typeof LEGAL_PERSONALITY_POSITION_TYPE)[keyof typeof LEGAL_PERSONALITY_POSITION_TYPE];

/** 法人格の位置エントリー */
export const LEGAL_PERSONALITY_POSITION_ENTRIES = [
  {
    value: LEGAL_PERSONALITY_POSITION_TYPE.FRONT_OF_COMPANY_NAME,
    label: "社名の前",
  },
  {
    value: LEGAL_PERSONALITY_POSITION_TYPE.BEHIND_THE_COMPANY_NAME,
    label: "社名の後",
  },
];

/** 法人格タイプ */
export const LEGAL_PERSONALITY_TYPE = {
  /** 株式会社 */ CORPORATION: "1",
  /** 有限会社 */ FINITE_COMPANY: "2",
  /** 合名会社 */ GENERAL_PARTNERSHIP: "3",
  /** 合資会社 */ LIMITED_PARTNERSHIP: "4",
  /** 合同会社 */ LIMITED_LIABILITY: "5",
  /** 個人事業主 */ SELF_EMPLOYED: "6",
  /** その他 */ OTHER_LEGAL_PERSONALITY: "7",
} as const;
/** 法人格 */ export type TLegalPersonality = (typeof LEGAL_PERSONALITY_TYPE)[keyof typeof LEGAL_PERSONALITY_TYPE];

/** 法人格エントリー*/
export const LEGAL_PERSONALITY_ENTRIES = [
  {
    value: LEGAL_PERSONALITY_TYPE.CORPORATION,
    label: "株式会社",
    labelKana: "カブシキガイシャ",
  },
  {
    value: LEGAL_PERSONALITY_TYPE.FINITE_COMPANY,
    label: "有限会社",
    labelKana: "ユウゲンガイシャ",
  },
  {
    value: LEGAL_PERSONALITY_TYPE.GENERAL_PARTNERSHIP,
    label: "合名会社",
    labelKana: "ゴウメイガイシャ",
  },
  {
    value: LEGAL_PERSONALITY_TYPE.LIMITED_LIABILITY,
    label: "合同会社",
    labelKana: "ゴウドウガイシャ",
  },
  {
    value: LEGAL_PERSONALITY_TYPE.LIMITED_PARTNERSHIP,
    label: "合資会社",
    labelKana: "ゴウシガイシャ",
  },
  {
    value: LEGAL_PERSONALITY_TYPE.SELF_EMPLOYED,
    label: "個人事業主",
    labelKana: "",
  },
  {
    value: LEGAL_PERSONALITY_TYPE.OTHER_LEGAL_PERSONALITY,
    label: "その他",
    labelKana: "",
  },
];

/** 招待状況種別 */
export const INVITATION_STATUS_TYPE = {
  /** 未招待 */ NOT_INVITED: 1,
  /** 招待済 */ INVITED: 2,
};
/** 招待状況種別エントリー */
export const INVITATION_STATUS_TYPE_ENTRIES = [
  INVITATION_STATUS_TYPE.NOT_INVITED,
  INVITATION_STATUS_TYPE.INVITED,
] as const;

/** 招待状況種別 1:未招待 2:招待済 */
export type TInvitationStatusType =
  (typeof INVITATION_STATUS_TYPE_ENTRIES)[keyof typeof INVITATION_STATUS_TYPE_ENTRIES];

/** 招待状況種別MAP */
export const INVITATION_STATUS_MAP: ReadonlyMap<TInvitationStatusType, { label: string }> = new Map([
  [INVITATION_STATUS_TYPE.NOT_INVITED, { label: "未招待" }],
  [INVITATION_STATUS_TYPE.INVITED, { label: "招待済み" }],
]);
/** 担当者フィルター種別エントリー*/
export const INVITATION_STATUS_OPTIONS = [
  {
    value: INVITATION_STATUS_TYPE.NOT_INVITED,
    label: "未招待",
  },
  {
    value: INVITATION_STATUS_TYPE.INVITED,
    label: "招待済み",
  },
];

/** 招待承認種別 */
export const INVITATION_APPROVAL_TYPE = {
  /** 承認待ち */ UNAPPROVED: 1,
  /** 承認済み */ APPROVED: 2,
  /** 否認 */ DISAPPROVED: 3,
};
/** 招待承認種別エントリー */
export const INVITATION_APPROVAL_TYPE_ENTRIES = [
  INVITATION_APPROVAL_TYPE.UNAPPROVED,
  INVITATION_APPROVAL_TYPE.APPROVED,
  INVITATION_APPROVAL_TYPE.DISAPPROVED,
] as const;

/** 招待承認種別 1:未承認 2:承認 3:否認 */
export type TInvitationApprovalType =
  (typeof INVITATION_APPROVAL_TYPE_ENTRIES)[keyof typeof INVITATION_APPROVAL_TYPE_ENTRIES];

/** 担当者フィルター種別 １（自分）、２（すべて）*/
export const EMPLOYEE_FILTER_TYPE = {
  /** すべて */ ALL: 2,
  /** 自分 */ ONLY_SELF: 1,
} as const;
/** 担当者フィルター種別エントリー*/
export const EMPLOYEE_FILTER_ENTRIES = [
  {
    value: EMPLOYEE_FILTER_TYPE.ALL,
    label: "すべて",
  },
  {
    value: EMPLOYEE_FILTER_TYPE.ONLY_SELF,
    label: "自分のみ",
  },
];
/** 担当者フィルター種別 １（自分）、２（すべて） */
export type TUserAccountFilterType = (typeof EMPLOYEE_FILTER_TYPE)[keyof typeof EMPLOYEE_FILTER_TYPE];

/** 招待対象サービス */
export const SERVICE_TYPE = {
  /** 請求書（B→S） */ WI_B2S: 1,
  /** 請求書（S→B） */ WI_S2B: 2,
  /** 契約書 */ CONTRACT: 3,
  /** 見積書 */ QUO: 4,
  /** TRADE */ TRADE_B2S: 5,
} as const;
/** 招待対象サービス */ export type TServiceType = (typeof SERVICE_TYPE)[keyof typeof SERVICE_TYPE];
/** 招待対象サービスラベル */
export const SERVICE_TYPE_LABEL_MAP: ReadonlyMap<TServiceType, string> = new Map([
  [SERVICE_TYPE.WI_B2S, "請求書"],
  [SERVICE_TYPE.WI_S2B, "請求書"],
  [SERVICE_TYPE.CONTRACT, "契約書"],
  [SERVICE_TYPE.QUO, "見積書"],
  [SERVICE_TYPE.TRADE_B2S, "TRADE"],
]);

/** 表示非表示フィルター種別 １（表示のみ）、２（すべて）*/
export const DISPLAY_FILTER_TYPE = {
  /** 表示のみ */ DISPLAY: 1,
  /** すべて */ ALL: 2,
} as const;
/** 表示非表示フィルター種別エントリー*/
export const DISPLAY_FILTER_ENTRIES = [
  {
    value: DISPLAY_FILTER_TYPE.DISPLAY,
    label: "表示のみ",
  },
  {
    value: DISPLAY_FILTER_TYPE.ALL,
    label: "すべて",
  },
];
/** 担当者フィルター種別 １（自分）、２（すべて） */
export type TDisplayFilterType = (typeof DISPLAY_FILTER_TYPE)[keyof typeof DISPLAY_FILTER_TYPE];
