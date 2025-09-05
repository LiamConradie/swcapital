import React from 'react';
import { CheckCircle, Users, Shield, Clock, Database, ArrowRight, MessageCircle, UserCheck, Zap, FolderOpen, BookOpen, Mail, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';

const Home = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

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

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: 'Tell us what tasks you need handled',
      description: 'Share your specific admin challenges and requirements with our team'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: 'Meet and confirm your Virtual Administration Assistant',
      description: 'Get matched with the perfect assistant for your business needs'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Start working together in as little as 24 hours',
      description: 'Begin delegating tasks and see immediate results'
    }
  ];

  const services = [
    {
      icon: <FolderOpen className="w-6 h-6 text-blue-600" />,
      title: 'Implement robust filing systems',
      description: 'Organize your digital and physical documents efficiently'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: 'Create a company manual',
      description: 'Document your processes and procedures systematically'
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: 'Data entry & process audits',
      description: 'Ensure accuracy and efficiency in your data management'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email and diary management',
      description: 'Keep your communications and schedule organized'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'CRM management & customer service',
      description: 'Maintain strong relationships with your clients'
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      title: 'Processing customer orders',
      description: 'Handle order fulfillment and customer inquiries'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'You can start working with your Virtual Administration Assistant in as little as 24 hours after our initial consultation.'
    },
    {
      question: 'Do I always work with the same assistant?',
      answer: 'You\'ll be assigned a dedicated Success Manager who understands your business, plus access to our backup team for seamless coverage.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Absolutely. Our staff are DBS-checked, we\'re GDPR-compliant, and we use secure software systems to protect your confidential information.'
    },
    {
      question: 'What if my assistant is unavailable?',
      answer: 'Our team structure ensures seamless cover from our wider team of trained assistants, so your work never stops.'
    },
    {
      question: 'Is it flexible?',
      answer: 'Yes, we offer flexible arrangements with no long-term commitments. Scale up or down based on your business needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              The Fastest Way to Get Admin Off Your Plate
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple steps to unlock efficiency and focus on what matters most
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* What We Do Section */}
          <div className="bg-gray-50 p-12 rounded-2xl mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                What We Do
              </h3>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our Virtual Administration Assistants handle a wide range of tasks to keep your business running smoothly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-blue-100 p-8 rounded-xl">
              <p className="text-lg text-slate-700 font-medium">
                With a Virtual Administration Assistant, you'll never again lose important data – 
                while saving time and money in the process.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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