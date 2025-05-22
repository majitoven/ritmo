"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="main-page-wrapper">
          {children}
          {/* <ScrollToTop /> */}
        </div>

        {/* WhatsApp Button */}
        <FloatingWhatsApp
          phoneNumber="+598099489999"
          accountName="Ritmo"
          statusMessage="Te responderemos a la brevedad"
          chatMessage="Hola! ¿Cómo podemos ayudarte?"
          placeholder="Escribe tu mensaje…"
          allowClickAway
          notification={false}
          allowEsc
          avatar="/images/logo/logoRitmo2.png"
          buttonStyle={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 2000,
          }}
          chatboxStyle={{ zIndex: 2000 }}
        />
      </body>
      <style jsx global>{`
                .styles-module_whatsappButton__tVits {
                
                    background: var(--prime-ten) !important;
                    position: fixed !important;
                    bottom: 20px !important;
                    right: 20px !important;
                    z-index: 2000 !important;
                }

                .styles-module_whatsappButton__tVits::after{
                    animation: none !important;
                }
  
                /* Asegúrate también de que no haya overflow ocultando el chatbox */

                @media (max-width: 768px) {
                    .styles-module_whatsappButton__tVits {
                        width: 50px !important;
                        height: 50px !important;
                        z-index: 2000 !important;
                    }
                }
                
                .preloader {
                    background-color: #ffffff;
                    height: 100vh; /* Full viewport height */
                    width: 100vw; /* Full viewport width */
                    position: fixed;
                    top: 0;
                    left: 0;
                    margin: 0;
                    padding: 0;
                    z-index: 999999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                }
                
                .preloader.hidden {
                    opacity: 0;
                    pointer-events: none;
                }
                
                .preloader:after {
                    -webkit-animation: pulse 1s infinite linear;
                    animation: pulse 1s infinite linear;
                    background-image: url(/images/icons/preloaderNero.png);
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    content: "";
                    height: 50px; /* Smaller size */
                    width: 50px; /* Smaller size */
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%); /* Center using transform */
                    margin: 0;
                }
                
                .preloader:before {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    width: 100%;
                    text-align: center;
                    margin: 0 auto;
                    margin-top: 20px;
                    color: var(--theme-color-dark);
                    font-weight: 600;
                    font-size: 14px;
                    font-family: var(--title-font);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    -webkit-transition: none;
                    transition: none;
                }

                @keyframes pulse {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            `}</style>
    </html>
    
  );
}
