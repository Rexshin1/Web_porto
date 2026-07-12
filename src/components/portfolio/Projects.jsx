const Projects = ({ data }) => {
  return (
    <div className="group relative rounded-2xl bg-gradient-to-b from-white to-gray-50/80 border border-gray-200/80 p-4 xs:p-6 transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.35)] hover:border-blue-500/60 hover:bg-white flex flex-col justify-between">
      {/* Top Image Container with Smooth Zoom on Hover */}
      <div className="relative overflow-hidden rounded-xl bg-gray-950 aspect-[16/10] shadow-inner mb-6">
        <img
          src={data?.image}
          alt={`${data?.title} image`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
        />
        {/* Shimmering Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <span className="text-[11px] font-mono text-blue-300 font-bold bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/40 shadow-lg">
            FEATURED PROJECT
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-block text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            {data?.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-gray-900 text-lg sm:text-xl font-black pt-1 mb-3 group-hover:text-blue-700 transition-colors duration-300">
          {data?.title}
        </h3>

        {/* Project Description (Full Explanation without truncation) */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default Projects;
