import React from 'react'

const Merits = () => {
  return (
    <section id='Merits' className="py-16 bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-8">
          Why Choose Us?
        </h2>
        <p className="text-2xl text-gray-800 mb-12">
          We bring unmatched expertise and passion to the maritime world. Here’s why we stand out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-semibold text-blue-600 mb-4">Technology</h3>
            <p className="text-gray-800">
            A pioneering leader in marine and shipbuilding, blending innovation with tradition. We specialize in cutting-edge technology and AI-driven solutions to enhance vessel design, construction, and management. Our tools optimize performance, safety, and sustainability across the entire lifecycle, empowering smarter maritime operations. Join us as we navigate the future of shipbuilding with precision and expertise.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-semibold text-blue-600 mb-4">Recycling</h3>
            <p className="text-gray-800">
            Committed to environmental stewardship, we also innovate in maritime waste management and recycling solutions. By integrating smart monitoring systems, eco-friendly materials, and circular economy practices, we help reduce marine pollution, optimize resource recovery, and promote sustainability at every stage of a vessel&apos;s lifecycle.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-semibold text-blue-600 mb-4">Procurement</h3>
            <p className="text-gray-800">
            We revolutionize maritime procurement with intelligent, data-driven platforms that streamline sourcing, reduce costs, and enhance transparency across the supply chain. By leveraging AI and digital procurement ecosystems, we ensure timely access to high-quality materials and components—supporting efficiency, compliance, and sustainability in every project
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Merits
