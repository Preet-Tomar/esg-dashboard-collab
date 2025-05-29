"use client"

import { useState } from "react"

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null)
  const [manualMetric, setManualMetric] = useState("")
  const [manualValue, setManualValue] = useState("")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleManualSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(`Submitted manual metric: ${manualMetric} with value: ${manualValue}`)
    setManualMetric("")
    setManualValue("")
  }

  return (
    <section id="upload-data" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-green-800">Upload Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">File Upload</h3>
            <input
              type="file"
              onChange={handleFileUpload}
              className="block w-full text-sm text-green-700
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-green-100 file:text-green-700
              hover:file:bg-green-200"
            />
            {file && <p className="mt-2 text-green-600">File selected: {file.name}</p>}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">Manual Input</h3>
            <form onSubmit={handleManualSubmit} className="space-y-4">
              <input
                type="text"
                value={manualMetric}
                onChange={(e) => setManualMetric(e.target.value)}
                placeholder="Enter ESG metric name"
                className="w-full p-2 border border-green-300 rounded"
                required
              />
              <input
                type="text"
                value={manualValue}
                onChange={(e) => setManualValue(e.target.value)}
                placeholder="Enter metric value"
                className="w-full p-2 border border-green-300 rounded"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UploadSection

