import { DataFormat } from "@/lib/stoati/DataFormat";

export const getAllElements = (
  data: DataFormat[] | DataFormat,
  elementPath: string
) => {
  const splittedElementPath = elementPath.split("/");

  let element: DataFormat = data[0] ?? data;

  if (Array.isArray(data)) {
    element = data.find((item) => item.templateCode === splittedElementPath[0]);

    if (splittedElementPath.length === 1) {
      return data.filter(
        (item) => item.templateCode === splittedElementPath[0]
      );
    }
    splittedElementPath.shift();
  }

  while (splittedElementPath.length > 0) {
    if (splittedElementPath.length === 1) {
      return element.children.filter(
        (item) => item.templateCode === splittedElementPath[0]
      );
    }
    splittedElementPath.forEach((path) => {
      element = element.children.find((item) => item.templateCode === path);
    });
    splittedElementPath.shift();
  }
};
