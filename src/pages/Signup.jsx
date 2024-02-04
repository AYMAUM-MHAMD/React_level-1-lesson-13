import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>SignUp Page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <p style={{fontSize: "23px", marginBottom:"22px"}}>Create a new account <span>🧡</span></p>
          <input required placeholder="Email : " type="email" />
          <input required placeholder="Password : " type="password" />
          <button>Sign up</button>
          <p className="account">
            Already have an account <Link to="/signin">Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
