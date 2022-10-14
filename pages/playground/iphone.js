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
      <div class="min-h-[75vh] snap-start flex justify-center flex-col">
        <a name="first">RX</a>
        <div class="aspect-square w-full bg-slate-200 border-slate border-dashed border mt-4"></div>
        <a href="#second" className="mt-4 px-8 py-4 bg-blue-500 text-white rounded inline-flex">Continue</a>
      </div>
      <div class="min-h-[75vh] snap-start flex justify-center items-stretch flex-col">
        <a name="second">Age</a>
        <a href="#third">
          <div class="aspect-square w-full bg-teal-200 border-slate border-dashed border p-4 mt-4">Selection</div>
        </a>
        <div className="bg-teal-100 rounded h-24 mt-4">
          Optimized?
        </div>
      </div>
      <div class="min-h-[75vh] snap-start flex justify-center items-stretch flex-col">
        <a name="third">Color</a>
        <a href="#quatro">
          <div class="aspect-square w-full bg-teal-200 border-slate border-dashed border p-4 mt-4">Selection</div>
        </a>
      </div>
      <div class="min-h-[75vh] snap-start flex justify-center items-stretch flex-col">
        <a name="quatro">Personal</a>
        <a href="#next">
          <div class="p-8 w-full bg-teal-200 border-slate border-dashed border mt-4">Input</div>
        </a>
      </div>
      
    </div>
</div>
  </div>
  );
}
