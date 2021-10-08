import { AppProps } from 'next/app';
import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NextNprogress
        color="#4918a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
