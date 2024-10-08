import Image from "next/image";
import React from "react";
import Image1 from "../public/Rectangle 7.png";
import Image2 from "../public/Rectangle 4423@2x.png";
import Link from "next/link";

const About = () => {
  return (
    <div class="container mx-auto  py-10">
      <div class="grid gap-10">
        <div>
          <div class=" flex flex-col gap-5 ">
            <h3 class="text-3xl text-[#4B28B5]">Let’s Learn together to</h3>
            <h2 class="text-5xl font-semibold ">Grow Your Skills</h2>
            <div class="flex items-center gap-10">
              <Image src={Image1} alt="about 1" width="500" height="500" />
              <div class="grid gap-5">
                <h4 class="text-2xl font-medium">
                  Describe Your Learning Skills
                </h4>
                <p class="w-96">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                </p>
                <h4 class="text-2xl font-medium">Select course</h4>
                <h4 class="text-2xl font-medium">
                  {" "}
                  Keep track of your experts
                </h4>
                <Link
                  href="/"
                  class="rounded-lg border-slate-400 px-4 py-[10px] border-2 w-1/2
                text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex justify-between
        "
        >
          <div class=" flex flex-col gap-8">
            <h2 class="text-5xl font-semibold w-1/2">
              Welcome to Code Learning Centre
            </h2>
            <div class="grid gap-5">
              <p class="w-1/2">
                Here we guide you to the best online courses, e-learning advice,
                and technology and resources for education and training.
              </p>
              <div class="flex justify-center flex-col ml-12">
                <h4 class="font-semibold font-[#1E2A39]">Safe & Secured</h4>
                <p class="w-1/3">
                  Safe and Secured our services and every step of process.
                </p>
                <h4 class="font-semibold font-[#1E2A39]">
                  Highly Expert Instructors
                </h4>
                <p class="w-1/2">
                  There are coffee shops, sports, restaurants and a multitude of
                  great study.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={Image2} alt="about 1" width="500" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
