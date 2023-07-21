import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-5 col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
              <img
                src="images/logo.jpg"
                width={65}
                height={65}
                alt="footer-logo"
              />
              {/* Text */}
              <p>Empowering Minds, Inspiring Futures: Board of Intermediate & Secondary Education Sukkur, Sindhi Pakistan
              </p>
            </div>
          </div>
          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Quick Links</h5>
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <Link href="/about">
                    <span>About eTreeks</span>
                  </Link>
                </li>
                <li>
                  <Link href="/categories-list">
                    <span>Courses Catalog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/reviews">
                    <span>Our Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <span>Premium Learning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <span>From the Blog</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Popular Categories</h5>
              {/* Footer Links */}
              <ul className="clearfix">
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Business English
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Software Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Finance &amp; Accounting
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Health and Fitness
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Office Productivity
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER NEWSLETTER FORM */}
          <div className="col-md-7 col-xl-3">
            <div className="footer-form mb-20">
              {/* Title */}
              <h5 className="h5-md">Stay in Touch</h5>
              {/* Newsletter Form Input */}
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Your Email Address"
                    required
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn-rose tra-rose-hover"
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label className="form-notification" />
              </form>
            </div>
          </div>
          {/* END FOOTER NEWSLETTER FORM */}
        </div>
        {/* END FOOTER CONTENT */}
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row">
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <p>© Copyright  by BISE Sukkur, Sindh-Pakistan. {new Date().getFullYear()}</p>
                </li>

                <li>
                  <h6>Powered By <span target={"_blank"} href="https://www.fastechsystem.com">
                    FasTech System
                  </span></h6>

                </li>
                <li>
                  <p className="last-li">
                    <Link href="#">
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                      >
                        | mail@bisesuksindh.edu.pk
                      </span>
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            {/* FOOTER SOCIALS LINKS */}
            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-twitter"
                    >
                      <i className="fab fa-twitter" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-google-plus"
                    >
                      <i className="fab fa-google-plus-g" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-tumblr"
                    >
                      <i className="fab fa-tumblr" />
                    </span>
                  </Link>
                </li>
                {/*
									<li><span href="#" class="ico-behance"><i class="fab fa-behance"></i></span></li>
									<li><span href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></span></li>
									<li><span href="#" class="ico-instagram"><i class="fab fa-instagram"></i></span></li>
									<li><span href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></span></li>
									<li><span href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></span></li>
									<li><span href="#" class="ico-youtube"><i class="fab fa-youtube"></i></span></li>
									<li><span href="#" class="ico-vk"><i class="fab fa-vk"></i></span></li>
									<li><span href="#" class="ico-yelp"><i class="fab fa-yelp"></i></span></li>
									<li><span href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></span></li>
								    */}
              </ul>
            </div>
          </div>
        </div>
        {/* END BOTTOM FOOTER */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
