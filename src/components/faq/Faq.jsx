const Faq = () => {
  return (
    <div className="my-20 p-4 lg:px-10">
      <section className="bg-base-100 text-base-content shadow-lg rounded-lg">
        <div className="flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-5xl font-semibold sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What is the minimum age to participate in a marathon?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Most marathons require participants to be at least 18 years old
                on the day of the event. However, shorter distance runs (like 5K
                or 10K) may allow younger runners with parental consent.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How should I prepare for my first marathon?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Start training at least 12–16 weeks before the race. Gradually
                increase your running distance, eat a balanced diet, stay
                hydrated, and take proper rest. Also, wear comfortable running
                shoes and gear you've tested during training — not something new
                on race day.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What should I bring on marathon day?
              </summary>
              <ul className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                <li>Your bib number/registration </li>
                <li>Comfortable running shoes & clothes</li>
                <li>Water bottle or hydration pack</li>
                <li>Snacks or energy gels</li>
                <li>A positive mindset and excitement!</li>
              </ul>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
