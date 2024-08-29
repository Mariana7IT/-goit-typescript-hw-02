import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={s.container}>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#00BFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <button type="button" className={s.loadMoreBtn} onClick={onClick}>
          Load More
        </button>
      )}
    </div>
  );
};
export default Loader;
