import Head from "next/head";

import NextImage from "next/image"



export default function Impressum({ content }) {
  return (
<div class="grid grid-cols-[3fr,1fr] p-8 gap-8 h-screen overflow-hidden items-center">
<div>
  <div class="w-full h-auto aspect-video p-8 bg-slate-100 rounded">BILD</div>
</div>
<div class="">
  <div class="h-screen overflow-y-auto snap-y scroll-smooth">
      <div class="min-h-[90vh] snap-center flex justify-center items-stretch flex-col">
        <a name="first">Input 1</a>
        <a href="#second">
          <div class="aspect-square w-full bg-slate-200 border-slate border-dashed border mt-4"></div>
        </a>

      </div>
      <div class="min-h-[90] snap-center flex justify-center items-stretch flex-col">
        <a name="second">Input 2</a>
        <a href="#third">
          <div class="aspect-square w-full bg-teal-200 border-slate border-dashed border mt-4"></div>
        </a>
      </div>
      <div class="min-h-[90vh] snap-center flex justify-center items-stretch flex-col">
        <a name="third">Input 3</a>
        <div class="aspect-square w-full bg-indigo border-slate border-dashed border mt-4"></div>
      </div>
    </div>
</div>
  </div>
  );
}
