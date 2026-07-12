const InformationSummary = ({ item }) => {
  return (
    <div className="group bg-gradient-to-br from-[#EBF3FE] via-blue-100/80 to-indigo-50/50 rounded-2xl border border-blue-200/60 text-center transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 hover:border-blue-400 cursor-pointer overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px] relative z-10">
        <p className="text-[16px] xxs:text-[18px] sm:text-[32px] font-black text-blue-950 group-hover:text-blue-700 transition-colors duration-300">
          {item.description}
        </p>
        <p className="text-[8px] xxs:text-[9px] sm:text-[14px] font-semibold px-[0.5rem] sm:px-[1rem] text-wrap text-gray-600 group-hover:text-gray-900 transition-colors duration-300 mt-1">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
