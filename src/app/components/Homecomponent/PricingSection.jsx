// "use client";

// import React, { useState } from "react";
// import {
//   ChevronRight,
//   ChevronDown,
//   Bot,
//   BarChart3,
//   Bell,
//   Search,
//   ShieldAlert,
//   Link2,
//   Crown,
//   Trophy,
//   Star,
// } from "lucide-react";
// import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";

// const features = [
//   {
//     icon: Bot,
//     title: "Full AI Forecasting",
//     description: "Trend and movement predictions",
//   },
//   {
//     icon: BarChart3,
//     title: "Real-Time Dashboards",
//     description: "Live market data visuals",
//   },
//   {
//     icon: Bell,
//     title: "Smart Alerts",
//     description: "Adaptive signal notifications",
//   },
//   {
//     icon: Search,
//     title: "Pattern Recognition",
//     description: "Breakouts and consolidations detection",
//   },
//   {
//     icon: ShieldAlert,
//     title: "Risk Analysis",
//     description: "Volatility and drawdown metrics",
//   },
//   {
//     icon: Link2,
//     title: "Integrations Included",
//     description: "Connect platforms and data",
//   },
// ];

// const plans = {
//   starter: {
//     name: "Starter Plan",
//     price: "$19",
//     description: "For beginners and casual traders",
//     icon: Trophy,
//   },
//   pro: {
//     name: "Pro Plan",
//     price: "$49",
//     description: "For beginners and casual traders",
//     icon: Star,
//   },
//   enterprise: {
//     name: "Enterprise Plan",
//     price: "$299",
//     description: "For beginners and casual traders",
//     icon: Crown,
//   },
// };

// export default function PricingSection() {
//   const [openPlan, setOpenPlan] = useState(null);
//   const [billing, setBilling] = useState("monthly");

//   const handleToggle = (plan) => {
//     setOpenPlan((prev) => (prev === plan ? null : plan));
//   };

//   return (
//     <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
//       <div className="mx-auto max-w-5xl">

//         <div className="mb-12 text-center">
//           <CommenHeading heading="Choose your plan" />
//           <CommenSubheading subheading=" Access advanced gold market analysis with pricing built for every stage of growth." />
//         </div>
//         <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
//           <div
//             className={`pricing-card rounded-[22px] border border-[#f5c20b18] bg-[#0a0a05] transition-all duration-500 ${
//               openPlan === "starter"
//                 ? "lg:translate-y-0"
//                 : ""
//             }`}
//           >
//             <div className="flex items-center justify-between p-5 sm:p-6">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
//                   <Trophy className="h-5 w-5 text-black" />
//                 </div>

//                 <h3 className="text-lg font-medium text-white sm:text-xl">
//                   Starter Plan
//                 </h3>

//               </div>

//               {/* Open Button */}
//               <button
//                 onClick={() => handleToggle("starter")}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
//               >
//                 {openPlan === "starter" ? (
//                   <ChevronDown size={18} />
//                 ) : (
//                   <ChevronRight size={18} />
//                 )}
//               </button>

//             </div>


//             {/* Price */}
//             <div className="px-6 pb-6">
//               <div className="flex items-end gap-1">
//                 <span className="text-4xl font-medium tracking-tight text-white">
//                   $19
//                 </span>

//                 <span className="mb-1 text-sm text-white/60">
//                   /per month
//                 </span>
//               </div>

//               <p className="mt-2 text-sm text-white/45">
//                 For beginners and casual traders
//               </p>
//             </div>


//             <div
//               className={`grid transition-all duration-500 ${
//                 openPlan === "starter"
//                   ? "grid-rows-[1fr] opacity-100"
//                   : "grid-rows-[0fr] opacity-0"
//               }`}
//             >
//               <div className="overflow-hidden">

//                 <div className="border-t border-white/5 px-6 py-5">

//                   <div className="space-y-3">

//                     {features.slice(0, 3).map((feature, index) => {
//                       const Icon = feature.icon;

//                       return (
//                         <div
//                           key={index}
//                           className="flex items-center gap-3"
//                         >
//                           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
//                             <Icon
//                               size={16}
//                               className="text-[#f5c20b]"
//                             />
//                           </div>

//                           <div>
//                             <p className="text-xs font-medium text-white">
//                               {feature.title}
//                             </p>

