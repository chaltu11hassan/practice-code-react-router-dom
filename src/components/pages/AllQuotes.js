// import { Route } from "react-router-dom";

import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is fun!" },
];

const AllQuotes = () => {
  return <QuoteList quote={DUMMY_QUOTES} />;
};

export default AllQuotes;
