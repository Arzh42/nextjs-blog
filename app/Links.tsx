"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FacebookIcon, Instagram } from "lucide-react";
import Link from "next/link";

const Links = () => {
  return (
    <div className="min-h-screen snap-start flex flex-col gap-4 items-center justify-center bg-black">
      <h2 className="text-white text-2xl pb-12">
        Retrouvez moi sur mes réseaux
      </h2>
      <Link href="https://www.instagram.com/baptiste__borel/">
        <HoverBorderGradient
          containerClassName="rounded-full border-2 border-slate-600"
          as="button"
          className="bg-black  text-white flex items-center space-x-2"
        >
          <Instagram />
          <span>Instagram</span>
        </HoverBorderGradient>
      </Link>
      <Link href="https://www.instagram.com/baptiste__borel/">
        <HoverBorderGradient
          containerClassName="rounded-full border-2 border-slate-600"
          as="button"
          className="bg-black  text-white flex items-center space-x-2"
        >
          <FacebookIcon />
          <span>Facebook</span>
        </HoverBorderGradient>
      </Link>
    </div>
  );
};

export default Links;
