import Link from "next/link";

const links = [
  {
    title: "Privacy & Terms.",
    href: "/faq",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const icons = [
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/ritmo_uy/",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/company/ritmo-eventos",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const CopyrightFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">

          </div>
          <div className="col-lg-4 order-lg-2 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit" }}
                href="https://instagram.com/heymorphe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Morphe Studio
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
