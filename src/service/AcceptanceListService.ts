export const test = { a: "a" };
// import { WorkflowStateId } from '@Service/values/WorkflowState'
// import DateUtil from '@Utils/DateUtil'
// import { ITableResponse } from './const'
// import FetchClient from './FetchClient'
// import { BASE_URL } from './values/ApiUrl'
// import { CLIENT_TYPE, IClientTypeValue } from './values/ClientType'
// import { TBusinessDocumentType, TDocumentStatus } from './values/Document'
// import { TIndividualTradeType } from './values/IndividualTrade'
// import { TAcceptanceModifyStatusTypeId, TAcceptanceStatusTypeId } from './values/OrderOverviewStatus'

// /**
//  * 検収書一覧
//  */
// export interface IAcceptanceList extends ITableResponse<IAcceptanceListItem> {
//   items: IAcceptanceListItem[]
//   currentPage: number
//   count: number
// }

// /**
//  * 検収書一覧の1件
//  */
// export interface IAcceptanceListItem {
//   /** 個別取引識別子 */ individualTradeId: number
//   /** 個別取引申請番号（発注番号） */ individualTradeRequestApprovalNumber: string
//   /** 件名 */ title: string
//   /** 取引先担当者姓 */ customerPersonLastName: string
//   /** 取引先担当者名 */ customerPersonFirstName: string
//   /** 自社担当者姓 */ ownEmployeePersonLastName: string
//   /** 自社担当者名 */ ownEmployeePersonFirstName: string
//   /** 税込金額 */ taxIncludedAmount: number
//   /** 取引先企業名 */ customerCompanyName: string
//   /** 文書識別子 */ documentId: number
//   /** 文書申請番号 */ documentRequestApprovalNumber: string
//   /** 業務文書種別 */ documentType: TBusinessDocumentType
//   /** 文書ステータス */ documentStatus: TDocumentStatus
//   /** 検収状態種別 */ acceptanceStatusType: TAcceptanceStatusTypeId
//   /** 検収変更状態 */ acceptanceModifyStatusType: TAcceptanceModifyStatusTypeId
//   /** ワークフロー状態 */ workflowState: WorkflowStateId
//   /** 申請番号 */ workflowApplyNo: string | null
//   /** 検収日 */ acceptanceDate: Date | null
//   /** 個別取引区分 */ individualTradeType: TIndividualTradeType
//   /** 作成日時 */ documentCreateDateTime: Date
// }

// /** 検収書一覧のAPIレスポンス  */
// interface IApiAcceptanceList {
//   /** 個別取引識別子 */ individualTradeId: number
//   /** 個別取引申請番号 */ individualTradeRequestApprovalNumber: string
//   /** 件名 */ title: string
//   /** 取引先担当者姓 */ customerPersonFirstName: string
//   /** 取引先担当者名 */ customerPersonLastName: string
//   /** 自社担当者姓 */ ownEmployeePersonFirstName: string
//   /** 自社担当者名 */ ownEmployeePersonLastName: string
//   /** 税込金額 */ taxIncludedAmount: number
//   /** 取引先企業名 */ customerCompanyName: string
//   /** 文書識別子 */ documentId: number
//   /** 文書申請番号 */ documentRequestApprovalNumber: string
//   /** 業務文書種別 */ documentType: TBusinessDocumentType
//   /** 文書ステータス */ documentStatus: TDocumentStatus
//   /** 検収状態種別 */ acceptanceStatusType: TAcceptanceStatusTypeId
//   /** 検収変更状態 */ acceptanceModifyStatusType: TAcceptanceModifyStatusTypeId
//   /** ワークフロー状態 */ workflowState: WorkflowStateId
//   /** 申請番号 */ workflowApplyNo: string | null
//   /** 検収日 */ acceptanceDate: string | null
//   /** 個別取引区分 */ individualTradeType: number
//   /** 作成日時 */ documentCreateDateTime: string
// }

// /** 検収書一覧APIのURLエントリー */
// const ORDER_DOCUMENT_LIST_BASE_URL_ENTRIES = {
//   /** 買い手 */ [CLIENT_TYPE.ISSUE]: BASE_URL.DOCUMENT_ACCEPTANCE_BUYER,
//   /** 売り手 */ [CLIENT_TYPE.ACCEPT]: BASE_URL.DOCUMENT_ACCEPTANCE_SELLER,
// } as const

