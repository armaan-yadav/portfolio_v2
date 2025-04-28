import { Education } from "@/app/utils/constants";
import React from "react";

interface EducationItemProps {
  education: Education;
  index: number;
}

const EducationItem = ({ education, index }: EducationItemProps) => {
  return (
    <div
      className="mb-4 pb-6"
      style={{
        transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
        opacity: 1,
        transform: "translateY(0px)",
      }}
    >
      <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
        <span className="underline underline-offset-2">
          {education.schoolName}
        </span>
      </h3>
      <p className="text-gray-500 text-xs md:text-sm mb-2 dark:text-gray-400">
        {education.degree} ({education.duration})
      </p>
    </div>
  );
};

export default EducationItem;
