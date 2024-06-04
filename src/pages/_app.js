// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import "../styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <header>
        <Link href="/">
          <h1>The Bubbly Baker</h1>
        </Link>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Made with 💛</p>
      </footer>
    </div>
  );
}

export default MyApp;
