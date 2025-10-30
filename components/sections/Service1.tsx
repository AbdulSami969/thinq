import Link from "next/link";

export default function Service1() {
  return (
    <>
      <section id="services" className="section-service-1 pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12 me-auto">
              <h3 className="ds-3 mt-3 mb-3 text-primary-1">Who is Samdev?</h3>
              <i className="fs-10 fw-xl text-200 lene-h">MVP Specialist & Full-Stack Developer — I’m Abdul Sami (Samdev), a results-driven engineer with 5 + years of experience shipping high-impact Minimum Viable Products and scalable platforms. I specialize in the MERN stack, Jamstack, Next.js, and Generative AI, helping startups and enterprises accelerate growth with clean, optimized code and future-proof architecture. A Level 2 Seller on Fiverr and a Top-Rated freelancer on Upwork, I’ve delivered: KIPS LMS — supporting 30 000 + active learners, A company-wide ATS & job portal with article management, Estimation tools for a crane-manufacturing organization and Dozens of high-performance company websites My passion for readable, efficient code and seamless user experiences sets me apart, and I’ve earned the trust of clients across the USA, Australia, Iceland, Canada, and beyond. If you need a partner who turns ideas into polished MVPs—and then scales them with confidence—let's connect.</i>
            </div>
            {/* <div className="col-lg-auto">
              <Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                Get a Quote
                {/* <i className="ri-arrow-right-up-line" /> 
              </Link>
            </div> */}
          </div>
          {/* <div className="row mt-6 justify-content-between">
            <div className="col-12">
              <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-1.png">
                <div className="service-card-details d-lg-flex align-items-center">
                  <h3 className="service-card-title w-lg-50 w-100 mb-0">
                    <Link href="/work-single">
                      <span className="service-number">01.</span>
                      UI/UX Design
                    </Link>
                  </h3>
                  <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                    <p className="service-card-text my-3">
                      Designing visually stunning and user-friendly interfaces for web <br />
                      and mobile applications.
                    </p>
                    <div className="service-card-icon icon-shape ms-auto icon-md">{/* <i className="ri-arrow-right-up-line" /> </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-2.png">
                <div className="service-card-details d-lg-flex align-items-center">
                  <h3 className="service-card-title w-lg-50 w-100 mb-0">
                    <Link href="/work-single">
                      <span className="service-number">02.</span>
                      App Development
                    </Link>
                  </h3>
                  <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                    <p className="service-card-text my-3">
                      Mobile Development for as per your design <br />
                      iOS and Android platforms.
                    </p>
                    <div className="service-card-icon icon-shape ms-auto icon-md">{/* <i className="ri-arrow-right-up-line" /> </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="assets/imgs/services/services-1/img-4.png">
                <div className="service-card-details d-lg-flex align-items-center">
                  <h3 className="service-card-title w-lg-50 w-100 mb-0">
                    <Link href="/work-single">
                      <span className="service-number">04.</span>
                      Web Development
                    </Link>
                  </h3>
                  <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                    <p className="service-card-text my-3">
                      Crafting responsive and engaging websites that align with your <br />
                      brand and business goals.
                    </p>
                    <div className="service-card-icon icon-shape ms-auto icon-md">{/* <i className="ri-arrow-right-up-line" /></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-3.png">
                <div className="service-card-details d-lg-flex align-items-center">
                  <h3 className="service-card-title w-lg-50 w-100 mb-0">
                    <Link href="/work-single">
                      <span className="service-number">03.</span>
                      Brand Identity Design
                    </Link>
                  </h3>
                  <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                    <p className="service-card-text my-3">
                      Developing cohesive visual branding that resonates with your <br />
                      target audience.
                    </p>
                    <div className="service-card-icon icon-shape ms-auto icon-md">{/* <i className="ri-arrow-right-up-line" /> </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
