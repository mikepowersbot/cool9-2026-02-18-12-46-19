import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Cool9</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cool9 is dedicated to creating innovative digital experiences that inspire and empower users. 
          We believe in building technology that is not only powerful but also accessible and enjoyable to use. 
          Our mission is to deliver high-quality solutions that make a real difference in people's lives.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded in 2024, Cool9 started as a small team of passionate developers with a shared vision 
          of creating exceptional web applications. From our early days experimenting with new frameworks 
          to our current production-ready platform, we've always prioritized user experience and code quality. 
          Over the years, we've grown our expertise in modern web technologies, including React, Next.js, and 
          cutting-edge UI/UX design principles.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Alex Chen</h3>
            <p className="text-gray-600 mb-2">Founder & Lead Developer</p>
            <p className="text-gray-700">
              With over 10 years of experience in full-stack development, Alex leads the technical vision 
              and architecture of Cool9 projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Sarah Martinez</h3>
            <p className="text-gray-600 mb-2">UX/UI Designer</p>
            <p className="text-gray-700">
              Sarah brings creativity and user-centered design to every project, ensuring intuitive 
              and beautiful interfaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">David Kim</h3>
            <p className="text-gray-600 mb-2">DevOps Engineer</p>
            <p className="text-gray-700">
              David specializes in cloud infrastructure and CI/CD pipelines, keeping our deployments 
              smooth and reliable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700 leading-relaxed">
          We'd love to hear from you! Whether you have questions about our projects, want to collaborate, 
          or just want to say hello, feel free to reach out. Your feedback helps us improve and innovate.
        </p>
      </section>
    </div>
  );
}