import React from 'react';
import Image from 'next/image';

const WorkGrid = () => {
  const workItems = [
    {
      id: 1,
      title: "Saved.gg",
      description: "Co-founded an AI startup in the content-advertisement vertical with 3,000+ users. Raised $100k pre-seed at $10M valuation.",
      image: "/ascii-saved.png",
    },
    {
      id: 2,
      title: "Healthcare Ops",
      description: "Built a technician log analysis tool for CASE (cardiac assesment system) to improve troubleshooting efficiency.",
      image: "/ascii-CASE.png",
    },
    {
      id: 3,
      title: "Medical Imaging AI",
      description: "Trained a DenseNet-based fracture detection model (97% accuracy), and helped benchmark MSOE's supercomputer for AI use.",
      image: "/ascii-medical-imaging-ai.png",
    },
    {
      id: 4,
      title: "Recruiting Automation",
      description: "Developed a Python-based tool to streamline candidate selection for recruiters, replacing the need for external hiring support.",
      image: "/ascii-recruitment.png",
    }
  ];

  return (
    <section className="bg-[#f5f5f5] mx-4 md:mx-8 lg:mx-36  border-gray-200">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
          {workItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-white ${
                index === 0 ? '' : ' border-gray-200'
              } ${
                index < 2 ? '' : 'border-t border-gray-200'
              }`}
            >
              {/* Image Section */}
              <div className="h-72 bg-gray-100 relative">
                <Image
                  src={item.image}
                  alt={`${item.title} illustration`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              
              {/* Separator Line */}
              <div className="h-px bg-gray-200"></div>
              
              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-lg font-neue-montreal font-medium mb-3 text-black">{item.title}</h3>
                <p className="text-gray-600 font-neue-montreal text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid; 