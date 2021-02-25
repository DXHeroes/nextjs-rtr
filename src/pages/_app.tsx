import type { AppProps } from 'next/app';
import '../assets/styles/main.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
