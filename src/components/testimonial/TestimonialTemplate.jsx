const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-4">
      {/* Official Certificate Card or Photo Frame */}
      {testimonial?.certImage ? (
        <div className="w-full max-w-3xl bg-white p-3 sm:p-6 rounded-2xl border-2 border-blue-200/90 shadow-[0_20px_60px_rgba(37,99,235,0.16)] hover:border-blue-600 hover:shadow-[0_25px_70px_rgba(37,99,235,0.24)] transition-all duration-500 overflow-hidden relative group">
          <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-3.5 mb-3.5 border-b border-gray-200/80">
            <span className="text-xs sm:text-sm font-mono font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {testimonial?.certIssuer || "OFFICIAL CERTIFICATE"}
            </span>
            <span className="text-xs sm:text-sm font-mono font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {testimonial?.certGrade || "VERIFIED"}
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-gray-200/80 flex justify-center items-center shadow-inner">
            <img
              src={testimonial.certImage}
              alt={testimonial?.certTitle || "Sertifikat Resmi"}
              className="w-full h-auto max-h-[480px] sm:max-h-[560px] object-contain group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3.5 mt-3.5 border-t border-gray-200/80 text-xs sm:text-sm font-mono text-gray-600 px-2">
            <span>Nomor: <strong className="text-gray-900 font-bold">{testimonial?.certNo}</strong></span>
            <span className="text-right">Disahkan Oleh: <strong className="text-gray-900 font-semibold">{testimonial?.certSigner}</strong></span>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-gradient-to-b from-white via-slate-50/80 to-blue-50/40 rounded-2xl border-2 border-blue-200/80 shadow-[0_15px_45px_rgba(37,99,235,0.12)] p-6 sm:p-9 relative overflow-hidden group hover:border-blue-500 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-900"></div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-gray-800 font-mono">
                {testimonial?.certIssuer || "OFFICIAL CREDENTIAL"}
              </span>
            </div>
            {testimonial?.certGrade && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full text-xs font-mono font-extrabold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                {testimonial?.certGrade}
              </span>
            )}
          </div>

          <div className="text-center my-4">
            <h3 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
              {testimonial?.certTitle || "SERTIFIKAT RESMI"}
            </h3>
            {testimonial?.certNo && (
              <div className="mt-2.5 inline-block px-3.5 py-1 bg-blue-100/90 text-blue-900 border border-blue-300 rounded-full text-xs sm:text-sm font-mono font-bold">
                Nomor Sertifikat: {testimonial?.certNo}
              </div>
            )}
          </div>

          <div className="text-center my-6 py-4 bg-white/70 rounded-xl border border-blue-100/60 shadow-inner">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase">
              Diberikan Kepada:
            </p>
            <p className="text-2xl sm:text-4xl font-black text-blue-900 my-2 tracking-tight font-serif">
              Moh. Khoirun Nafis
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-700 mt-1">
              Posisi / Kualifikasi: <span className="text-blue-700 font-extrabold">{testimonial?.certRole}</span>
            </p>
            <p className="text-xs text-gray-500 font-mono mt-0.5">
              Masa Pelaksanaan: {testimonial?.certPeriod}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-200/80 text-left text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2 font-mono">
              <span className="px-2 py-1 bg-blue-600 text-white rounded font-bold text-[10px]">
                VERIFIED
              </span>
              <span>Kemnaker RI / SIAPkerja / MagangHub</span>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Disahkan Oleh:</p>
              <p className="font-semibold text-gray-800 text-xs mt-0.5 max-w-xs">{testimonial?.certSigner}</p>
            </div>
          </div>
        </div>
      )}

      {/* Supervisor Quote Section Below Card */}
      <div className="text-center mt-8 max-w-3xl px-4">
        <p className="text-[14px] sm:text-lg font-medium pb-4 text-gray-800 italic leading-relaxed">
          “{testimonial?.quote}”
        </p>
        <div className="mx-auto">
          <p className="text-[15px] sm:text-lg font-bold text-blue-900">
            {testimonial?.name}
          </p>
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            {testimonial?.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
