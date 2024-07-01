import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import "./About.css";
import video1 from "../../assets/animations.mp4";

export default function About() {
  return (
    <div className="about">
      <div className="relative isolate overflow-hidden bg-green-200 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  About us
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  We are an enthusiastic group of Computer Science students and
                  researchers from the Central university of Haryana. We want to
                  replace statistics anxiety and code fear with inspiration and
                  motivation to learn. We believe that coding can be really fun
                  and also understand the importance of quantitative skills for
                  professional development.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-16 -mt-12 p-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <video className="w-[26rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-300/10 sm:w-[35rem]" autoPlay loop muted>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  At the Coding Club, we are passionate about fostering a
                  community of learners, innovators, and tech enthusiasts. Our
                  mission is to provide a collaborative environment where
                  members can enhance their coding skills, work on exciting
                  projects, and prepare for a future in technology.
                </p>
                <h4 className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  What We do
                </h4>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-bold text-gray-900">
                        Workshops & Tutorials :
                      </strong>{" "}
                      We regularly host workshops and tutorials on various
                      programming languages, tools, and technologies. Whether
                      you're a beginner or an advanced coder, there's something
                      for everyone.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-bold text-gray-900">
                        Coding Challenges :
                      </strong>
                      {"  "}
                      Put your skills to the test with our regular coding
                      challenges and hackathons. These events are designed to
                      push your limits and encourage innovative problem-solving.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-bold text-gray-900">
                        Mentorships:
                      </strong>
                      {"  "}
                      Our experienced members and guest mentors are here to
                      guide you. Get personalized advice, feedback, and support
                      to help you achieve your goals.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Community Events :
                      </strong>
                      {"  "}
                      Join us for social events, networking sessions, and guest
                      speaker presentations. Connect with like-minded
                      individuals and industry professionals.
                    </span>
                  </li>
                </ul>
                {/* <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p> */}
                {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No server? No problem.
                </h2> */}
                {/* <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                  consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                  euismod vitae interdum mauris enim, consequat vulputate nibh.
                  Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                  Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
                  nullam sed diam turpis ipsum eu a sed convallis diam.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
