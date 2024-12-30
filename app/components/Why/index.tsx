import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Quality",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Communication",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Reliability",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
];

const solutions = [
  {
    title: "Interactive Games for Engagement",
    info: "Gamified Engagement Solutions brings gamification to your platform with simple, fun, and lightweight games like word finders, memory games, and puzzles. These games not only increase time spent on your app but also create frequent recall opportunities while enabling seamless upselling and cross-selling of products.",
    features: [
      "Lightweight and easy integration across platforms (web, Android, iOS)",
      "Cross-platform compatibility",
      "No high attention demand users stay engaged without losing focus on primary app features",
    ],
    benefits: [
      "Higher user retention and time-on-platform",
      "Opportunities for targeted brand advertising within games",
      "Cost-effective implementation",
    ],
    image: "./assets/why/game.png",
  },
  {
    title: "Automated Event Tracking (TrackSure)",
    info: "TrackSure transforms event tracking by automating validation and providing a centralized dashboard for seamless management. Replace manual tracking methods and eliminate data discrepancies to focus on insights that matter.",
    features: [
      "SDKs for real-time event validation",
      "Centralized event management dashboard",
      "Version control and detailed error reporting",
    ],
    benefits: [
      "Enhanced data accuracy and consistency",
      "Reduced manual workload",
      "Improved collaboration across teams",
    ],
    image: "./assets/why/track.png",
  },
  {
    title: "Cloud Infrastructure Simplification (MayaOps)",
    info: "MayaOps simplifies cloud operations with a unified platform for multi-cloud management, one-click deployments, and real-time monitoring. Manage databases, environments, and resources securely, all in one place.",
    features: [
      "Multi-cloud connectivity with AWS, GCP, and Azure",
      "Role-based access and secure VPC setups",
      "One-click application deployment",
    ],
    benefits: [
      "Streamlined operations and faster deployments",
      "Scalable and secure microservices management",
      "Continuous integration for multi-cloud environments",
    ],
    image: "./assets/why/ops.png",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20">
        {solutions.map((solution, idx) => (
          <div className="grid grid-cols-1 lg:grid-cols-2" key={idx}>
            {/* COLUMN-1 */}
            <div className="lg:-ml-64">
              <Image
                src={solution.image}
                alt="iPad-image"
                width={4000}
                height={900}
              />
            </div>

            {/* COLUMN-2 */}

            <div>
              <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
                {solution.title}
              </h3>
              <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
                {solution.info}
              </h4>

              <div className="flex">
                <div className="mt-10 basis-1/2">
                  <h4 className="text-2xl font-semibold">Features</h4>
                  {solution.features.map((feature, i) => (
                    <div className="mt-4 flex " key={i}>
                      <div className="rounded-full items-center justify-center bg-circlebg min-w-6 max-h-6">
                        <Image
                          src="/assets/why/check.svg"
                          alt="check-image"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="ml-2">
                        <h5 className="text-lg text-beach font-normal">
                          {feature}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 ml-1 basis-1/2">
                  <h4 className="text-2xl font-semibold">Benefits</h4>
                  {solution.benefits.map((benefit, i) => (
                    <div className="mt-4 flex" key={i}>
                      <div className="rounded-full items-center justify-center bg-circlebg min-w-6 max-h-6">
                        <Image
                          src="/assets/why/check.svg"
                          alt="check-image"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="ml-2">
                        <h5 className="text-lg text-beach font-normal">
                          {benefit}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
