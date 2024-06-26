import React, { useState, useRef, useEffect } from "react";

import StarShape from "@svgs/StarShape";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { cn } from "@lib/utils";

import useOnScreen from "@hooks/useOnScreen";

import SplitText from "@lib/SpitText";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FirstSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#para", { type: "lines" });

      gsap.to(split.lines, {
        duration: 2,
        y: -20,
        opacity: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: document.getElementById("para"),
          toggleActions: "restart none none reset",
        },
      });
    }
  }, [reveal]);

  return (
    <section id="about-session" className="relative flex flex-col md:flex-row justify-between items-center gap-10">
      <img
        src="/images/dots.png"
        className="dark:hidden absolute left-[-25%] opacity-45 select-none"
        alt="dots"
      />
      <img
        src="/images/white-dots.png"
        className="hidden dark:flex absolute left-[-25%] opacity-25 select-none"
        alt="dots"
      />

      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center border border-black dark:border-[#252525] rounded-full p-5 w-[70px] h-[70px]">
            <span className="text-2xl special-font">01</span>
          </div>
          <p
            id="para"
            ref={ref}
            className={cn({ "text-4xl leading-1 opacity-0 is-reveal": reveal })}
          >
            IN MY <strong>{new Date().getFullYear() - 2018}</strong> YEARS OF{" "}
            <strong>PROGRAMMING</strong> I TURN IDEAS INTO{" "}
            <strong>AMAZING</strong> WEBSITES THROUGH THE WORLD OF{" "}
            <strong>CREATIVE</strong> AND{" "}
            <strong>
              INTERACTIVE IDEAS & DESIGN.
              <StarShape className="h-[20px] w-full mt-5 md:h-[50px] mx-auto" />
            </strong>
          </p>

          <div className="flex justify-start md:justify-end items-center">
            <div className="text-underline" id="hoverElement">
              <div className="flex items-center gap-3">
                <Link href="">Learn More </Link>
                <ArrowRight size={16}/>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full">
        <div className="bg-[#F8F9FA] dark:bg-[#2525251f] rounded-tl-[35%] rounded-br-[55%] rounded-bl-[35%] rounded-tr-[35%]">
          <img src="/images/statue.png" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
