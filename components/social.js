import { AtSymbolIcon } from "@heroicons/react/24/solid";
import NextLink from "next/link";

export function Contacts({ className, data }) {
  return (
    <ul className={`mt-3 md:mt-6 md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 ${className}`}>
      <NextLink href="/newsletter">
        <li className="bg-primary dark:bg-highlight text-white inline-block dark:text-black rounded md:rounded-full px-6 py-2.5 cursor-pointer hover:bg-blue-700 dark:hover:bg-white">
          Newsletter
        </li>
      </NextLink>
      {data.contact.map((link, index) => (
        <li key={index}>
          <a
            className="text-primary dark:text-highlight font-bold hover:underline"
            target="_blank"
            href={link.url}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
Contacts.defaultProps = {
  className: "",
};