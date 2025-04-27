import Link from "next/link";

const links = [
  {
    title: "Links",
    links: [
      { title: "Home", url: "#hero" },
      { title: "Quiénes somos", url: "#sobre-nosotros" },
      { title: "Servicios", url: "#servicios" },
      { title: "Proyectos", url: "#proyectos" },
      { title: "Clientes", url: "#clientes" },
      { title: "Contacto", url: "#contacto" },
    ],
  },
];

const FooterContent = () => {
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="col-lg-4 col-sm-4 mb-30">
          <h5 className="footer-title fw-normal">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
