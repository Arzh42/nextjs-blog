import data from "@/app/data";
import Card from "@/app/galleries/[galleryIndex]/Card";
import Gallery from "@/app/galleries/[galleryIndex]/Gallery";
import { dataFormat } from "@/lib/stoati/DataFormat";
import { getAllElements } from "@/lib/stoati/getAllElements";
import getData from "@/lib/stoati/getData";

export async function generateStaticParams() {
  const data = await getData();
  const galleries = getAllElements(data, "gallerie");

  return galleries.map((i, index) => ({
    galleryIndex: "" + index,
  }));
}

const Galleries = async ({ params }: { params: { galleryIndex: number } }) => {
  const data = await getData();
  const galleries = getAllElements(data, "gallerie");

  const gallery = galleries[params.galleryIndex];

  return (
    <div className="flex flex-col items-center pt-20 min-h-screen justify-center">
      <Gallery gallery={gallery} />
    </div>
  );
};

export default Galleries;
