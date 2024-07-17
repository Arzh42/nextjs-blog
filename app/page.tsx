import getData from "@/lib/stoati/getData";
import { getElement } from "@/lib/stoati/getElement";
import {
  getElementSimpleTextData,
  getElementStyledTextData,
} from "@/lib/stoati/getElementTypedData";
import StyledText from "@/lib/stoati/StyledText";

export default async function Home() {
  const data = await getData();

  const title = getElement(data, "titleDescription/title#dosk89");

  const titleData = getElementSimpleTextData(title);

  const splittedTitle = titleData["fr-FR"].split(" ");

  return (
    <div className="flex flex-col md:justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row gap-12 max-w-screen-md">
        <div className="relative h-[445px]">
          <div className="w-[400px] h-[400px] overflow-hidden max-w-[100vw]">
            <img
              src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=filipp-romanovski-CGKYNN3uuVo-unsplash.jpg&w=1920"
              width={400}
              height={400}
            />
          </div>
          <h2 className="absolute bottom-0 left-4 text-5xl font-bold flex flex-col">
            <span>{splittedTitle[0]}</span>
            <span>{splittedTitle[1]}</span>
          </h2>
        </div>
        <div className="p-4 flex items-center justify-center text-center">
          <StyledText
            path={"titleDescription/description#49oisa"}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}
