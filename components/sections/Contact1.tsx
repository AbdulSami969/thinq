// app/contact/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          id: loadingToast,
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong", {
          id: loadingToast,
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        id: loadingToast,
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            style: {
              background: "#166534",
            },
          },
          error: {
            style: {
              background: "#991B1B",
            },
          },
        }}
      />

      <div className="container position-relative z-1">
        <h3 className="ds-3 mt-3 mb-3 text-primary">Get in touch</h3>
        <span className="fs-5 fw-medium text-200">I'm always excited to take on new projects and collaborate with innovative minds. If you have a project in mind or just want to chat about design, feel free to reach out!</span>
        <div className="row mt-8">
          <div className="col-lg-4 d-flex flex-column">
            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
              <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                <i className="ri-phone-fill text-primary fs-26" />
              </div>
              <div className="ps-3">
                <span className="text-400 fs-5">Phone Number</span>
                <h6 className="mb-0">+923-488-488-488</h6>
              </div>
              <Link href="tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>

            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
              <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                <i className="ri-mail-fill text-primary fs-26" />
              </div>
              <div className="ps-3">
                <span className="text-400 fs-5">Email</span>
                <h6 className="mb-0">abdulsami8777@gmail.com</h6>
              </div>
              <Link href="mailto:contact@william.design" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>

            {/* <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
              <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                <i className="ri-skype-fill text-primary fs-26" />
              </div>
              <div className="ps-3">
                <span className="text-400 fs-5">Skype</span>
                <h6 className="mb-0">WilliamDesignUX</h6>
              </div>
              <Link href="skype:WilliamDesignUX?add" className="position-absolute top-0 start-0 w-100 h-100" />
            </div> */}

            <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
              <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                <i className="ri-map-2-fill text-primary fs-26" />
              </div>
              <div className="ps-3">
                <span className="text-400 fs-5">Address</span>
                <h6 className="mb-0">Lahore, Pakistan</h6>
              </div>
              <Link href="https://maps.google.com" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>
          </div>

          <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3>Leave a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="name">
                        Your name <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control border rounded-3" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                    </div>

                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="email">
                        Email address <span className="text-primary">*</span>
                      </label>
                      <input type="email" className="form-control border rounded-3" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="contact.john@gmail.com" required />
                    </div>

                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="phone">
                        Your phone <span className="text-primary">*</span>
                      </label>
                      <input type="tel" className="form-control border rounded-3" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+01 234 567 89" required />
                    </div>

                    <div className="col-md-6">
                      <label className="mb-1 mt-3 text-dark" htmlFor="subject">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <input type="text" className="form-control border rounded-3" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="I want to contact for...." required />
                    </div>

                    <div className="col-12">
                      <label className="mb-1 mt-3 text-dark" htmlFor="message">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea className="form-control border rounded-3 pb-10" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message here...." required />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-gradient mt-3" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        <i className="ri-arrow-right-up-line ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
        <div className="wow img-custom-anim-top">
          <h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">Samdev</h3>
        </div>
      </div>
    </section>
  );
}
