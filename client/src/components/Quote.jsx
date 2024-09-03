/* eslint-disable react/prop-types */
const Quote = (props) => {
  const { scrollingRef } = props;
  return (
    <div ref={scrollingRef} className="hero min-h-screen justify-center">
        <div className="card bg-base-100 w-fit shadow-xl max-lg:w-11/12 h-5/6 align-middle">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Quote;
