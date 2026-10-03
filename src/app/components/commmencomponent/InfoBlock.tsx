function InfoBlock({ title, children }:any) {
  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <h3 className="mb-2 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {children}
      </p>
    </div>
  );
}