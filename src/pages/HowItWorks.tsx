import React, { useState } from 'react';
import { MessageCircle, UserCheck, Zap, FolderOpen, BookOpen, Database, Mail, Users, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';

const HowItWorks = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            The Fastest Way to Get Admin Off Your Plate
          </h1>
          <p className="text-xl text-blue-100">
            Simple steps to unlock efficiency and focus on what matters most
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
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
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              What We Do
            </h2>
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
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-blue-50 p-8 rounded-xl">
            <p className="text-lg text-slate-700 font-medium">
              With a Virtual Administration Assistant, you'll never again lose important data – 
              while saving time and money in the process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
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
      </section>
    </div>
  );
};

export default HowItWorks;