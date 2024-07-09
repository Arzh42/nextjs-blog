import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";
import { Asset, StyledText, Template, TextField } from "@stoati/nextjs-tools";

const Gallery = ({ parentId }: { parentId: string }) => {
  return (
    <div className="min-h-screen py-4 snap-start flex flex-col items-center justify-center">
      <Carousel
        className="h-[95vh] w-[95vw]  snap-start"
        carouselOptions={{
          loop: true,
        }}
      >
        <CarouselNext className="top-1/3 -translate-y-1/3 hidden md:flex" />
        <CarouselPrevious className="top-1/3 -translate-y-1/3 hidden md:flex" />
        <CarouselMainContainer className="h-full">
          <Template
            htmlComponent="Fragment"
            parentId={parentId}
            templateElementId="ea0250db-aeb6-40ba-a6f8-180f5b0121bf"
          >
            {(props, index) => {
              return (
                <SliderMainItem
                  className="bg-transparent object-contain relative"
                  key={props.parentId}
                  id={props.parentId}
                >
                  <>
                    <Asset
                      {...props}
                      className="w-full h-full object-contain"
                      templateElementId="c7215aa9-41a5-49b4-b6d8-372eb7cd8bd8"
                    />
                    <div className="absolute text-white bottom-2 left-0 right-0 flex justify-center">
                      <div className="bg-black/75 rounded-xl p-4 flex flex-col items-center max-w-96 text-center">
                        <TextField
                          {...props}
                          templateElementId="2f1b35e1-e0a5-4e43-bab7-2cd3dd8f821d"
                        />
                        <StyledText
                          {...props}
                          templateElementId="d789fd1b-4b47-4784-8725-84c1bc90849e"
                        />
                      </div>
                    </div>
                  </>
                </SliderMainItem>
              );
            }}
          </Template>
        </CarouselMainContainer>
        <CarouselThumbsContainer>
          <Template
            htmlComponent="Fragment"
            parentId={parentId}
            templateElementId="ea0250db-aeb6-40ba-a6f8-180f5b0121bf"
          >
            {(props, index) => {
              return (
                <SliderThumbItem
                  className="bg-transparent"
                  key={props.parentId}
                  id={props.parentId}
                  index={index}
                >
                  <Asset
                    {...props}
                    className="w-[100%] h-[100%] object-contain"
                    templateElementId="c7215aa9-41a5-49b4-b6d8-372eb7cd8bd8"
                  />
                </SliderThumbItem>
              );
            }}
          </Template>
        </CarouselThumbsContainer>
      </Carousel>
    </div>
  );
};

export default Gallery;
