import Image from "next/image";
import Link from "next/link";
import React from "react";
import HERO_IMAGE from "../public/Group 17.png";

const Hero = () => {
  return (
    <div class="bg-[#160A3A]">
      <div class="wrapper flex flex-row items-center justify-between py-20 px-4 gap-10">
        <div class="grid grid-cols-1">
          <div class="hero-top">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.993 10.222L11.375 14.84C11.228 14.987 11.037 15.06 10.845 15.06C10.652 15.06 10.461 14.987 10.314 14.84L8.005 12.531C7.712 12.238 7.712 11.763 8.005 11.47C8.298 11.177 8.772 11.177 9.065 11.47L10.845 13.249L14.932 9.161C15.225 8.868 15.7 8.868 15.993 9.161C16.286 9.454 16.286 9.929 15.993 10.222ZM12 2.5C6.762 2.5 2.5 6.762 2.5 12C2.5 17.239 6.762 21.5 12 21.5C17.238 21.5 21.5 17.239 21.5 12C21.5 6.762 17.238 2.5 12 2.5Z"
                fill="#13C163"
              />
            </svg>
            <Link href="/">Verified by Coursera</Link>
          </div>
          <h1 class="text-[70px] w-1/2 font-medium text-white ">
            Learn Code From top{" "}
            <span class="text-[#EAE34A] underline">Coder</span>
          </h1>
          <div class="flex flex-col gap-4">
            <p class=" w-1/2 text-lg text-white ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
            <div class="flex items-center gap-4">
              <Link href="/" class="bg-[#EAE34A] px-4 py-[10px] font-semibold">
                Get Started
              </Link>
              <div class="flex bg-[#37266F] items-center justify-center px-4 py-[10px] gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C17.5116 2 22 6.48625 22 12.0058C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0058C2 6.48625 6.48842 2 12 2ZM10.861 8.02991C10.6486 8.02991 10.4459 8.07815 10.2529 8.17463C10.0116 8.3097 9.81853 8.52195 9.71236 8.77279C9.64479 8.94645 9.53861 9.46744 9.53861 9.47709C9.43243 10.0463 9.37452 10.9725 9.37452 11.9952C9.37452 12.9706 9.43243 13.8572 9.51931 14.4361C9.52896 14.4457 9.63514 15.0921 9.75097 15.314C9.96332 15.7192 10.3784 15.9701 10.8224 15.9701H10.861C11.1506 15.9604 11.7587 15.7096 11.7587 15.7C12.7819 15.2754 14.7992 13.9537 15.61 13.0757L15.668 13.0178C15.7741 12.9117 15.9093 12.7477 15.9382 12.7091C16.0927 12.5065 16.1699 12.2557 16.1699 12.0058C16.1699 11.725 16.083 11.4645 15.9189 11.2523C15.8803 11.2137 15.7355 11.0497 15.6004 10.9146C14.8089 10.0656 12.7432 8.67631 11.6622 8.25181C11.4981 8.18524 11.083 8.03956 10.861 8.02991Z"
                    fill="white"
                  />
                </svg>
                <Link href="/" class="  text-white">
                  How it works
                </Link>
              </div>
            </div>

            <div class="flex items-center px-4 py-[10px] gap-2">
              <svg
                width="107"
                height="21"
                viewBox="0 0 107 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0135 0L12.2617 6.91917H19.5369L13.6511 11.1954L15.8993 18.1146L10.0135 13.8383L4.12772 18.1146L6.37589 11.1954L0.490096 6.91917H7.76534L10.0135 0Z"
                  fill="#F7B933"
                />
                <path
                  d="M31.5811 0L33.8293 6.91917H41.1046L35.2188 11.1954L37.4669 18.1146L31.5811 13.8383L25.6953 18.1146L27.9435 11.1954L22.0577 6.91917H29.333L31.5811 0Z"
                  fill="#F7B933"
                />
                <path
                  d="M74.7162 0L76.9643 6.91917H84.2396L78.3538 11.1954L80.6019 18.1146L74.7162 13.8383L68.8304 18.1146L71.0785 11.1954L65.1927 6.91917H72.468L74.7162 0Z"
                  fill="#F7B933"
                />
                <path
                  d="M53.1488 0L55.3969 6.91917H62.6722L56.7864 11.1954L59.0346 18.1146L53.1488 13.8383L47.263 18.1146L49.5111 11.1954L43.6253 6.91917H50.9006L53.1488 0Z"
                  fill="#F7B933"
                />
                <path
                  d="M96.2838 0L98.532 6.91917H105.807L99.9214 11.1954L102.17 18.1146L96.2838 13.8383L90.398 18.1146L92.6462 11.1954L86.7604 6.91917H94.0356L96.2838 0Z"
                  fill="#F7B933"
                />
              </svg>

              <p class="text-white">Based on 10,000+ reviews on</p>
            </div>
          </div>
        </div>
        <div classname="hero-image">
          <Image src={HERO_IMAGE} alt="hero" width="500" height="500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
