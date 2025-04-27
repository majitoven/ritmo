// app/backoffice/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase/firebase";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/backoffice/projects");
    } catch (err) {
      setError("Credenciales incorrectas.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="error-page-content d-flex align-items-center justify-content-center position-relative"
           style={{
             minHeight: "100vh",
             background: "rgb(240 255 97 / 86%)",
             overflow: "hidden",
             paddingTop: "150px",
             paddingBottom: "150px",
           }}>
        <div className="container text-center" data-aos="fade-up">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h2
                className="font-recoleta tx-dark mb-30"
                style={{ fontSize: "48px" }}
              >
                Iniciar sesión
              </h2>
              <form onSubmit={handleSubmit} className="user-data-form mt-40 lg-mt-30">
                <div className="input-group-meta mb-30">
                  <label>Email</label>
                  <input 
                    type="email" 
                    placeholder="admin@ritmo.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>

                <div className="input-group-meta mb-25">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && <p className="text-danger mb-3">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30"
                  style={{ background: "#5A5BFF", color: "white" }}
                >
                  {loading ? "Ingresando..." : "Ingresar"}
                </button>
              </form>

              <div style={{ marginTop: "40px" }}>
                <Link href="/" className="go-back-btn fw-500 tran3s" style={{ color: "#5A5BFF" }}>
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background shape */}
        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="Background Shape"
          className="shapes shape-one w-100"
        />
      </div>
    </>
  );
};

export default Login;
