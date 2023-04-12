/// <reference types="react" />

import { IOrderEditDocumentError } from "@/src/store/PurchaseOrderCreateInputStore";
import { IVolumePurchaseAddDocumentError } from "@/src/store/VolumePurchaseAddCreateInputStore";
import { IVolumeOrderEditDocumentError } from "@/src/store/VolumePurchaseOrderInputStore";

export interface EditContractRelationProps {
  name: string;
  label: string;
  require: boolean;
  component: (props: any) => JSX.Element;
  currentValue: string | Date | Number | boolean | null;
  handleInput: (value: never) => void | Promise<void>;
  size: TComponentSize;
  validationMessage?: string;
  hasError: boolean;
  documentError?: IOrderEditDocumentError | IVolumeOrderEditDocumentError | IVolumePurchaseAddDocumentError;
  errorEntries?: [{ key: string; message: string }];
  suffixComponent?: JSX.Element;
}

/**
 * EditContractRelation Component
 */
export declare const EditContractRelation: React.FC<EditContractRelationProps>;
