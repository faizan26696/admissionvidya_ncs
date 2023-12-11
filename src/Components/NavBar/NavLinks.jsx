import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Reset headings when location changes (navigation occurs)
    setHeading("");
    setSubHeading("");
  }, [navigate]);

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 font-semibold flex justify-between items-center text-[14px] text-black cursor-pointer lg:text-white   duration-300 md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}

              <span className="text-xl lg:hidden inline text-black lg:text-white">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>

              <span className="text-xl md:mt-1 md:ml-2 text-white  lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {link.submenu && (
              <div className="">
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 flex justify-start  gap-5 flex-wrap ">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head.index}>
                        <h1 className="font-semibold text-[12px] cursor-pointer">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.name.index}
                            className=" text-gray-600 my-2.5"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-white hover:bg-[#00009c] font-semibold text-gray-500 text-[0.7rem] duration-300  p-2 rounded-lg"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div className="z-70">
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 text-black pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center text-[14px] cursor-pointer"
                  >
                    {slinks.Head}

                    <span className="text-xl text-gray-800 md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "lg:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 text-[12.5px] pl-14 text-gray-600 hover:text-blue-700 duration-300">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
