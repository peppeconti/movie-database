import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import useFetch from "../../hooks/useFetch";
import Spinner from "../Shared/Spinner";

const Backdrop = ({ closeModal }) => {
  return <div className={classes.back} onClick={closeModal} />;
};

const MovieInfo = ({ data, loading, result }) => {
  // console.log(data);

  return (
    <div>
      {result && (
        <div className={classes.spinner_result}>
          <Spinner />
        </div>
      )}
      {!result && (
        <div className={classes.message}>
          {loading && (
            <div className={classes.spinner}>
              <Spinner />
            </div>
          )}
          {!loading && data && (
            <div>
              <p className={classes.title}>{data.Title}</p>
              <p>Director: {data.Director}</p> 
              <p>Released: {data.Released}</p>
              <p>{data.Plot}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = ({ setModal, modalData, result }) => {
  const apikey = process.env.REACT_APP_API_KEY;
  const API = `https://www.omdbapi.com/?apikey=${apikey}&i=${modalData}&plot=full`;
  const { data, loading } = useFetch(API);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <MovieInfo
          data={data}
          loading={loading}
          closeModal={closeModal}
          result={result}
        />,
        portalElement
      )}
    </>
  );
};

export default Modal;
