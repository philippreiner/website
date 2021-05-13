import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";

import {Container} from "@components/atoms";

export default function Page({ children }) {
  return (
    <Container>
        <NextLink href="/" passHref>
          <a class="flex items-center py-4 pt-8 sm:pt-16 md:mb-8 hover:underline">
            <div class="icon">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.15625 13.8125L8.78125 13.2188C8.9375 13.0625 8.9375 12.8125 8.78125 12.6875L3.9375 7.8125H14.625C14.8125 7.8125 15 7.65625 15 7.4375V6.5625C15 6.375 14.8125 6.1875 14.625 6.1875H3.9375L8.78125 1.34375C8.9375 1.21875 8.9375 0.96875 8.78125 0.8125L8.15625 0.21875C8.03125 0.0625 7.78125 0.0625 7.625 0.21875L1.09375 6.75C0.9375 6.90625 0.9375 7.125 1.09375 7.28125L7.625 13.8125C7.78125 13.9688 8.03125 13.9688 8.15625 13.8125Z"/>
              </svg>
            </div>
            <div class="pl-4 font-bold">
              Philipp Reiner
            </div>
          </a>
        </NextLink>
      {children}
    </Container>
  );
}
