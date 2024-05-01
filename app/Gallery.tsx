import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Asset, StyledText, Template, TextField } from "@stoati/nextjs-tools";

const Gallery = ({ parentId }: { parentId: string }) => {
  return (
    <div className="min-h-screen snap-start flex flex-col items-center justify-center">
      <Carousel className="w-[90vw] max-h-screen" opts={{ loop: true }}>
        <CarouselContent id="content">
          <Template
            htmlComponent="Fragment"
            parentId={parentId}
            templateElementId="ea0250db-aeb6-40ba-a6f8-180f5b0121bf"
          >
            {(props) => {
              return (
                <CarouselItem key={props.parentId} id={props.parentId}>
                  <div className="flex flex-col items-center gap-2 justify-center h-screen">
                    <Asset
                      {...props}
                      className="w-[90%] max-h-[80%] object-contain"
                      templateElementId="c7215aa9-41a5-49b4-b6d8-372eb7cd8bd8"
                    />

                    <TextField
                      {...props}
                      className="text-white"
                      templateElementId="2f1b35e1-e0a5-4e43-bab7-2cd3dd8f821d"
                    />
                    <StyledText
                      {...props}
                      templateElementId="d789fd1b-4b47-4784-8725-84c1bc90849e"
                    />
                  </div>
                </CarouselItem>
              );
            }}
          </Template>
        </CarouselContent>
        <CarouselPrevious className="ml-2 hidden md:flex" />
        <CarouselNext className="mr-2 hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default Gallery;
