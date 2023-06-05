import type { AppProps } from 'next/app';
import '../styles/global.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import { ThemeProvider } from 'next-themes';
import Layout from '@/Layouts/Layout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider
         attribute='class'
         disableTransitionOnChange={true}
         defaultTheme='system'
         enableSystem={true}>
         <GlobalContextProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </GlobalContextProvider>
      </ThemeProvider>
   );
}
