const TipkaGraf = ({ setPrikaziGraf }) => {
  return (
    <>
      <button
        id="tipka"
        className="btn btn-primary"
        type="button"
        onClick={() => setPrikaziGraf(prevState => !prevState)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="currentColor"
          className="bi bi-bar-chart-line-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
        </svg>
      </button>
    </>
  );
};

export default TipkaGraf;