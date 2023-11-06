import { Html, Head, Main, NextScript } from "next/document";
//You can also pass your custom document if you have one.

function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta name="google-site-verification" content="b99lGG0kKXsMA9Y75n4IJpHDo37XdtKfmzM62wGkdz0" /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/images/icon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
