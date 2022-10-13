import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        class="relative w-full flex flex-wrap items-center justify-between py-4  navbar navbar-expand-lg "
      >
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            class=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none  focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16  16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>{" "}
            </svg>
          </button>
          <div
            class="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <a
              class=" flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
              href="/"
            >
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                height={15}
                alt=""
                loading="lazy"
              />
            </a>

            {/*  Left links  */}
            <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto ">
              <li class="nav-item p-2">
                <a
                  class="nav-link text-gray-400 font-semibold hover:text-[#3e3ef1ad] hover:bg-gray-300
                   px-[8px] py-[10px] rounded-sm "
                  href="/#"
                >
                  {" "}
                  Rent{" "}
                </a>
              </li>
              <li class="nav-item p-2">
                <a
                  class="nav-link text-gray-400 font-semibold hover:text-[#3e3ef1ad] hover:bg-gray-300
                   px-[8px] py-[10px] rounded-sm "
                  href="/#"
                >
                  {" "}
                  Buy{" "}
                </a>
              </li>
              <li class="nav-item p-2">
                <a
                  class="nav-link text-gray-400 font-semibold hover:text-[#3e3ef1ad] hover:bg-gray-300
                   px-[8px] py-[10px] rounded-sm "
                  href="/#"
                >
                  {" "}
                  Sell{" "}
                </a>
              </li>

              <li class="nav-item p-2">
                <div class="flex">
                  <div>
                    <div class="dropdown relative">
                      <a
                        class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 dropdown-toggle transition duration-150 ease-in-out flex items-center whitespace-nowrap "
                        href="/#"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        Mega Property{" "}
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          class="w-2 ml-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M31. 3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>{" "}
                        </svg>
                      </a>
                      <ul
                        class=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none "
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a
                            class=" dropdown-item text-sm py-2 px-4 font-normal block  whitespace-nowrap bg-transparent "
                            href="/#"
                          >
                            {" "}
                            Action{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            href="/#"
                          >
                            {" "}
                            Another action{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            href="/#"
                          >
                            {" "}
                            Something else here{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item p-2">
                <div class="flex">
                  <div>
                    <div class="dropdown relative">
                      <a
                        class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 dropdown-toggle focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center whitespace-nowrap "
                        href="/#"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        Resources{" "}
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          class="w-2 ml-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M31. 3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>{" "}
                        </svg>
                      </a>
                      <ul
                        class=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none "
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a
                            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            href="/#"
                          >
                            {" "}
                            Action{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            href="/#"
                          >
                            {" "}
                            Another action{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            href="/#"
                          >
                            {" "}
                            Something else here{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* Left links */}
          </div>

          {/* Collapsible wrapper */}

          {/* Right elements  */}
          <div class="flex items-center relative gap-x-6">
            <button className=" border border-[#3e3ef1ad] rounded-md text-[#3e3ef1ad]  px-[12px] py-[9px] ">
              Login
            </button>

            <button className=" border border-[#3e3ef1ad] text-white font-semibold rounded-md bg-[#3e3ef1ad]  py-[9px] px-[12px]">
              Sing Up
            </button>
          </div>
          {/*  Right elements */}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
