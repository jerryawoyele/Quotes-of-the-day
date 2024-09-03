const Newsletter = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage: "url(../../newsletter.jpg)",
          backgroundSize: "cover",
          width: "auto",
        }}
        className="bg-base-200 object-contain text-base-content p-10 min-h-screen"
      >
        <div >
          <form className="card glass w-96 h-fit py-8 px-6 rounded-md">
            <h6 className="card-title size-full font-lato text-base-100 text-6xl">Newsletter</h6>
            <h6 className="card-title size-full font-nerko text-yellow-600 justify-center mt-4 text-6xl">Stay in</h6>
            <h6 className="card-title size-full font-lato text-5xl justify-center ">the loop!</h6>
            <h6 className="card-title size-full font-lato font-light text-2xl mt-10 justify-center ">Get the Best Content Delivered Straight to Your Inbox</h6>
            <fieldset className="form-control w-80">
              <label className="label mt-2">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
