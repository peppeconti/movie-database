import { useState } from "react";
import classes from "./ResultsPage.module.css";
import Search from "../Shared/Search";
import Results from "./Results";
import Footer from "./Footer";

const ResultsPage = () => {
  // HOOKS
  const [page, setPage] = useState(1);

  return (
    <section className={classes.results__page}>
      <div className={classes.search__wrapper}>
        <Search setPage={setPage} />
      </div>
      <div className={classes.results__wrapper}>
        <Results setPage={setPage} page={page} />
      </div>
      <Footer />
    </section>
  );
};

export default ResultsPage;
