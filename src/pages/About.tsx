import React from 'react';
import { Award, Users, Shield, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring exceptional service delivery.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'We work seamlessly with your team, integrating into your workflows as trusted partners.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Trust',
      description: 'Your business information is safe with our DBS-checked, fully confidential team.'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            A Team of Specialists, Committed to Excellence
          </h1>
          <p className="text-xl text-blue-100">
            Empowering businesses with expert UK-based administration support
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                About S&W Capital
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  S&W Capital helps businesses unlock efficiency with expert, UK-based Administration Assistants. 
                  We understand that administrative tasks are essential but often become overwhelming, taking valuable 
                  time away from strategic business growth.
                </p>
                <p>
                  Our assistants are fully DBS-checked, covered by confidentiality agreements, and trained to 
                  integrate seamlessly into your workflows. Every team member brings years of experience and 
                  a commitment to maintaining the highest professional standards.
                </p>
                <p>
                  We believe in flexible support, tailored to your needs, so you can stop being buried in admin 
                  and start focusing on growth. Whether you need ongoing support or project-based assistance, 
                  we adapt to your business requirements.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
                alt="Woman with laptop and phone with calendar"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Our Core Values
              </h3>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 p-12 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Why Businesses Choose S&W Capital
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Proven Track Record:</strong> Years of experience helping businesses streamline operations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Cost-Effective Solution:</strong> More affordable than hiring full-time staff
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Scalable Support:</strong> Grow or reduce services based on your needs
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>UK-Based Team:</strong> Local expertise with understanding of UK business practices
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Secure & Compliant:</strong> GDPR-compliant with robust data protection measures
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Quick Start:</strong> Begin receiving support in as little as 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 lg:py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Find out how we can help you
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to transform your business operations? Speak with one of our Success Managers 
            to discover how our administration assistants can support your growth.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg inline-flex items-center">
            Speak to a Success Manager
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;