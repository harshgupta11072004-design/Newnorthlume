import react from "react";
export default function HeroVideoSectioncommen({props}:any) {
  return (
   <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[500px] w-full object-cover videocss !rounded-[0px]"
        >
          <source src="/img/hero_bg_mp4.mp4" type="video/mp4" />
        </video>
        <div className="hero-cover_header !rounded-[0px]"></div>
        <div className="hero-cover-two !rounded-[0px]"></div>
        <div className="hero-video-shadow !rounded-[0px]"></div>
        <div className="absolute inset-0 z-50">
          <div className="mx-auto flex max-w-[850px] flex-col items-center pt-[245px] text-center">
           

            <h1 className="max-w-[780px] text-5xl font-medium leading-[1.05] tracking-[-2px] sm:text-6xl md:text-[50px]">
             {props?.title}

              <br />
              {props?.subtitle}

            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] font-normal leading-7 text-white/60">
             {props?.description}
            </p>

          
          </div>
        </div>

       
      </div>
    </section>

  );
}