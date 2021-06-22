import { useQuery } from "@apollo/client";
import React, { useCallback, useMemo, useState } from "react";
import { getCountryQuery } from "../graphql";
import { States } from "../States/States";

export const CountryCard = ({ name, code }) => {
  const { loading, error, data } = useQuery(getCountryQuery, {
    variables: {
      code,
    },
  });

  const [showStates, setShowStates] = useState(false);

  const country = useMemo(() => {
    if (data == null) return {};
    return data.country;
  }, [data]);

  const toggleShowStates = () => {
    setShowStates((s) => !s);
  };

  return (
    <div className="rounded-xl shadow-md bg-gray-50 p-6 mb-4">
      <div className="border-b-2 mb-2 p-2 flex items-end">
        {!loading && (
          <span className="text-xl sm:text-2xl pr-2">{country.emoji}</span>
        )}
        <h2 className="text-xl font-bold sm:text-2xl sm:truncate text-gray-700">
          {name}
        </h2>
        {!loading && (
          <span className="text-l sm:text-xl pl-2 text-gray-500">
            {country.native}
          </span>
        )}
      </div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <p>Capital: {country.capital}</p>
          <p>Prefix: +{country.phone}</p>
          <p>Currency: {country.currency}</p>
          <button
            onClick={toggleShowStates}
            className="text-blue-500 underline"
          >
            {!showStates ? "Show States" : "Hide States"}
          </button>
          {showStates && <States code={code} />}
        </div>
      )}
    </div>
  );
};
