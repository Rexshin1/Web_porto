const MonoBlog = ({ data, blog = data }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/60 hover:bg-white hover:-translate-y-3.5 hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.3)] hover:border-blue-400/60 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-t-2xl">
          <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-mono font-bold text-blue-300 bg-gray-900/90 px-2.5 py-1 rounded-full border border-blue-500/40">
              TECHNICAL NOTE
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-mono font-bold text-blue-600 mb-2 uppercase tracking-wider">
            {blog?.date} &bull; {blog?.category}
          </p>
          <h3 className="text-sm xs:text-base font-black text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-snug line-clamp-2">
            {blog?.title}
          </h3>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-gray-100 mt-auto">
        <a
          href={blog?.link || "#!"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-1.5 text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
        >
          <span>Read Article</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default MonoBlog;
