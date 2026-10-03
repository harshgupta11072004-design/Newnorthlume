
function SectionTitle({ number, title }:any) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-gray-400">
        {number}
      </span>

      <h2 className="pt-1 text-xl font-semibold leading-7 text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}