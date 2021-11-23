import "../styles/globals.css";
import "../styles/Home.module.css"
import "tailwindcss/tailwind.css";
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
