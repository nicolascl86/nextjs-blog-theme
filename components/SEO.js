import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="facebook-domain-verification" content="ztvy7x6f4c9hudlpaysrim812ntbsm" />
    </Head>
  );
}
