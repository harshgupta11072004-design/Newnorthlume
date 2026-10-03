import react from "react";
import Image from "next/image";
import { CommenHeading } from "../commmencomponent/CommenHeading";

export default function Brands() {
  return (
      <>
      <div className="py-16">
        <section className="container mx-auto">
          <div className="text-center mb-6">
            <CommenHeading heading="Trusted by Analysts, Traders and Financial Teams Worldwide" />
          </div>
          
                      {/* <h2 className="mb-4 text-center text-white">Trusted by Analysts, Traders and Financial Teams Worldwide</h2>     */}
            <div className="flex flex-wrap justify-center gap-8">
                        <img loading="lazy" src="https://cdn.prod.website-files.com/6988c7b559f02cbdf41804f1/699d4e5fb1d7e1beef11ff55_Logo%20(1).svg" alt="" className="brand-logo"></img>
                        <img loading="lazy" src="https://cdn.prod.website-files.com/6988c7b559f02cbdf41804f1/699d4e5fb1d7e1beef11ff55_Logo%20(1).svg" alt="" className="brand-logo"></img>
                        <img loading="lazy" src="https://cdn.prod.website-files.com/6988c7b559f02cbdf41804f1/699d4e5fb1d7e1beef11ff55_Logo%20(1).svg" alt="" className="brand-logo"></img>
                        <img loading="lazy" src="https://cdn.prod.website-files.com/6988c7b559f02cbdf41804f1/699d4e5fb1d7e1beef11ff55_Logo%20(1).svg" alt="" className="brand-logo"></img>
                        <img loading="lazy" src="https://cdn.prod.website-files.com/6988c7b559f02cbdf41804f1/699d4e5fb1d7e1beef11ff55_Logo%20(1).svg" alt="" className="brand-logo"></img>
                        <img loading="lazy" src="https://cdn.prod.website-files.com/6988c7b559f02cbdf41804f1/699d4e5fb1d7e1beef11ff55_Logo%20(1).svg" alt="" className="brand-logo"></img>
                </div>    
        </section>
      </div>
      </>
  );
}