//                             <p className="text-xs text-white/40">
//                               {feature.description}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}

//                   </div>

//                   <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative overflow-hidden rounded-[24px] border border-[#f5c20b25] bg-[#0c0c06]">
//             <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-[#f5c20b]/20 blur-3xl" />
//             <div className="relative z-10 p-5 sm:p-6">
//               <div className="mx-auto mb-8 flex w-fit rounded-xl border border-[#f5c20b40] bg-[#18180c] p-1">
//                 <button
//                   onClick={() => setBilling("monthly")}
//                   className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
//                     billing === "monthly"
//                       ? "bg-white text-black"
//                       : "text-white/60"
//                   }`}
//                 >
//                   Monthly
//                 </button>

//                 <button
//                   onClick={() => setBilling("yearly")}
//                   className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
//                     billing === "yearly"
//                       ? "bg-[#f5c20b] text-black"
//                       : "text-white/60"
//                   }`}
//                 >
//                   Yearly
//                 </button>

//               </div>


            


//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
//                   <Star className="h-5 w-5 text-black" />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <h3 className="text-xl font-medium text-white">
//                     Pro Plan
//                   </h3>
//                   <span className="rounded-md bg-[#f5c20b]/15 px-2 py-1 text-[9px] font-medium uppercase text-[#f5c20b]">
//                     Most Popular
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-5">
//                 <div className="flex items-end gap-1">
//                   <span className="text-4xl font-medium text-white">
//                     {billing === "monthly" ? "$49" : "$39"}
//                   </span>

//                   <span className="mb-1 text-sm text-white/60">
//                     /per month
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-white/45">
//                   For beginners and casual traders
//                 </p>

//               </div>


//               {/* Features */}
//               <div className="mt-8 space-y-3">

//                 {features.map((feature, index) => {
//                   const Icon = feature.icon;

//                   return (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3"
//                     >

//                       <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
//                         <Icon
//                           size={16}
//                           className="text-[#f5c20b]"
//                         />
//                       </div>

//                       <div>
//                         <p className="text-xs font-medium text-white">
//                           {feature.title}
//                         </p>

//                         <p className="text-xs text-white/40">
//                           {feature.description}
//                         </p>
//                       </div>

//                     </div>
//                   );
//                 })}

//               </div>


//               {/* Button */}
//               <button className="mt-7 w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
//                 Get Started
//               </button>

//             </div>
//           </div>



//           <div className="rounded-[22px] border border-[#f5c20b18] bg-[#0a0a05]">
//             <div className="flex items-center justify-between p-5 sm:p-6">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
//                   <Crown className="h-5 w-5 text-black" />
//                 </div>
//                 <h3 className="text-lg font-medium text-white sm:text-xl">
//                   Enterprise Plan
//                 </h3>
//               </div>
//               <button
//                 onClick={() => handleToggle("enterprise")}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
//               >
//                 {openPlan === "enterprise" ? (
//                   <ChevronDown size={18} />
//                 ) : (
//                   <ChevronRight size={18} />
//                 )}
//               </button>

//             </div>


//             <div className="px-6 pb-6">
//             <div className="flex items-end gap-1">
//                 <span className="text-4xl font-medium tracking-tight text-white">
//                   $299
//                 </span>

//                 <span className="mb-1 text-sm text-white/60">
//                   /per month
//                 </span>
//               </div>

//               <p className="mt-2 text-sm text-white/45">
//                 For beginners and casual traders
//               </p>

//             </div>


//             {/* Expanded Content */}
//             <div
//               className={`grid transition-all duration-500 ${
//                 openPlan === "enterprise"
//                   ? "grid-rows-[1fr] opacity-100"
//                   : "grid-rows-[0fr] opacity-0"
//               }`}
//             >
//               <div className="overflow-hidden">

//                 <div className="border-t border-white/5 px-6 py-5">

//                   <div className="space-y-3">

//                     {features.map((feature, index) => {
//                       const Icon = feature.icon;

//                       return (
//                         <div
//                           key={index}
//                           className="flex items-center gap-3"
//                         >

//                           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
//                             <Icon
//                               size={16}
//                               className="text-[#f5c20b]"
//                             />
//                           </div>

//                           <div>
//                             <p className="text-xs font-medium text-white">
//                               {feature.title}
//                             </p>

