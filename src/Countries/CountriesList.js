import { useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import { getCountriesQuery } from "../graphql";
import { CountryCard } from "./CountryCard";

export const CountriesList = () => {
  const { loading, error, data } = useQuery(getCountriesQuery);

  const countries = useMemo(() => {
    if (data == undefined) return [];
    const { countries } = data;
    return countries;
  }, [data]);

  return (
    <div>
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Countries
      </h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul className="p-6">
          {countries.map((country) => (
            <li key={country.code + "-" + country.name}>
              <CountryCard {...country} />
            </li>
          ))}
        </ul>
      )}
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};
