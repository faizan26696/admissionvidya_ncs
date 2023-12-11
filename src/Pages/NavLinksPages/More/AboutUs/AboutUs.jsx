import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../../../Components/HomePageLayoutSections/ContactForm";
import ReviewsCard from "./ReviewsCard";
import FeaturesSection from "./FeaturesSection";

const AboutUs = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-cover bg-top bg-no-repeat h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>

        <div className="absolute inset-0 bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 text-center flex flex-col justify-center items-center">
          {/* Content */}
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Who we are
            </h2>

            <p className="max-w-lg text-white/90 mt-6 block text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                to="/your-discover-more-route" // Replace with the actual route
                className="inline-block rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div class="text-center p-8">
          <h2 className="text-blue-600 text-2xl pb-[2rem] sm:text-3xl py-6 font-bold ">
            Why to choose US?
          </h2>

          <div class="flex flex-wrap items-center mt-20 sm:text-left text-center">
            <div class="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="gem"
                class="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Why Choose Us?
              </h3>
              <p className="sm:text-[1rem] text-start text-[0.8rem] text-gray-600 mt-6">
                Choose us for your educational journey because we offer
                comprehensive admission services, guiding you through each step.
                Our experienced team provides expert career counseling to align
                your academic choices with your career goals. Clear doubts
                through our supportive sessions, ensuring clarity and
                confidence. Beyond admission, we offer ongoing guidance and
                assurance for a successful academic journey. With a commitment
                to 100% trust and reliability, we aim to be your dedicated
                partner in achieving your educational aspirations.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-20 sm:text-left text-center">
            <div class="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHMlMjBndWlkYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="bulk editing"
                class="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                What we do?
              </h3>
              <p className="sm:text-[1rem] text-start text-[0.8rem] text-gray-600 mt-6">
                At our educational admission services, we specialize in guiding
                individuals through every aspect of their academic journey. From
                assisting in the admission process, providing expert career
                counseling, and hosting doubt-clearing sessions, we ensure a
                seamless transition into higher education. Our commitment
                extends beyond admission, offering continuous guidance and
                assurance throughout the academic path. Our services are founded
                on a bedrock of trust and reliability, emphasizing a dedicated
                partnership to support individuals in achieving their
                educational aspirations. Choose us for a comprehensive and
                trustworthy approach to navigating the complexities of
                educational advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <ReviewsCard />
      {/* Career Counseling Component */}
      <ContactForm />
    </div>
  );
};

export default AboutUs;
