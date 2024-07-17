import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "../styles/global.css";
import Link from "next/link";
import ListItem from "@/app/ListItem";
import getData from "@/lib/stoati/getData";
import { getAllElements } from "@/lib/stoati/getAllElements";
import {
  getElementSimpleTextData,
  getElementStyledTextData,
} from "@/lib/stoati/getElementTypedData";
import { getElement } from "@/lib/stoati/getElement";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  const galleries = getAllElements(data, "gallerie");

  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="absolute pt-4 w-full z-50 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Presentation</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Mes oeuvres</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {galleries.map((item, index) => {
                      const titleElement = getElementSimpleTextData(
                        getElement(item, "main_SimpleText#bmb28m")
                      );

                      const descriptionElement = getElementStyledTextData(
                        getElement(item, "main_StyledText#6z8q45")
                      );

                      return (
                        <ListItem
                          key={`gallerie ${index}`}
                          title={titleElement["fr-FR"]}
                          href={"/galleries/" + index}
                        >
                          {descriptionElement["fr-FR"]}
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  );
}
