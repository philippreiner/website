
export default function Contacts() {
  const linkstyle = "hover:text-blue-400 font-bold hover:underline text-primary dark:text-blue-600";

  return (
    <ul className="flex flex-col md:flex-row">
      <li className="pr-4 pb-2 md:pb-0 hidden">
        <a href="https://www.nonewmachines.com" className={linkstyle} >
          <span>Newsletter</span>
        </a>
      </li>
      <li className="pr-4 pb-2 md:pb-0">
        <a href="mailto:hey@philippreiner.info" className={linkstyle}>
          <span>Email</span>
        </a>
      </li>
      <li className="pr-4 pb-2 md:pb-0 ">
        <a href="https://www.linkedin.com/in/philippreiner/" className={linkstyle} >LinkedIn</a>
      </li>
      <li className="pr-4 pb-2 md:pb-0">
        <a href="https://www.twitter.com/reiner" className={linkstyle}>Twitter</a>
      </li>
      <li className="pr-4 pb-2 md:pb-0">
        <a href="https://www.instagram.com/philippreiner/" className={linkstyle}>Instagram</a>
      </li>
    </ul>
  );
}
