import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { getStates } from "../graphql";

export const States = ({ code }) => {
  const { loading, error, data } = useQuery(getStates, {
    variables: {
      code,
    },
  });

  const states = useMemo(() => {
    if (!data) return [];
    return data.country.states;
  }, [data]);

  if (loading) return <p>Loading States...</p>;

  if (states.length === 0)
    return <p>Country may not use states as a regional marker...</p>;

  return (
    <ul className="flex flex-wrap p-2 border-2 rounded">
      {states.map((state) => (
        <li
          key={state.name}
          className="bg-blue-500 rounded-full py-1 px-2 mr-1 mb-1"
        >
          <p className="text-bold text-gray-50"> {state.name}</p>
        </li>
      ))}
    </ul>
  );
};
