import { DataFormat } from "@/lib/stoati/DataFormat";

export const getElement = (
  data: DataFormat[] | DataFormat,
  elementPath: string
) => {
  const splittedElementPath = elementPath.split("/");

  let element: DataFormat = data[0] ?? data;

  if (Array.isArray(data)) {
    element = data.find((item) => item.templateCode === splittedElementPath[0]);
    splittedElementPath.shift();
  }

  while (splittedElementPath.length > 0) {
    element = element.children.find(
      (item) => item.templateCode === splittedElementPath[0]
    );

    if (!element) {
      throw new Error(
        "Element not found please check the path " +
          elementPath +
          " for " +
          JSON.stringify(data)
      );
    }

    splittedElementPath.shift();
  }

  return element;
};