// /** 検収書一覧CSV出力APIのURLエントリー */
// const ORDER_DOCUMENT_LIST_CSV_BASE_URL_ENTRIES = {
//   /** 買い手 */ [CLIENT_TYPE.ISSUE]: BASE_URL.DOCUMENT_ACCEPTANCE_BUYER_CSV,
//   /** 売り手 */ [CLIENT_TYPE.ACCEPT]: BASE_URL.DOCUMENT_ACCEPTANCE_SELLER_CSV,
// } as const

// /**
//  * 検収書検索
//  */
// export interface ISearchAcceptanceList {
//   /** 次表示したいページ数 */ page?: number
//   /** キーワード */ keyword: string
//   /** 発注管理コード*/ companyManagementCode: string
//   /** 業務文書種別 */ documentType: string[]
//   /** 文書ステータス */ documentStatus: string[]
//   /** 検収状態種別 */ acceptanceStatusType: string[]
//   /** 検収変更状態 */ acceptanceModifyStatusType: string[]
//   /** 検収日開始日*/ minAcceptanceDate: Date | null
//   /** 検収日終了日*/ maxAcceptanceDate: Date | null
//   /** 合計金額最小値*/ minTaxIncludedAmount: number | null
//   /** 合計金額最大値*/ maxTaxIncludedAmount: number | null
//   /** 件名*/ title: string
//   /** 取引先名*/ customerCompanyName: string
//   /** 取引先担当者名*/ customerPersonName: string
//   /** 自社担当者名*/ ownEmployeePersonName: string
//   /** 個別取引申請番号（発注番号） */ individualTradeRequestApprovalNumber: string
//   /** 文書申請番号 */ documentRequestApprovalNumber: string
// }

// /**
//  * 検収書一覧サービス
//  */
// class AcceptanceListService {
//   /**
//    * 検収書一覧検索
//    */
//   static find = async ({
//     clientType,
//     searchCriteria,
//     context,
//   }: {
//     clientType: IClientTypeValue
//     searchCriteria?: ISearchAcceptanceList
//     /** CSRで呼ばれる場合はundefinedになる */ context?: any
//   }): Promise<IAcceptanceList> => {
//     const baseUrl = ORDER_DOCUMENT_LIST_BASE_URL_ENTRIES[clientType.get()]
//     const url = AcceptanceListService.createURL(baseUrl, searchCriteria)
//     const { items, count } = await FetchClient.get({ url, context })
//     return {
//       items: AcceptanceListService.converter(items),
//       currentPage: searchCriteria?.page ? searchCriteria.page : 1,
//       count,
//     }
//   }

//   /**
//    * 検収書一覧CSV出力
//    */
//   static async downloadCSV(clientType: IClientTypeValue, searchCriteria?: ISearchAcceptanceList): Promise<Blob> {
//     const baseUrl = ORDER_DOCUMENT_LIST_CSV_BASE_URL_ENTRIES[clientType.get()]
//     const url = AcceptanceListService.createURL(baseUrl, searchCriteria)
//     const value: Blob = await FetchClient.getFiles({ url })
//     return value
//   }

//   /**
//    * URLを作成します
//    * @param baseUrl
//    * @param searchCriteria
//    */
//   static createURL(baseUrl: string, searchCriteria?: ISearchAcceptanceList) {
//     const queryParam = searchCriteria ? createQueryParameters(searchCriteria) : ''

//     return `${baseUrl}${queryParam}`
//   }

//   /**
//    * API戻り値用のconverter
//    * @param items
//    */
//   static converter(items: IApiAcceptanceList[]): IAcceptanceListItem[] {
//     return items.map((item): IAcceptanceListItem => {
//       return {
//         ...item,
//         /** 作成日時 */ documentCreateDateTime: new Date(item.documentCreateDateTime),
//         /** 検収日 */ acceptanceDate: item.acceptanceDate ? new Date(item.acceptanceDate) : null,
//         /** 個別取引区分 */ individualTradeType: String(item.individualTradeType) as TIndividualTradeType,
//       }
//     })
//   }

