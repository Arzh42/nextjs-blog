import Card from "@/app/galleries/[galleryIndex]/Card";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { DataFormat } from "@/lib/stoati/DataFormat";
import { getAllElements } from "@/lib/stoati/getAllElements";
import { getElement } from "@/lib/stoati/getElement";
import { getElementAssetData } from "@/lib/stoati/getElementTypedData";
import SimpleText from "@/lib/stoati/SimpleText";
import StyledText from "@/lib/stoati/StyledText";

const Gallery = ({ gallery }: { gallery: DataFormat }) => {
  const assets = getAllElements(gallery, "assetTitle");

  const cards = assets.map((element, index) => {
    const assetUrl = getElementAssetData(getElement(element, "asset#jdsp12"));

    return {
      id: element.id,

      content: (
        <div>
          <p className="font-bold text-4xl ">
            <SimpleText data={element} path="title#sxos23" />
          </p>
          <p className="font-normal text-base"></p>
          <p className="font-normal text-base my-4 max-w-lg ">
            <StyledText data={element} path="optionaltext#124sqd" />
          </p>
        </div>
      ),
      thumbnail: assetUrl,
      className: "col-span-1",
    };
  });

  return (
    <div className="max-w-screen-lg w-full">
      <h2 className="text-lg font-bold pl-8 pb-8">
        <SimpleText data={gallery} path="GalleryTitle#xia5yv" />
      </h2>
      <div
        className={`flex flex-col md:flex-row gap-2 p-2 flex-wrap justify-center`}
      >
        {cards.map((item) => {
          return (
            <Card
              url={item.thumbnail}
              content={item.content}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
