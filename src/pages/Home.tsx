import React from 'react';
import { CheckCircle, Users, Shield, Clock, Database, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Flexible working arrangements',
      description: 'Support when you need it, scaled to your business demands'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Access to a whole team of assistants',
      description: 'Benefit from diverse skills and seamless coverage'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Fully vetted & highly trained staff',
      description: 'DBS-checked professionals you can trust'
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: 'Confidentiality agreements & secure data handling',
      description: 'Your business information stays protected'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
            alt="Professional at laptop with spreadsheets"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Outsourced Administration Assistants
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 font-light">
              Helping you see through the noise.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Service
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-8">
              Outsourced Administration Assistants
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Our Administration Assistants thrive on systems, organisation, and completed to-do lists. 
                Admin is essential in every business but is often pushed back or overlooked. We take on the 
                monotonous, time-consuming admin tasks so you can focus on the bigger picture.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Often more cost-effective than hiring an employee, our team supports you when you need us, 
                working quietly in the background to keep your business running smoothly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg"
                alt="Organized workspace"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Remote Business Support Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to free up your time and focus on growing your business? 
            Let our expert administration assistants handle the details.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg inline-flex items-center">
            Start Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;