/** 受発注タイプ文字列 */
export const CLIENT_TYPE = {
  ISSUE: "issue",
  ACCEPT: "accept",
} as const;
/** 受発注タイプ文字列型 */
export type TClientType = (typeof CLIENT_TYPE)[keyof typeof CLIENT_TYPE];

/** 受発注タイプ */
export interface IClientTypeValue {
  /**
   * 受発注タイプの文字列を返します
   * @return {TClientType}  "issue" | "accept"
   */ get: () => TClientType;
  /** 発注か */ isIssue: () => boolean;
  /** 受注か */ isAccept: () => boolean;
}

/** 受発注タイプ */
export class ClientType implements IClientTypeValue {
  /** 受発注タイプ(発注:true , 受注:false) */ value: boolean;

  constructor(/** 受発注タイプ(発注:true , 受注:false) */ isIssue: boolean) {
    this.value = isIssue;
  }

  /**
   * 受発注タイプの文字列を返します
   * @return {TClientType}  "issue" | "accept"
   */
  get(): TClientType {
    return this.value ? CLIENT_TYPE.ISSUE : CLIENT_TYPE.ACCEPT;
  }

  /** 発注か */
  isIssue(): boolean {
    return this.value === true;
  }
  /** 受注か */
  isAccept(): boolean {
    return this.value === false;
  }
}

/** 受発注タイプインスタンス：発注 */
export const ISSUE_CLIENT = new ClientType(true);
/** 受発注タイプインスタンス：受注 */
export const ACCEPT_CLIENT = new ClientType(false);
