import Head from "next/head";
import Banner from "../components/Banner/banner";
import Header from "../components/Header/header";
import SmallCard from "../components/Cards/SmallCard";
import MedCard from "../components/Cards/MedCard";
import LargeCard from "../components/Cards/LargeCard";
import Footer from "../components/Footer/Footer";
export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Home&Stay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px 16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 ml-6">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8"> Stay AnyWhere </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }) => (
              <MedCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
          description="wishlist curated by Home&Stay"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
