import Image from "next/image";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div
          className="mx-auto max-w-7xl pt-16 sm:pt-20 banner-image"
          style={{ backgroundImage: "url('./assets/banner/shapes.svg')" }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              Jigsaw Networks
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Smart Solutions for Engagement, Event Tracking, and Cloud
              Management
            </p>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Transforming digital experiences with Gamification, Automation,
              and Streamlined cloud operations.
            </p>
          </div>

          <div className="text-center mt-5">
            {/* <a href="#services">
              <button
                type="button"
                className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
              >
                See our services
              </button>
            </a> */}
            <a href="#services">
              <button
                type="button"
                className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
              >
                See our services
              </button>
            </a>
          </div>

          {/* <Image
            src={"./assets/banner/dashboard.svg"}
            alt="banner-image"
            width={1200}
            height={598}
          /> */}
        </div>
      </div>
    </main>
  );
};

export default Banner;
