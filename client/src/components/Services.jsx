import SectionTitle from "./SectionTitle";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <SectionTitle
          title="Our Services"
          subtitle="Smart, reliable, and scalable logistics solutions designed to support businesses across Bangladesh."
        />

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card bg-base-200 hover:bg-base-300 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="card-body">
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-lg font-semibold">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-base-content/70">
                    {service.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
