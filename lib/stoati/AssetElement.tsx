import { DataFormat } from "@/lib/stoati/DataFormat";
import { getElement } from "@/lib/stoati/getElement";
import { getElementAssetData } from "@/lib/stoati/getElementTypedData";

const AssetElement = ({
  data,
  path,
}: {
  data: DataFormat[] | DataFormat;
  path: string;
}) => {
  const element = getElement(data, path);

  const elementData = getElementAssetData(element);

  return <img src={elementData} />;
};

export default AssetElement;
