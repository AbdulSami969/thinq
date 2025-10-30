"use client";
import Isotope from "isotope-layout";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timeout = setTimeout(() => {
        // Dynamically import isotope-layout on the client side
        import("isotope-layout").then((module) => {
          const Isotope = module.default;
          isotope.current = new Isotope(".masonry-active", {
            itemSelector: ".filter-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".filter-item",
            },
          });
        });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase");

  return (
    <>
      <div className="container">
        <div className="text-start">
          <div className="button-group filter-button-group filter-menu-active">
            <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
              All Projects
            </button>
            <button className={activeBtn("development")} onClick={handleFilterKeyChange("development")}>
              Web Development
            </button>
            <button className={activeBtn("design")} onClick={handleFilterKeyChange("design")}>
              Web Design
            </button>
            {/* <button className={activeBtn("ui")} onClick={handleFilterKeyChange("ui")}>
              UI/UX
            </button>
            <button className={activeBtn("app")} onClick={handleFilterKeyChange("app")}>
              App Dev
            </button> */}
          </div>
        </div>
        <div className="row masonry-active justify-content-between mt-6">
          <div className="grid-sizer" />
          <div className="filter-item col-lg-4 col-12 development " style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://marketeqdigital.com/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/Marketeq-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://marketeqdigital.com/" className="project-card-content">
                  <h4 className="fw-semibold">Marketeq Digital</h4>
                  <p>Web Development</p>
                </a>
                <a target="_blank" href="https://marketeqdigital.com/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://dev.marketeqdigital.com/job-profile">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/career Portal-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-content">
                  <h4 className="fw-semibold"> Career Portal</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://www.assiduous.solutions/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/assiduous-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-content">
                  <h4 className="fw-semibold">Assiduous Solutions</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="http://1ststeps.com.sa/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/1ststeps-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="http://1ststeps.com.sa/" className="project-card-content">
                  <h4 className="fw-semibold">1st Steps</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://www.webdog.marketing/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/webdog-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="http://1ststeps.com.sa/" className="project-card-content">
                  <h4 className="fw-semibold">Webdogs</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="http://menni.is/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/spjalmenni-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="http://1ststeps.com.sa/" className="project-card-content">
                  <h4 className="fw-semibold">Spjalmenni</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://paperjet.ai/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/paperjet-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-content">
                  <h4 className="fw-semibold">Paperjet</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development " style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://talent-hub.pages.dev/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/talenthub-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://talent-hub.pages.dev/" className="project-card-content">
                  <h4 className="fw-semibold">Talent Hub</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://talent-hub.pages.dev/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://engineersguildltd.com/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/eg-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://engineersguildltd.com/" className="project-card-content">
                  <h4 className="fw-semibold">Engineers Guild</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://engineersguildltd.com/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12  design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/swiss-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="" className="project-card-content">
                  <h4 className="fw-semibold">Swiss Backup</h4>
                  <p>Web Design </p>
                </a>
                <a target="_blank" href="" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/otto-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="" className="project-card-content">
                  <h4 className="fw-semibold">Auto Manufacturing</h4>
                  <p>Web Design & Web Development </p>
                </a>
                <a target="_blank" href="" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>

          <div className="filter-item col-lg-4 col-12 development design" style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://www.citizensofthewild.com/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/citizen-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://www.citizensofthewild.com/" className="project-card-content">
                  <h4 className="fw-semibold">Citizens of Wild</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.citizensofthewild.com/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development " style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://tools-market.vercel.app/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/tool-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://tools-market.vercel.app/" className="project-card-content">
                  <h4 className="fw-semibold">ToolMarket</h4>
                  <p> Web Development</p>
                </a>
                <a target="_blank" href="https://tools-market.vercel.app/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development " style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://downlight.vercel.app/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/downlight-min.png" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://downlight.vercel.app/" className="project-card-content">
                  <h4 className="fw-semibold">Downlights</h4>
                  <p> Web Design & Development</p>
                </a>
                <a target="_blank" href="https://downlight.vercel.app/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development " style={{ minHeight: "380px" }}>
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-2 p-3 bg-white">
              <a target="_blank" href="https://downlight.vercel.app/">
                <Image width={400} height={200} className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/dogpost-min.png" alt="The DOg Post" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://downlight.vercel.app/" className="project-card-content">
                  <h4 className="fw-semibold">Dog Post</h4>
                  <p> Web Design</p>
                </a>
                <a target="_blank" href="/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
