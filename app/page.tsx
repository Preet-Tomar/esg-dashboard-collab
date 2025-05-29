import TitleSection from "./components/TitleSection"
import AboutSection from "./components/AboutSection"
import MetricsSection from "./components/MetricsSection"
import UploadSection from "./components/UploadSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TitleSection />
      <AboutSection />
      <MetricsSection />
      <UploadSection />
    </div>
  )
}

