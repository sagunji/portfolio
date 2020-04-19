import Head from 'next/head';

import { Logo } from '../assets/images/images';

export default function MainHead() {
  return (
    <Head>
      <title>
        Bienvenue sur ma page - Sagun Karanjit </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={Logo} />
    </Head>
  );
}
