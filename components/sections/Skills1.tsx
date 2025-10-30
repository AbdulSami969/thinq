"use client";
import Link from "next/link";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
export default function Skills1() {
  return (
    <>
      <section className="section-skills-1 section-skills-2  position-relative pb-150 bg-900">
        <div className="container">
          <div className="row">
            <div className="text-center mb-7">
              <h3 className="ds-3 mt-3 mb-3 text-primary">My Skills</h3>
              <span className="fs-5 fw-medium text-200">
                I specialize in transforming complex challenges into intuitive
                <br className="d-md-block d-none" />
                elegant solutions that elevate user experience and satisfaction.
              </span>
            </div>
            {/* <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-1.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Figma</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-2.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={82} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Adobe XD</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-3.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={76} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Illustrator</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-4.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={58} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Sketch </p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-5.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={60} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Photoshop</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-6.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={72} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Webflow</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-7.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={93} />%
                  </h3>
                  <p className="text-400 fw-medium text-uppercase">Framer</p>
                </div>
              </div>
            </div> */}
            <div className="row pb-5">
              <div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
                {/* Carausel Scroll */}
                <Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
                  <ul className="carouselTicker__list m-0">
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-4.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">NodeJS</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-1.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">NextJS</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-2.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Firebase</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-3.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">MongoDB</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-6.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">React</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-4.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">NodeJS</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-1.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">NextJS</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-2.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Firebase</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-3.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">MongoDB</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-6.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">React</span>
                    </li>
                  </ul>
                </Marquee>
              </div>
              <div className="col-lg-10 col-md-9 mx-auto overflow-hidden ">
                {/* Carausel Scroll */}
                <Marquee className="carouselTicker carouselTicker-left position-relative z-1">
                  <ul className="carouselTicker__list m-0 ">
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-7.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">VueJS</span>
                    </li>
                    {/* <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-8.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Angular</span>
                    </li> */}
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-9.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Laravel</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-5.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Tailwind</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-7.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">VueJS</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-8.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Angular</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-9.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Laravel</span>
                    </li>
                    <li className="carouselTicker__item mt-6">
                      <Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
                        <img src="assets/imgs/home-page-2/hero-1/icon-5.svg" alt="brand" />
                      </Link>
                      <span className="tool-tip">Tailwind</span>
                    </li>
                  </ul>
                </Marquee>
              </div>
            </div>
            {/* <div className="text-center pt-5">
              <p className="fs-5 text-200 mb-0">In addition, I have some programming knowledge such as: </p>
              <div className="d-flex justify-content-center gap-1">
                <Link href="/#" className="fs-5 fw-bold">
                  Mern Stack,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  Generative Ai,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  Jamstack,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  Javascript,
                </Link>
             
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
