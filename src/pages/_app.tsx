import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/CarouselType1.css';
import '../styles/CeoMessage.css';
import '../styles/MessageSection.css';
import '../styles/Section.css';
import 'tailwindcss/tailwind.css';


function MyApp({ Component, pageProps }: AppProps) {
  // ここで Component と pageProps は適切に型付けされています。
  return <Component {...pageProps} />;
}

export default MyApp;
