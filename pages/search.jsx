import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard/InfoCard";
import Map from "../components/Map/Map";
const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main>
        <section className="flex-grow pt-14 px-6 ml-4">
          <p className="text-xs">
            300+ Stays -{range}- {noOfGuest} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button ">Cancellation Flexibility</p>
            <p className="button ">Type of place</p>
            <p className="button ">Price</p>
            <p className="button ">Rooms and Beds </p>
            <p className="button ">More filters</p>
          </div>
          <div className="flex flex-col max-w-7xl mx-auto">
            {searchResults.map(
              ({ img, title, location, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  title={title}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[60px]">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
