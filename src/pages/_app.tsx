import { type AppType } from 'next/dist/shared/lib/utils';

import '@/styles/globals.css';
import WaveLayout from '@/Layout/WaveLayout';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WaveLayout>
      <Component {...pageProps} />
    </WaveLayout>
  );
};

export default MyApp;