//                             <p className="text-xs text-white/40">
//                               {feature.description}
//                             </p>
//                           </div>

//                         </div>
//                       );
//                     })}

//                   </div>

//                   <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
//                     Get Started
//                   </button>

//                 </div>

//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Users,
  MessageCircle,
  LineChart,
  Crown,
  Trophy,
  Star,
} from "lucide-react";
import { CommenHeading, CommenSubheading } from "../commmencomponent/CommenHeading";

const features = [
  {
    icon: LineChart,
    title: "Live Trading Sessions",
  },
  {
    icon: CheckCircle2,
    title: "Market Insights & Analysis",
  },
  {
    icon: MessageCircle,
    title: "Q&A Sessions",
  },
  {
    icon: Users,
    title: "Trading Community Access",
  },
];

export default function PricingSection() {
  const [openPlan, setOpenPlan] = useState(null);

  const handleToggle = (plan) => {
    setOpenPlan((prev) => (prev === plan ? null : plan));
  };

  return (
    <section className="bg-black px-4 py-16 sm:py-20 lg:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <CommenHeading heading="Choose your plan" />
          <CommenSubheading subheading="Access advanced gold market analysis with pricing built for every stage of growth." />
        </div>

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">

          {/* 1 Month */}
          <div
            className={`pricing-card rounded-[22px] border border-[#f5c20b18] bg-[#0a0a05] transition-all duration-500 ${
              openPlan === "starter" ? "lg:translate-y-0" : ""
            }`}
          >
            <div className="flex items-center justify-between p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                  <Trophy className="h-5 w-5 text-black" />
                </div>
                <h3 className="text-lg font-medium text-white sm:text-xl">
                  1 Month Telegram Access
                </h3>
              </div>

              <button
                onClick={() => handleToggle("starter")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {openPlan === "starter" ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>

            <div className="px-6 pb-6">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-medium tracking-tight text-white">$20</span>
              </div>
              <p className="mt-2 text-sm text-white/45">1 Month • Full Access</p>
            </div>

            <div
              className={`grid transition-all duration-500 ${
                openPlan === "starter" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/5 px-6 py-5">
                  <div className="space-y-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                            <Icon size={16} className="text-[#f5c20b]" />
                          </div>
                          <p className="text-xs font-medium text-white">{feature.title}</p>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Month */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#f5c20b25] bg-[#0c0c06]">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-[#f5c20b]/20 blur-3xl" />
            <div className="relative z-10 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                  <Star className="h-5 w-5 text-black" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-medium text-white">3 Month Telegram Access</h3>
                  <span className="rounded-md bg-[#f5c20b]/15 px-2 py-1 text-[9px] font-medium uppercase text-[#f5c20b]">
                    Most Popular
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-medium text-white">$50</span>
                </div>
                <p className="mt-2 text-sm text-white/45">3 Months • Full Access</p>
              </div>

              <div className="mt-8 space-y-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                        <Icon size={16} className="text-[#f5c20b]" />
                      </div>
                      <p className="text-xs font-medium text-white">{feature.title}</p>
                    </div>
                  );
                })}
              </div>

              <button className="mt-7 w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
                Get Started
              </button>
            </div>
          </div>

          {/* 6 Month */}
          <div className="rounded-[22px] border border-[#f5c20b18] bg-[#0a0a05]">
            <div className="flex items-center justify-between p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fff36a] to-[#f5b900]">
                  <Crown className="h-5 w-5 text-black" />
                </div>
                <h3 className="text-lg font-medium text-white sm:text-xl">
                  6 Month Telegram Access
                </h3>
              </div>
              <button
                onClick={() => handleToggle("enterprise")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {openPlan === "enterprise" ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>

            <div className="px-6 pb-6">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-medium tracking-tight text-white">$60</span>
              </div>
              <p className="mt-2 text-sm text-white/45">6 Months • Full Access</p>
            </div>

            <div
              className={`grid transition-all duration-500 ${
                openPlan === "enterprise" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/5 px-6 py-5">
                  <div className="space-y-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#15150d]">
                            <Icon size={16} className="text-[#f5c20b]" />
                          </div>
                          <p className="text-xs font-medium text-white">{feature.title}</p>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#f5b900] via-[#ffe75c] to-[#ffd21a] py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}