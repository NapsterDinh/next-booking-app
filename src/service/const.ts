/** ページング対象のレスポンス */
export interface ITableResponse<T> {
  /**  一覧の値 最大20件 */ items: T[];
  /** 現在のページ数 */ currentPage: number;
  /** 一覧の件数 */ count: number;
}

/** ファイル保存用ID */ export type TFileId = string;
/** ファイル */ export type TFile = {
  file: File;
};

/** アップロード対象ファイル */
export interface IUploadFile extends TFile {
  /** ファイル保存用ID */ id?: TFileId;
  /** ファイルデータ */ file: TFile["file"];
  /** アップデート日時 */ updateDate: Date;
}
/** ダウンロード対象ファイル */
export interface IDownloadFile {
  /** ファイル取得用ID */ id: TFileId;
  /** ファイル名 */ name: string;
  /** アップデート日時 */ updateDate: Date;
  /** 添付企業名 */ companyName: string;
  /** 添付者姓 */ lastName: string;
  /** 添付者名 */ firstName: string;
}

/** 連結(約款)ファイル */
export interface IClauseFile {
  /** ファイルID */ fileId?: number;
  /** データストアID */ dataStoreId?: string;
  /** ドキュメントID */ documentId?: number;
  /** ファイル名 */ name: string;
  /** ファイルサイズ */ size: number;
  /** ファイルデータ */ file?: File;
  /** ソート番号 */ sortNo?: number;
}
