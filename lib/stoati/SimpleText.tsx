import { DataFormat } from "@/lib/stoati/DataFormat";
import { getElement } from "@/lib/stoati/getElement";
import { getElementSimpleTextData } from "@/lib/stoati/getElementTypedData";

const SimpleText = ({
  data,
  path,
}: {
  data: DataFormat[] | DataFormat;
  path: string;
}) => {
  const element = getElement(data, path);

  const elementData = getElementSimpleTextData(element);

  return elementData["fr-FR"];
};

export default SimpleText;
