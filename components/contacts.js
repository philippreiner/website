import Head from "next/head";
import NextLink from "next/link";


export default function Contacts() {
  return (
    <ul className="flex">
      <li className="pr-4">
        <a href="mailto:hey@philippreiner.info" class="underline hover:text-secondary text-primary dark:text-white" >Email</a>
      </li>
      <li className="pr-4">
        <a href="https://www.linkedin.com/in/philippreiner/" class="underline hover:text-secondary text-primary dark:text-white" >LinkedIn</a>
      </li>
      <li className="pr-4">
        <a href="https://www.twitter.com/reiner" class="underline hover:text-secondary text-primary dark:text-white" >Twitter</a>
      </li>
    </ul>
  );
}
