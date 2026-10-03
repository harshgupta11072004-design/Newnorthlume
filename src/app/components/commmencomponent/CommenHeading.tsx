import React from "react";

export function CommenHeading({ heading }: { heading: string }) {
  return (
    <div className=" mb-2">
      <h2 className="text-3xl font-bold mb-2 text-white">
        {heading}
      </h2>
    </div>
  );
}

export function CommenSubheading({
  subheading,
}: {
  subheading: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-[#a5a5a5] text-[14px]">{subheading}</p>
    </div>
  );
}