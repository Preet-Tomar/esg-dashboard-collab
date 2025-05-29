const TitleSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-green-700" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}></div>
      <h1 className="text-6xl font-bold text-white z-10">ESG Performance Dashboard</h1>
    </section>
  )
}

export default TitleSection

