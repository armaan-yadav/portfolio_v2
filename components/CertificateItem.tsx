import { Certificate } from "@/app/utils/constants";
import React from "react";

interface CertificateItemProps {
  certificate: Certificate;
  index: number;
}

const CertificateItem = ({ certificate, index }: CertificateItemProps) => {
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
          {certificate.title}
        </span>
      </h3>
      <p className="text-gray-500 text-xs md:text-sm mb-2 dark:text-gray-400">
        {certificate.description}
      </p>
      <a
        href={certificate.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-sm"
      >
        View Certificate
      </a>
    </div>
  );
};

export default CertificateItem;
