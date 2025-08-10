import { Link } from "react-router";
import SectionTitle from "../sectionTitle/SectionTitle";

const AboutPlatform = () => {
  return (
    <section className="bg-base-100 mt-16" id="about">
      <div className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between">
        {/* Text Section */}
        <div>
          <SectionTitle>🏃 About the Platform</SectionTitle>
          <p className="text-lg text-base-content mb-6">
            The{" "}
            <span className="font-semibold">Marathon Management System</span>
            is a complete event management solution designed for marathon
            organizers, runners, and volunteers. It simplifies every stage of a
            marathon — from registration to race day tracking — all in one
            platform.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-4 text-base">
            <li>
              <strong>Easy Registration:</strong> Sign up online in just a few
              clicks.
            </li>
            <li>
              <strong>Live Race Tracking:</strong> Real-time participant
              progress updates.
            </li>
          </ul>

          <Link
            to="/about_us"
            className="inline-block bg-primary hover:primary text-black px-5 py-2 rounded-lg shadow transition duration-300"
          >
            Read More →
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=800&auto=format&fit=crop"
            alt="Marathon Event"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutPlatform;
