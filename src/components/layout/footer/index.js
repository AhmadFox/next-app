/**
 * Internal Dependencies.
 */
import { sanitize } from "../../../utils/miscellaneous";
import { getIconComponentByName } from "../../../utils/icons-map";

/**
 * External Dependencies.
 */
import { isEmpty, isArray } from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ footer, header }) => {
  const {
    copyrightText,
    footerMenuItems,
    sidebarOne,
    sidebarTwo,
    socialLinks,
  } = footer || {};
  const { headerMenuItems, siteLogoUrl, siteTitle, favicon } = header || {};
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <footer className="pt-10 pb-8 bg-gray-200">
      <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 ">
        <div className="flex flex-col items-center justify-center">
          <div>
            <Link href="/">
              {siteLogoUrl ? (
                <img
                  className="mr-2"
                  src={siteLogoUrl}
                  alt={`${siteTitle} logo`}
                  width="160"
                  height="85"
                />
              ) : (
                <TailwindIcon />
              )}
            </Link>
          </div>
          <div className="flex flex-wrap sm:gap-8 gap-6 items-center justify-center mt-8">
            {!isEmpty(footerMenuItems) && footerMenuItems.length
              ? footerMenuItems.map((menuItem) => (
                  <Link
                    key={menuItem?.ID}
                    href={menuItem?.url ?? "/"}
                    className="flex items-center text-md font-large text-gray-700 transition hover:text-teal-600"
                    dangerouslySetInnerHTML={{ __html: menuItem.title }}
                  ></Link>
                ))
              : null}
          </div>
          <div className="flex items-center gap-x-8 my-6">
            {!isEmpty(socialLinks) && isArray(socialLinks) ? (
              <ul className="flex item-center mb-0">
                {socialLinks.map((socialLink) => (
                  <li
                    key={socialLink?.iconName}
                    className="no-dots-list mb-0 flex items-center"
                  >
                    <a
                      href={socialLink?.iconUrl || "/"}
                      target="_blank"
                      title={socialLink?.iconName}
                      className="ml-4 inline-block hover:text-teal-600 social-icon"
                    >
                      {getIconComponentByName(socialLink?.iconName)}
                      <span className="sr-only">{socialLink?.iconName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <p className="text-base leading-4 text-gray-800 mb-0">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
