import FlippingCard from "./FlippingCard"

const metrics = [
  {
    name: "Carbon Footprint",
    description: "Measures the total greenhouse gas emissions caused directly and indirectly by an organization.",
  },
  {
    name: "Water Usage",
    description: "Tracks the amount of water consumed by an organization in its operations and supply chain.",
  },
  {
    name: "Diversity & Inclusion",
    description: "Assesses the organization's efforts to create a diverse and inclusive workplace environment.",
  },
  {
    name: "Governance Score",
    description: "Evaluates the effectiveness of the organization's leadership, internal controls, and shareholder rights.",
  },
  {
    name: "Energy Efficiency",
    description: "Measures the organization's efforts to reduce energy consumption and improve overall energy efficiency.",
  },
  {
    name: "Waste Management",
    description: "Assesses the organization's practices in reducing, reusing, and recycling waste materials.",
  },
  {
    name: "Supply Chain Sustainability",
    description: "Evaluates the environmental and social impact of the organization's supply chain.",
  },
  {
    name: "Employee Health & Safety",
    description: "Measures the organization's commitment to maintaining a safe and healthy work environment for employees.",
  },
]

const MetricsSection = () => {
  return (
    <section id="metrics" className="bg-white">
      <div className="bg-green-100 w-full py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center">Key ESG Metrics</h2>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <FlippingCard key={metric.name} metricName={metric.name} metricDescription={metric.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection

