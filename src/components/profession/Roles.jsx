import { useEffect, useState } from "react";

const Roles = ({ role }) => {
  return (
    <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/10 rounded-2xl border border-gray-200/80 transition-all duration-500 ease-out hover:-translate-y-3.5 hover:scale-[1.015] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.25)] hover:border-blue-400/70 my-6 overflow-hidden cursor-pointer">
      {/* Glowing Left Indicator Strip */}
      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-300 group-hover:w-2.5 group-hover:bg-gradient-to-b group-hover:from-blue-600 group-hover:via-picto-primary group-hover:to-indigo-600 transition-all duration-300" />

      {/* Background Decorative Glow on Hover */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="ps-2 sm:ps-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
            {role?.title}
          </h3>
          <span className="text-xs font-mono font-bold text-blue-600/0 group-hover:text-blue-600 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            SPECIALIZATION
          </span>
        </div>
        <p className="text-sm sm:text-base font-normal text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
