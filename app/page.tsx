"use client";
import { motion } from "framer-motion";
import { skills } from "./utils/constants";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import {
  RiTwitterLine,
  RiArrowRightLine,
  RiMailLine,
  RiArrowDownCircleLine,
} from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <div className="flex w-full text-[14px] sm:text-[16px] text-justify">
          Hey, I'm Armaan Yadav, a pragmatic software developer passionate about
          building things that live on the internet and add value. I love
          exploring new technologies and applying them to real-world projects.
        </div>

        <div className="flex items-center w-full text-[14px] sm:text-[16px] mt-4">
          <RiArrowRightLine className="mx-2" />
          By the way, I'm open to projects and work.
          <RiArrowRightLine className="mx-2" />
          <Link
            href="mailto:yadavarmaan10@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            <RiMailLine className="inline-block w-4 h-4" />
          </Link>
        </div>
        <div className="flex items-center w-full text-[14px] sm:text-[16px] mt-4">
          <RiArrowRightLine className="mx-2" />
          <span className="mr-2">Get the TL;DR version of my career</span>
          <Link href={"/resume/Armaan-Yadav.pdf"} target="_blank">
            <button className="text-xs border border-gray-500 px-2 py-1 transition-colors duration-200 w-fit hover:bg-gray-100 dark:hover:bg-gray-800 group">
              Resume{" "}
              <FaArrowDownLong
                className="inline-block ml-1 group-hover:animate-bounce"
                size={10}
              />
            </button>
          </Link>
        </div>
        {/* Skills section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-md font-semibold mb-6">Skills & Technologies</h2>
          <div className="flex flex-col gap-2">
            {skills.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="text-md"
                key={index}
              >
                <h1 className="mb-1">{skill.category}</h1>
                <div className="flex flex-wrap gap-1">
                  {skill.skills.map((item, i) => {
                    return (
                      <span
                        className="text-xs border border-gray-500 px-2 py-1 transition-colors duration-200 w-fit"
                        key={i}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
