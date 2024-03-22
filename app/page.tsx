import { StyledText, TextField } from "@stoati/nextjs-tools";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen py-8">
      <header className="flex flex-col items-center gap-2 ">
        <h1 className="font-bold text-5xl text-white">
          <TextField moduleName="title" />
        </h1>
        <h2 className="font-bold text-xl text-white">Artiste - Peintre</h2>
      </header>

      <div className="text-white flex flex-col gap-4">
        <img
          style={{
            maxHeight: 600,
            maxWidth: 600,
          }}
          src={`images/img1.jpg`}
          alt="Image 1"
        />
        <StyledText moduleName="image_desc" />
      </div>
      <footer className="text-white font-bold">
        <Link href="https://www.instagram.com/baptiste__borel/">Instagram</Link>
      </footer>
    </div>
  );
}
