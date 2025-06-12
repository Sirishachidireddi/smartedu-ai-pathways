
import React, { useState } from 'react';

const CareerGuidance = ({ user }) => {
  const [selectedStream, setSelectedStream] = useState('');
  const [showAssessment, setShowAssessment] = useState(false);

  const careerStreams = {
    science: {
      title: "Science & Technology",
      color: "blue",
      careers: [
        { name: "Software Engineer", description: "Develop applications and systems", demand: "Very High", salary: "₹6-20 LPA" },
        { name: "Data Scientist", description: "Analyze data to extract insights", demand: "High", salary: "₹8-25 LPA" },
        { name: "Biotechnologist", description: "Apply biology to develop products", demand: "Moderate", salary: "₹4-12 LPA" },
        { name: "Environmental Scientist", description: "Study and protect environment", demand: "Growing", salary: "₹3-10 LPA" }
      ]
    },
    medical: {
      title: "Medical & Healthcare",
      color: "red",
      careers: [
        { name: "Doctor (MBBS)", description: "Diagnose and treat patients", demand: "Very High", salary: "₹8-50+ LPA" },
        { name: "Nurse", description: "Provide patient care and support", demand: "High", salary: "₹3-8 LPA" },
        { name: "Physiotherapist", description: "Help patients with physical therapy", demand: "High", salary: "₹4-12 LPA" },
        { name: "Medical Lab Technician", description: "Conduct laboratory tests", demand: "Moderate", salary: "₹2-6 LPA" }
      ]
    },
    engineering: {
      title: "Engineering & Technical",
      color: "orange",
      careers: [
        { name: "Civil Engineer", description: "Design infrastructure projects", demand: "Moderate", salary: "₹3-15 LPA" },
        { name: "Mechanical Engineer", description: "Design mechanical systems", demand: "Moderate", salary: "₹4-18 LPA" },
        { name: "Electrical Engineer", description: "Work with electrical systems", demand: "High", salary: "₹4-20 LPA" },
        { name: "Aerospace Engineer", description: "Design aircraft and spacecraft", demand: "Growing", salary: "₹6-25 LPA" }
      ]
    },
    commerce: {
      title: "Commerce & Business",
      color: "green",
      careers: [
        { name: "Chartered Accountant", description: "Handle financial accounts", demand: "High", salary: "₹6-30 LPA" },
        { name: "Business Analyst", description: "Analyze business processes", demand: "High", salary: "₹5-20 LPA" },
        { name: "Marketing Manager", description: "Develop marketing strategies", demand: "Moderate", salary: "₹4-18 LPA" },
        { name: "Financial Advisor", description: "Provide investment guidance", demand: "Growing", salary: "₹3-15 LPA" }
      ]
    },
    arts: {
      title: "Arts & Humanities",
      color: "purple",
      careers: [
        { name: "Psychologist", description: "Study human behavior", demand: "Growing", salary: "₹3-12 LPA" },
        { name: "Journalist", description: "Report news and events", demand: "Moderate", salary: "₹3-15 LPA" },
        { name: "Graphic Designer", description: "Create visual designs", demand: "High", salary: "₹2-10 LPA" },
        { name: "Teacher", description: "Educate students", demand: "High", salary: "₹2-8 LPA" }
      ]
    }
  };

  const assessmentQuestions = [
    {
      question: "What type of activities do you enjoy most?",
      options: [
        "Solving mathematical problems",
        "Helping people with their problems",
        "Creating and designing things",
        "Analyzing data and patterns"
      ]
    },
    {
      question: "Which subject interests you the most?",
      options: [
        "Mathematics and Physics",
        "Biology and Chemistry",
        "History and Literature",
        "Economics and Business"
      ]
    },
    {
      question: "What work environment appeals to you?",
      options: [
        "Laboratory or technical workspace",
        "Hospital or healthcare facility",
        "Office with creative freedom",
        "Field work and outdoor activities"
      ]
    }
  ];

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'Very High': return 'text-green-600 bg-green-100';
      case 'High': return 'text-blue-600 bg-blue-100';
      case 'Growing': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStreamColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      red: 'from-red-500 to-red-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Guidance Portal</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover your ideal career path based on your interests, skills, and market demand. 
          Get personalized recommendations for your future.
        </p>
      </div>

      {/* Career Assessment */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Career Assessment</h3>
            <p className="text-gray-600">Take our quick assessment to get personalized career recommendations</p>
          </div>
          <button
            onClick={() => setShowAssessment(!showAssessment)}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            {showAssessment ? 'Hide Assessment' : 'Start Assessment'}
          </button>
        </div>

        {showAssessment && (
          <div className="space-y-6 border-t pt-6">
            {assessmentQuestions.map((q, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-gray-900">{index + 1}. {q.question}</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {q.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      className="text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Get My Results
            </button>
          </div>
        )}
      </div>

      {/* Career Streams */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Explore Career Streams</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(careerStreams).map(([key, stream]) => (
            <button
              key={key}
              onClick={() => setSelectedStream(selectedStream === key ? '' : key)}
              className={`text-left p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
                selectedStream === key 
                  ? `bg-gradient-to-r ${getStreamColor(stream.color)} text-white` 
                  : 'bg-white hover:shadow-xl'
              }`}
            >
              <h4 className={`text-xl font-bold mb-2 ${
                selectedStream === key ? 'text-white' : 'text-gray-900'
              }`}>
                {stream.title}
              </h4>
              <p className={`text-sm ${
                selectedStream === key ? 'text-white opacity-90' : 'text-gray-600'
              }`}>
                {stream.careers.length} career options available
              </p>
            </button>
          ))}
        </div>

        {/* Selected Stream Details */}
        {selectedStream && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              {careerStreams[selectedStream].title} Careers
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              {careerStreams[selectedStream].careers.map((career, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="text-lg font-bold text-gray-900">{career.name}</h5>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDemandColor(career.demand)}`}>
                      {career.demand}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Expected Salary</span>
                    <span className="font-semibold text-green-600">{career.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Need More Guidance?</h3>
        <p className="text-lg opacity-90 mb-6">
          Our AI career counselor is available 24/7 to answer your questions and provide personalized advice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Chat with AI Counselor
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Download Career Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
