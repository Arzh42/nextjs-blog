import Gallery from "@/app/Gallery";
import Links from "@/app/Links";
import { StyledText, Template, TextField } from "@stoati/nextjs-tools";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-stretch min-h-screen snap-y scroll-smooth snap-mandatory overflow-auto h-screen backdrop-brightness-50 backdrop-blur-xl">
        <div className="flex flex-col items-center min-h-screen py-8 snap-start ">
          <header className="flex flex-col items-center gap-2 ">
            <h1 className="font-bold text-5xl text-white">
              <TextField templateElementId="7585caa0-7f66-4c29-bf90-4c79ab2e9768" />
            </h1>
            <h2 className="font-bold text-xl text-white">
              <TextField templateElementId="9d747f3c-0a2e-4d72-9acc-2faf555f5023" />
            </h2>
          </header>
          <div className="flex flex-col justify-center items-center flex-1 text-white font-bold text-xl text-center px-2">
            <StyledText templateElementId="0ed78345-e2eb-4172-a831-3e6a00dcec6b" />
          </div>
          <div className="text-white flex gap-2">
            <ChevronDown />
            Descendez pour découvrir l'artiste
            <ChevronDown />
          </div>
        </div>

        <Template templateElementId="8e3f92e6-06a9-4173-bf16-5209e9227d4d">
          {(props) => {
            return <Gallery {...props} key={props.parentId} />;
          }}
        </Template>
        <Links />
      </div>
    </>
  );
}
