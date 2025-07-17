export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Role",
      description: "Select whether you're a designer or brand manager after logging in.",
      image: "/images/role-selection.png", // Replace with your actual image path
      direction: "left"
    },
    {
      id: 2,
      title: "Create or Join Group",
      description: "Form a team or join an existing one to collaborate effectively.",
      image: "/images/group-creation.png", // Replace with your actual image path
      direction: "right"
    },
    {
      id: 3,
      title: "Collaborate on Flyers",
      description: "Upload content, receive feedback, and finalize the creative effortlessly.",
      image: "/images/collaboration.png", // Replace with your actual image path
      direction: "left"
    }
  ];

  return (
    <section className="py-16 bg-[#FDF6F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#800000] mb-4">
            How <span className="text-[#2C2C2C]">DesignSync</span> Works
          </h2>
          <div className="w-20 h-1 bg-[#800000] mx-auto mb-6"></div>
          <p className="text-lg text-[#7B6F66] max-w-2xl mx-auto">
            Simple steps to streamline your creative workflow
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`flex flex-col ${step.direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
            >
              {/* Text content */}
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center text-xl font-bold mr-4">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2C2C2C]">{step.title}</h3>
                </div>
                <p className="text-[#7B6F66] text-lg">{step.description}</p>
              </div>

              {/* Image placeholder - replace with actual image */}
              <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-[#f0f0f0]">
                <div className="bg-white p-8 flex items-center justify-center h-full min-h-[300px]">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📷</div>
                    <p className="text-[#7B6F66]">Visual of {step.title.toLowerCase()}</p>
                  </div>
                  {/* Actual implementation would use: */}
                  {/* <img src={step.image} alt={step.title} className="w-full h-auto object-cover" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}