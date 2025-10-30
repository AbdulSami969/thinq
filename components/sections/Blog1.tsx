import Link from "next/link";

export default function Blog1() {
  return (
    <>
      <section className="section-blog-1 position-relative pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 me-auto">
              <h3 className="ds-3 mt-3 mb-3 text-primary">Recent blog</h3>
              <span className="fs-5 fw-medium text-200"> Explore the insights and trends shaping our industry </span>
            </div>
            <div className="col-lg-auto">
              <Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                View more
                <i className="ri-arrow-right-up-line" />
              </Link>
            </div>
          </div>
          <div className="row mt-8">
            <div className="col-lg-4">
              <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-3 overflow-hidden">
                    <img className="w-100" src="/assets/imgs/blog/blog-1/meta.png" alt="" />
                    <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="https://samiverse.hashnode.dev/metaverse-a-3d-internet" target="_blank">
                      Blockchain
                    </Link>
                    <Link href="https://samiverse.hashnode.dev/metaverse-a-3d-internet" target="_blank" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
                      <i className="ri-arrow-right-up-line text-dark" />
                    </Link>
                  </div>
                </div>
                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
                  <h5 className="blog-card__title">Metaverse A 3D Internet of Future</h5>
                  <p className="blog-card__description fs-6">What comes to your mind when you think of the word metaverse? </p>
                  <Link href="https://samiverse.hashnode.dev/metaverse-a-3d-internet" target="_blank" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-3 overflow-hidden">
                    <img className="w-100" src="/assets/imgs/blog/blog-1/Jamstack.png" alt="" />
                    <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="https://samiverse.hashnode.dev/jamstack-future-of-website" target="_blank">
                      Branding
                    </Link>
                    <Link href="https://samiverse.hashnode.dev/jamstack-future-of-website" target="_blank" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
                      <i className="ri-arrow-right-up-line text-dark" />
                    </Link>
                  </div>
                </div>
                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
                  <h5 className="blog-card__title">JAMSTACK: Future Of Website</h5>
                  <p className="blog-card__description fs-6">A contemporary web development architecture built on JavaScript...</p>
                  <Link href="https://samiverse.hashnode.dev/jamstack-future-of-website" target="_blank" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-3 overflow-hidden">
                    <img className="w-100" src="/assets/imgs/blog/blog-1/Development Trends.png" alt="" />
                    <Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="https://samiverse.hashnode.dev/the-future-of-web-development-trends-and-predictions-for-2024" target="_blank">
                      Mockup
                    </Link>
                    <Link href="https://samiverse.hashnode.dev/the-future-of-web-development-trends-and-predictions-for-2024" target="_blank" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
                      <i className="ri-arrow-right-up-line text-dark" />
                    </Link>
                  </div>
                </div>
                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
                  <h5 className="blog-card__title">The Future of Web Development</h5>
                  <p className="blog-card__description fs-6">Trends in web development are constantly shifting and developing.</p>
                  <Link href="https://samiverse.hashnode.dev/the-future-of-web-development-trends-and-predictions-for-2024" target="_blank" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
