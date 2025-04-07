import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-navigation">
          <div className="footer-navigation-icon">
            <Link href="/">
              <Image
                src="/assets/img/Logo-secondary.svg"
                height={50}
                width={216}
                alt="header-icon"
              />
            </Link>
          </div>
          <div className="footer-navigation-links">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/team">Team</Link>
              <Link href="/process">Process</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blogs">Blog</Link>
              <Link href="/contact-us">Contact us</Link>
            </nav>
          </div>
          <div className="go-to-top-btn">
            <p>Got To Top</p>
            <div className="upbutton">
              <Image
                src={"/assets/img/uparrow.svg"}
                width={14}
                height={18}
                alt="rightIcon"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contacts">
            <p>hello@nutritionist.com</p>
            <p>+91 91813 23 2309</p>
            <p>Marina Del Rey, California, USA</p>
          </div>
          <div className="footer-privacy_policy">
            <p>© 2025 Nutritionist. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
