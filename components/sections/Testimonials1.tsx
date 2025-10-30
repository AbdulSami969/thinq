"use client";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const testimonials = [
  {
    logo: "/assets/imgs/brands/brands-1/menni.avif",
    text: "I had an excellent experience working with Recto Team. Their deep knowledge of Next.js and Prismic, combined with their proactive communication, made the entire project seamless. The work was delivered on time and exceeded expectations in terms of quality and attention to detail. I highly recommend them for anyone looking for reliable and skilled web developers",
    avatar: "/assets/imgs/testimonials/testimonials-1/robert.avif",
    name: "Robert Hiram",
    position: "CTO, Spjalmenni",
    country: {
      name: "Iceland",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IS.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/1ststep.svg",
    text: "Working with Abdul was a great experience! He’s a highly skilled MERN stack developer with deep knowledge of React, Node.js, and MongoDB. He quickly understood our project needs and built a seamless, scalable solution. His clear communication and proactive approach made the collaboration smooth and hassle-free. Abdul provided valuable suggestions that improved functionality and user experience. His problem-solving skills and attention to detail really stood out. I highly recommend him and would love to work with him again!",
    avatar: "/assets/imgs/testimonials/testimonials-1/null.png",
    name: "Sarah Al Rashid",
    position: "Founder, 1stSteps",
    country: {
      name: "Saudia Arabia",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/webdog.webp",
    text: "I really enjoyed working with Abdul Sami. It was the first time i have build a headless CMS website. Abdul talked me through the steps and the information required. At every stage he has talked me through the process. We communicate via Slack and have regular video meetings to discuss progress. He is on hand to answer any questions I have. I am delighted with the end product and continue to work together.",
    avatar: "/assets/imgs/testimonials/testimonials-1/matt.webp",
    name: "Matt Webb",
    position: "Founder, Web Dog",
    country: {
      name: "United Kingdom",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1763.png",
    text: "I recently had the pleasure of working with Abdul and his team on the development of a new website, and I am thoroughly impressed with the experience and the results. From start to finish, the collaboration was both professional and fruitful. Abdul demonstrated exceptional expertise by proposing the best technology stack for our project. The structure he organized was not only efficient but also scalable, ensuring that our site could grow alongside our business needs. His technical acumen was evident in every aspect of the project...",
    avatar: "/assets/imgs/testimonials/testimonials-1/Evgheni.jpeg",
    name: "Evgheni Silantiev",
    position: "Senior Cloud Engineer",
    country: {
      name: "Maldova, Europe",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Abdul goes above and beyond to deliver features and functionality that push our project forward. He's very reliable, making sure to show up on time to daily stand up meetings. He has demonstrated solid experience with Sanity cms and has delivered quality code as a full stack next.js developer.",
    avatar: "/assets/imgs/testimonials/testimonials-1/Chriss.jpeg",
    name: "Christopher Torres",
    position: "Founder, Marketeq Digital",
    country: {
      name: "United States",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/webdog.webp",
    text: "It is a pleasure working with Abdul, he is proactive with communication and always ready to recommend a meeting. The goals are clear and he has gone above and beyond to deliver",
    avatar: "/assets/imgs/testimonials/testimonials-1/matt.webp",
    name: "Matt",
    position: "Founder, Web Dog",
    country: {
      name: "United Kingdom",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1761.png",
    text: "Abdul is amazing! He helped me bring my code to Sanity quickly and professionally. His skills are impressive, and he communicates clearly throughout the process. Highly recommend working with him!",
    avatar: "/assets/imgs/testimonials/testimonials-1/marcb.jpg",
    name: "Marc",
    position: "Co-Founder, Paperjetai",
    country: {
      name: "Germany",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/periodiq.svg",
    text: "I had the pleasure of working with Abdul Sami, and I’m beyond impressed with the stunning Jamstack website he created using Next.js. His technical expertise in JavaScript and Next.js truly shines through, making him a true Jamstack expert. From design to development, everything was delivered exactly as I envisioned. The whole experience was incredibly smooth and friendly, with Sami exceeding my expectations at every step. His attention to detail and deep understanding of modern web technologies amazed me, and I couldn’t be happier with the final result. Highly recommend working with him",
    avatar: "/assets/imgs/testimonials/testimonials-1/nicola boldrini.webp",
    name: "Nicola Boldrini",
    position: "Manager, FinchTrade",
    country: {
      name: "Italy",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/periodiq.svg",
    text: "Abdul is a great professional with deep expertise in several area of web development. If you want a reliable partner for your project you can definitely count on him for everything from choosing right infrastructure to build the software :) will work with him in the future.",
    avatar: "/assets/imgs/testimonials/testimonials-1/nicola boldrini.webp",
    name: "Nicola Boldrini",
    position: "Manager, FinchTrade",
    country: {
      name: "Italy",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Excellent work ethic, he shows up on time and gets the job done without delay. Highly recommended that you work with this developer if you care about deadlines.",
    avatar: "/assets/imgs/testimonials/testimonials-1/Chriss.jpeg",
    name: "Christopher Torres",
    position: "Founder, Marketeq Digital",
    country: {
      name: "United States",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1763.png",
    text: "Abdul and his team consistently deliver high-quality work with attention to detail and a strong commitment to meeting expectations. This is our second project with Abdul, and once again, he has ensured smooth collaboration while addressing all of our requirements with care. He is a highly skilled engineer, and his work and management are truly impressive. We have worked with Abdul on new feature implementation and look forward to continuing our long-term collaboration with him.",
    avatar: "/assets/imgs/testimonials/testimonials-1/Ion.jpeg",
    name: "Ion Draganel",
    position: "Senior Developer",
    country: {
      name: "Moldova",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Abdul goes above and beyond to make sure the task is completed on time and within scope. he is working with their team to work on advanced cms functionality and his work speaks for itself. We are continuing to work with Abdul on a regular basis.",
    avatar: "/assets/imgs/testimonials/testimonials-1/Chriss.jpeg",
    name: "Christopher Torres",
    position: "Founder, Marketeq Digital",
    country: {
      name: "United States",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "He tried to understand my needs very well with very meticulous and detailed questions in a proactive manner. he also carried out the task of guiding in the analysis of the problems and contextualised the task required in the project. Polite and competent web developer. A great job!",
    avatar: "/assets/imgs/testimonials/testimonials-1/Rino.png",
    name: "Aracun",
    position: "Senior Develoepr",
    country: {
      name: "Italy",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1764.png",
    text: "Abdul is an excellent person to work with and very professional. I hope to work with him again on many more projects.",
    avatar: "/assets/imgs/testimonials/testimonials-1/Tomas.jpg",
    name: "Tomas",
    position: "Founder, Citizens of Wild",
    country: {
      name: "France",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/swiss.png",
    text: "I started with a big project request that was difficult to managed for me. Upon their request, we divided the project into smaller, more manageable sections with the help of their expertise, it became easier for me to grasp each component. chunking was helpful and the outcome was truly remarkable.",
    avatar: "/assets/imgs/testimonials/testimonials-1/Ikfiduciaire.webp",
    name: "lkfiduciaire",
    position: "Founder, Swiss Backup",
    country: {
      name: "Switzerland",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Abdul is a very responsible developer and very prompt to reply your questions",
    avatar: "/assets/imgs/testimonials/testimonials-1/clearify.webp",
    name: "Henry",
    position: "Founder, ToolMarket HK",
    country: {
      name: "Hong Kong",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/HK.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Abdul did an amazing job! Delivered super fast! He was able to take my idea and run with it, making great suggestions and going the extra mile by adding functionality that I didn't think of. It's always a pleasure working with Abdul!",
    avatar: "/assets/imgs/testimonials/testimonials-1/null.png",
    name: "Cameron Matthies",
    position: "Marketing Manager, Milan Direct",
    country: {
      name: "Australia",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Abdul did yet another amazing job! He's got such excellent skills for both design and development. He likes to get a deep understanding of the requirements and well and truely above and beyond to make sure he's successfully done his job well.",
    avatar: "/assets/imgs/testimonials/testimonials-1/null.png",
    name: "Cameron Matthies",
    position: "Marketing Manager, Milan Direct",
    country: {
      name: "Australia",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "Abdul did another amazing piece of work! He really tries to understand the requirements by asking many great questions, doing thorough researching and offering different suggestions and versions to choose from. I can't recommend him enough, he's that good! Thanks",
    avatar: "/assets/imgs/testimonials/testimonials-1/null.png",
    name: "Cameron Matthies",
    position: "Marketing Manager, Milan Direct",
    country: {
      name: "Australia",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
    },
  },
  {
    logo: "/assets/imgs/brands/brands-1/Frame 1760.png",
    text: "What an amazing experience! Abdul was amazing! He asked a lot of great questions to make sure he completely understood. He also made some great suggestions that help really improve the project. The end result was perfect! I'll be working with Abdul in the future.",
    avatar: "/assets/imgs/testimonials/testimonials-1/null.png",
    name: "Cameron Matthies",
    position: "Marketing Manager, Milan Direct",
    country: {
      name: "Australia",
      flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg",
    },
  },
];
export default function Testimonials1() {
  return (
    <>
      <section id="testimonials" className="section-testimonials-1 position-relative pt-120 pb-120 bg-900 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="ds-3 mt-3 mb-3 text-primary">Client's Testimonials</h3>
              <span className="fs-5 fw-medium text-200">
                I believe that working hard and trying to learn every day will make me
                <br />
                improve in satisfying my customers.
              </span>

              <div className="row mt-8">
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                  <Masonry columnsCount={3}>
                    {testimonials.map((testimonial, index) => (
                      <div className="m-2" key={index}>
                        <div className="bg-white card-testimonial-1 py-4 px-3 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative">
                          <div className="mb-2 logo">
                            <img src={testimonial.logo} width="250" alt="logo" />
                          </div>
                          <div className="d-flex my-4">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="ri-star-fill fs-7 text-primary" />
                            ))}
                          </div>
                          <h6 className="mb-4">"{testimonial.text}"</h6>
                          <Link href="/#" className="d-flex align-items-center">
                            <img className="icon_65 avatar" src={testimonial.avatar} alt={testimonial.name} />
                            <h6 className="ms-2 mb-0">
                              {testimonial.name} <span className="fs-6 fw-regular">- {testimonial.position}</span>
                              <br />
                              <div className="d-flex align-items-center">
                                <img alt={testimonial.country.name} src={testimonial.country.flag} className="mr-2" width={23} />
                                <p className="ms-2 mb-0">{testimonial.country.name}</p>
                              </div>
                            </h6>
                          </Link>
                          <div className="position-absolute top-0 end-0 m-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                              <g clipPath="url(#clip0_551_13914)">
                                <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                                <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                              </g>
                              <defs>
                                <clipPath>
                                  <rect width={52} height={52} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 ps-10 d-none d-md-block">
          <img className="position-relative z-1" src="/assets/imgs/testimonials/testimonials-1/man.png" alt="man" />
          <div className="position-absolute top-50 start-50 translate-middle z-0 mt-5">
            <img className="ribbonRotate" src="/assets/imgs/testimonials/testimonials-1/decorate.png" alt="" />
          </div>
        </div> */}
      </section>
    </>
  );
}