//   /**
//    * json用converter
//    * initialize時： API戻り値→converter→JSON化→JSON.parse→jsonConverter
//    */
//   static jsonConverter(items: any[]): IAcceptanceListItem[] {
//     return items.map((item) => ({
//       ...item,
//       /** 作成日時 */ documentCreateDateTime: new Date(item.documentCreateDateTime),
//       /** 検収日 */ acceptanceDate: item.acceptanceDate ? new Date(item.acceptanceDate) : null,
//     }))
//   }
// }
// export default AcceptanceListService

// const createQueryParameters = (searchCriteria: ISearchAcceptanceList) => {
//   const params: string[] = []

//   /** ページ */
//   if (searchCriteria.page) {
//     params.push(`page=${searchCriteria.page}`)
//   }

//   /** キーワード */
//   if (searchCriteria.keyword) {
//     params.push(`keyword=${searchCriteria.keyword}`)
//   }

//   /** 業務文書種別,カンマ区切りで複数件リクエスト可 */
//   if (searchCriteria.documentType.length !== 0) {
//     params.push(`documentType=${searchCriteria.documentType.join()}`)
//   }

//   /** 文書状態種別,カンマ区切りで複数件リクエスト可 */
//   if (searchCriteria.documentStatus.length !== 0) {
//     params.push(`documentStatus=${searchCriteria.documentStatus.join()}`)
//   }

//   /** 検収状態種別,カンマ区切りで複数件リクエスト可 */
//   if (searchCriteria.acceptanceStatusType.length !== 0) {
//     params.push(`acceptanceStatusType=${searchCriteria.acceptanceStatusType.join()}`)
//   }

//   /** 検収変更状態,カンマ区切りで複数件リクエスト可 */
//   if (searchCriteria.acceptanceModifyStatusType.length !== 0) {
//     params.push(`acceptanceModifyStatusType=${searchCriteria.acceptanceModifyStatusType.join()}`)
//   }

//   /** 検収日開始日 */
//   if (searchCriteria.minAcceptanceDate) {
//     params.push(`minAcceptanceDate=${DateUtil.toDateString(searchCriteria.minAcceptanceDate)}`)
//   }

//   /** 検収日終了日 */
//   if (searchCriteria.maxAcceptanceDate) {
//     params.push(`maxAcceptanceDate=${DateUtil.toDateString(searchCriteria.maxAcceptanceDate)}`)
//   }

//   /** 合計金額最小値 */
//   if (searchCriteria.minTaxIncludedAmount) {
//     params.push(`minTaxIncludedAmount=${searchCriteria.minTaxIncludedAmount}`)
//   }

//   /** 合計金額最大値 */
//   if (searchCriteria.maxTaxIncludedAmount) {
//     params.push(`maxTaxIncludedAmount=${searchCriteria.maxTaxIncludedAmount}`)
//   }

//   /** 件名 */
//   if (searchCriteria.title) {
//     params.push(`title=${searchCriteria.title}`)
//   }

//   /** 取引先名 */
//   if (searchCriteria.customerCompanyName) {
//     params.push(`customerCompanyName=${searchCriteria.customerCompanyName}`)
//   }

//   /** 取引先担当者名 */
//   if (searchCriteria.customerPersonName) {
//     params.push(`customerPersonName=${searchCriteria.customerPersonName}`)
//   }

//   /** 自社担当者名 */
//   if (searchCriteria.ownEmployeePersonName) {
//     params.push(`ownEmployeePersonName=${searchCriteria.ownEmployeePersonName}`)
//   }

//   /** 個別取引申請番号（発注番号） */
//   if (searchCriteria.individualTradeRequestApprovalNumber) {
//     params.push(`individualTradeRequestApprovalNumber=${searchCriteria.individualTradeRequestApprovalNumber}`)
//   }

//   /** 文書申請番号 */
//   if (searchCriteria.documentRequestApprovalNumber) {
//     params.push(`documentRequestApprovalNumber=${searchCriteria.documentRequestApprovalNumber}`)
//   }

//   const paramString = params.join('&')
//   return paramString ? `?${encodeURI(paramString)}` : ''
// }
