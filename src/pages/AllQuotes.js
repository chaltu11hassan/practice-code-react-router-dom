// import { Route } from "react-router-dom";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Chaltu", text: "Learning React is fun!" },
  { id: "q2", author: "Lensa", text: "Learning React is fun!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
