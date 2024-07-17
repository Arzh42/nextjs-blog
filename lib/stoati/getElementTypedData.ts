import { DataFormat } from "@/lib/stoati/DataFormat";
import {
  AssetComponentDefaultData,
  ComponentType,
  SimpleTextDefaultData,
  StyledTextDefaultData,
} from "@stoati/shared-types";

export const getElementSimpleTextData = (element: DataFormat) => {
  if (element.componentType === "SimpleText") {
    return SimpleTextDefaultData.parse(element.data.values);
  }

  throw new Error("The component type is not correct");
};

export const getElementStyledTextData = (element: DataFormat) => {
  if (element.componentType === "StyledText") {
    return StyledTextDefaultData.parse(element.data.values);
  }

  throw new Error("The component type is not correct");
};

export const getElementAssetData = (element: DataFormat) => {
  if (element.componentType === "Asset") {
    return AssetComponentDefaultData.parse(element.data.url);
  }

  throw new Error("The component type is not correct");
};
