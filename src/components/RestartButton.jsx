/* eslint-disable react/prop-types */
function RestartButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
}

export default RestartButton;
