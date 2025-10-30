"use client";
import Link from "next/link";
import ThreeScene from "@/components/ThreeScene";
import { useState, useEffect } from "react";

export default function Home1() {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const titles = ["MVP Specialist", "FullStack Dev", "AI Engineer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === titles[currentIndex].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 150
    );
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, currentIndex]);

  const handleMouseEnter = (text: any, e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
    setTooltipText(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <section className="section-hero-1 position-relative pt-70 pb-120 overflow-hidden">
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <span className="text-dark">👋 Hi there, I'm Abdul Sami</span>
              <h1 className="ds-2 mb-3">
                aka Samdev <br />
                <span className="text-primary-1">
                  {titles[currentIndex].substring(0, subIndex)}
                  <span className="cursor">|</span>
                </span>
              </h1>
              {/* <p className="text-300 mb-6">I assist individuals and brands in achieving their objectives by creating and developing user-focused apps and interactive experiences.</p> */}

              <p className="text-400 mt-6 mb-3">Over 5 years of professional full-stack development experience, recognized as a Top Rated freelancer on Upwork and a Level 2 Seller on Fiverr.</p>
              <div className="d-flex gap-3 mb-5">
                <div className="brand-logo icon-xl icon-shape rounded-3 bg-900" onMouseEnter={(e) => handleMouseEnter("Upwork Top Rated", e)} onMouseLeave={handleMouseLeave}>
                  <img src="/assets/imgs/hero/hero-1/top-rated.svg" alt="Upwork top rated" />
                </div>
                <div className="brand-logo icon-xl icon-shape rounded-3 bg-900" onMouseEnter={(e) => handleMouseEnter("Fiverr Level 2", e)} onMouseLeave={handleMouseLeave}>
                  <img src="/assets/imgs/hero/hero-1/fiverlvl2.svg" alt="Fiverr level 2" />
                </div>
              </div>
              <Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
                <span>Hire me</span>
                <i className="ri-arrow-right-line ms-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-1 pl-10 position-absolute top-0 start-50 z-1 d-none d-md-block">
          {/* <ThreeScene /> */}
          <img src="/assets/imgs/hero/hero-1/main.png" alt="Fiverr level 2" />
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
      </section>

      {/* Custom Tooltip */}
      {showTooltip && (
        <div
          className="custom-tooltip"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          {tooltipText}
        </div>
      )}

      <style jsx>{`
        .custom-tooltip {
          position: fixed;
          transform: translateX(-50%) translateY(-100%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
          pointer-events: none;
          z-index: 1000;
          white-space: nowrap;
          animation: fadeIn 0.2s ease-in-out;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .custom-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-90%);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(-100%);
          }
        }

        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
