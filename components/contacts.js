
import { AtSymbolIcon } from '@heroicons/react/solid'
export default function Contacts() {
  const linkstyle = "hover:text-blue-400 font-bold hover:underline text-primary dark:text-blue-600 items-center flex";

  return (
    <ul className="flex flex-col md:flex-row">
      <li className="pr-4 pb-2 md:pb-0 hidden flex">
        <a href="https://www.nonewmachines.com" className={linkstyle} >
          <span>Newsletter</span>
        </a>
      </li>
      <li className="pr-6 pb-2 md:pb-0">
        <a href="mailto:hey@philippreiner.info" className={linkstyle}>
          <AtSymbolIcon className='w-5 h-5'/>
          <span>Email</span>
        </a>
      </li>
      <li className="pr-6 pb-2 md:pb-0 ">
        <a href="https://www.linkedin.com/in/philippreiner/" className={linkstyle} >
          <Linkedin/>
          <span>LinkedIn</span>
        </a>
      </li>
      <li className="pr-6 pb-2 md:pb-0">
        <a href="https://www.twitter.com/reiner" className={linkstyle}>
          <Twitter/>
          <span>Twitter</span>
        </a>
      </li>
      <li className="pr-6 pb-2 md:pb-0">
        <a href="https://www.instagram.com/philippreiner/" className={linkstyle}>
           <Instagram/>
          <span>Instagram</span>
          </a>
      </li>
    </ul>
  );
}

export function Linkedin() {
  return (
    <div className=''>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/></svg>
    </div>
  );
}
export function Instagram() {
  return (
    <div className=''>
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>
    </div>
  );
}
export function Twitter() {
  return (
    <div className=''>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
    </div>
  );
}