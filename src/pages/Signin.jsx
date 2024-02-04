import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Signin Page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <input required placeholder="Email : " type="email" />
          <input required placeholder="Password : " type="password" />
          <button>Sign in</button>
          <p className="account">
            Don't have an account <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
