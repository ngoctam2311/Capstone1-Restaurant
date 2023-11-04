import LandingPage from "./landing-page";
import Head from 'next/head';
export default function Home() {
    console.log("hihi");
    
  return (
    <>
      <Head>
        <title>Foodie Finder</title>
      </Head>
      {/* <main>{user ? <Dashboard /> : <LandingPage />}</main> */}
      <main>
        <LandingPage />
      </main>
    </>
  );
}
