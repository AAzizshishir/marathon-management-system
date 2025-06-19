import { GrSecure } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";

const Plans = () => {
  return (
    <div className="container mx-auto my-20 p-4">
      <h1 className="text-5xl font-bold lg:text-6xl lg:font-extrabold lg:w-[700px] md:mb-4">
        Get More From Every Run With{" "}
        <span className="text-primary">Our Plans.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-base-100 text-base-content shadow-lg p-5 rounded-md">
          <div>
            <h2 className="text-4xl font-semibold my-2 italic">Easy Jogger</h2>
            <p className="text-sm">Perfect for casual runners and beginners.</p>
          </div>
          <div className="px-4 py-8 my-4 text-center rounded-md bg-gradient-to-b from-red-200 to-red-50">
            <h3 className="text-5xl font-black">29$</h3>
            <p className="my-3">USD/month or 320$/year</p>
            <button className="btn font-secondary w-full p-3 font-normal text-2xl tracking-wider bg-primary text-primary-content">
              Get Started
            </button>
            <small className="flex items-center justify-center gap-1 mt-4">
              {" "}
              <GrSecure /> Secure Payments Guaranteed
            </small>
          </div>
          <div className="my-4">
            <h3 className="text-3xl font-bold italic mt-4 mb-2">Benifits</h3>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                Access to community runs
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                1 event registration per month
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                Basic route tracking
              </li>
            </ul>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-primary text-primary-content shadow-lg p-5 rounded-md">
          <div>
            <h2 className="text-4xl font-semibold my-2 italic">Pro Runner</h2>
            <p className="text-sm">
              Great for runners building endurance and speed.
            </p>
          </div>
          <div className="px-4 py-8 my-4 text-center rounded-md bg-gradient-to-b from-yellow-200 to-yellow-100">
            <h3 className="text-5xl font-black">49$</h3>
            <p className="my-3">USD/month or 550$/year</p>
            <button className="btn font-secondary w-full p-3 font-normal text-2xl tracking-wider bg-primary text-primary-content">
              Get Started
            </button>
            <small className="flex items-center justify-center gap-1 mt-4">
              {" "}
              <GrSecure /> Secure Payments Guaranteed
            </small>
          </div>
          <div className="my-4">
            <h3 className="text-3xl font-bold italic mt-4 mb-2">Benifits</h3>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-black">
                  <FaCheck />{" "}
                </span>
                Unlimited event registrations
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-black">
                  <FaCheck />{" "}
                </span>
                Priority check-in at events
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-black">
                  <FaCheck />{" "}
                </span>
                Personalized training plans
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-black">
                  <FaCheck />{" "}
                </span>
                Medal tracking dashboard
              </li>
            </ul>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-base-100 text-base-content shadow-lg p-5 rounded-md">
          <div>
            <h2 className="text-4xl font-semibold my-2 italic">
              Elite Champion
            </h2>
            <p className="text-sm">
              Ideal for competitive runners preparing for races.
            </p>
          </div>
          <div className="px-4 py-8 my-4 text-center rounded-md bg-gradient-to-b from-red-200 to-red-50">
            <h3 className="text-5xl font-black">79$</h3>
            <p className="my-3">USD/month or 920$/year</p>
            <button className="btn font-secondary w-full p-3 font-normal text-2xl tracking-wider bg-primary text-primary-content">
              Get Started
            </button>
            <small className="flex items-center justify-center gap-1 mt-4">
              {" "}
              <GrSecure /> Secure Payments Guaranteed
            </small>
          </div>
          <div className="my-4">
            <h3 className="text-3xl font-bold italic mt-4 mb-2">Benifits</h3>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                VIP event access & hospitality
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                One-on-one coaching
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">
                  <FaCheck />{" "}
                </span>
                Early access to exclusive marathons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
