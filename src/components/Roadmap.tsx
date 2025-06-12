
import React, { useState } from 'react';

const Roadmap = () => {
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const roadmapData = {
    mathematics: {
      title: "Mathematics Roadmap",
      color: "blue",
      icon: "📊",
      chapters: [
        {
          id: 1,
          title: "Real Numbers",
          duration: "2 weeks",
          topics: ["Euclid's Division Lemma", "Fundamental Theorem of Arithmetic", "Rational and Irrational Numbers"],
          difficulty: "Medium",
          resources: ["NCERT Chapter 1", "RS Aggarwal", "Practice Papers"]
        },
        {
          id: 2,
          title: "Polynomials",
          duration: "3 weeks",
          topics: ["Zeros of Polynomial", "Relationship between Zeros and Coefficients", "Division Algorithm"],
          difficulty: "Medium",
          resources: ["NCERT Chapter 2", "RD Sharma", "Online Videos"]
        },
        {
          id: 3,
          title: "Linear Equations in Two Variables",
          duration: "3 weeks",
          topics: ["Pair of Linear Equations", "Graphical Method", "Algebraic Methods"],
          difficulty: "Easy",
          resources: ["NCERT Chapter 3", "Exemplar Problems"]
        },
        {
          id: 4,
          title: "Quadratic Equations",
          duration: "4 weeks",
          topics: ["Standard Form", "Solution by Factorization", "Quadratic Formula"],
          difficulty: "Hard",
          resources: ["NCERT Chapter 4", "Previous Year Papers"]
        }
      ]
    },
    science: {
      title: "Science Roadmap",
      color: "green",
      icon: "🔬",
      chapters: [
        {
          id: 1,
          title: "Light - Reflection and Refraction",
          duration: "3 weeks",
          topics: ["Laws of Reflection", "Spherical Mirrors", "Refraction of Light", "Lenses"],
          difficulty: "Medium",
          resources: ["NCERT Physics", "Lab Experiments", "Simulation Software"]
        },
        {
          id: 2,
          title: "Human Eye and Colourful World",
          duration: "2 weeks",
          topics: ["Structure of Eye", "Defects of Vision", "Dispersion of Light", "Atmospheric Refraction"],
          difficulty: "Easy",
          resources: ["NCERT Physics", "Interactive Models"]
        },
        {
          id: 3,
          title: "Life Processes",
          duration: "4 weeks",
          topics: ["Nutrition", "Respiration", "Transportation", "Excretion"],
          difficulty: "Medium",
          resources: ["NCERT Biology", "Diagrams", "Video Lectures"]
        },
        {
          id: 4,
          title: "Control and Coordination",
          duration: "3 weeks",
          topics: ["Nervous System", "Hormones", "Plant Movements", "Coordination in Animals"],
          difficulty: "Hard",
          resources: ["NCERT Biology", "3D Models", "Case Studies"]
        }
      ]
    },
    english: {
      title: "English Roadmap",
      color: "purple",
      icon: "📚",
      chapters: [
        {
          id: 1,
          title: "Reading Comprehension",
          duration: "4 weeks",
          topics: ["Unseen Passages", "Vocabulary Building", "Inference Skills", "Critical Thinking"],
          difficulty: "Medium",
          resources: ["Reading Materials", "Daily Practice", "Vocabulary Lists"]
        },
        {
          id: 2,
          title: "Writing Skills",
          duration: "5 weeks",
          topics: ["Article Writing", "Letter Writing", "Story Writing", "Diary Entry"],
          difficulty: "Medium",
          resources: ["Writing Samples", "Grammar Guide", "Practice Exercises"]
        },
        {
          id: 3,
          title: "Literature",
          duration: "6 weeks",
          topics: ["Poetry Analysis", "Prose Comprehension", "Character Study", "Theme Analysis"],
          difficulty: "Hard",
          resources: ["NCERT Textbook", "Reference Books", "Online Resources"]
        },
        {
          id: 4,
          title: "Grammar",
          duration: "3 weeks",
          topics: ["Tenses", "Voice", "Narration", "Prepositions"],
          difficulty: "Easy",
          resources: ["Grammar Books", "Practice Worksheets", "Online Tests"]
        }
      ]
    },
    social: {
      title: "Social Science Roadmap",
      color: "orange",
      icon: "🌍",
      chapters: [
        {
          id: 1,
          title: "The Rise of Nationalism in Europe",
          duration: "3 weeks",
          topics: ["French Revolution", "Unification of Germany", "Unification of Italy", "Impact on Europe"],
          difficulty: "Medium",
          resources: ["NCERT History", "Maps", "Timeline Charts"]
        },
        {
          id: 2,
          title: "Nationalism in India",
          duration: "4 weeks",
          topics: ["Freedom Struggle", "Civil Disobedience", "Quit India Movement", "Partition"],
          difficulty: "Medium",
          resources: ["NCERT History", "Freedom Fighter Biographies"]
        },
        {
          id: 3,
          title: "Resources and Development",
          duration: "3 weeks",
          topics: ["Natural Resources", "Land Resources", "Water Resources", "Forest Resources"],
          difficulty: "Easy",
          resources: ["NCERT Geography", "Atlas", "Current Affairs"]
        },
        {
          id: 4,
          title: "Power Sharing",
          duration: "2 weeks",
          topics: ["Democracy", "Forms of Power Sharing", "Federal System", "Local Government"],
          difficulty: "Easy",
          resources: ["NCERT Civics", "Constitution", "News Articles"]
        }
      ]
    }
  };

  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSubjectColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  const calculateProgress = () => {
    const totalChapters = roadmapData[selectedSubject].chapters.length;
    const completedChapters = roadmapData[selectedSubject].chapters.filter(chapter => 
      completedTasks.has(chapter.id)
    ).length;
    return (completedChapters / totalChapters) * 100;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">10th Grade Study Roadmap</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Follow our comprehensive study plan designed specifically for 10th-grade board exam preparation. 
          Track your progress and stay on schedule.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Overall Progress</h3>
          <span className="text-2xl font-bold text-blue-600">{Math.round(calculateProgress())}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {roadmapData[selectedSubject].chapters.filter(chapter => completedTasks.has(chapter.id)).length} of {roadmapData[selectedSubject].chapters.length} chapters completed
        </p>
      </div>

      {/* Subject Selection */}
      <div className="grid md:grid-cols-4 gap-4">
        {Object.entries(roadmapData).map(([key, subject]) => (
          <button
            key={key}
            onClick={() => setSelectedSubject(key)}
            className={`p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
              selectedSubject === key 
                ? `bg-gradient-to-r ${getSubjectColor(subject.color)} text-white` 
                : 'bg-white hover:shadow-xl'
            }`}
          >
            <div className="text-3xl mb-3">{subject.icon}</div>
            <h4 className={`font-bold ${
              selectedSubject === key ? 'text-white' : 'text-gray-900'
            }`}>
              {subject.title}
            </h4>
          </button>
        ))}
      </div>

      {/* Study Schedule */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {roadmapData[selectedSubject].icon} {roadmapData[selectedSubject].title}
          </h3>
          <div className="text-right">
            <p className="text-sm text-gray-600">Estimated Duration</p>
            <p className="text-lg font-bold text-blue-600">
              {roadmapData[selectedSubject].chapters.reduce((total, chapter) => {
                const weeks = parseInt(chapter.duration.split(' ')[0]);
                return total + weeks;
              }, 0)} weeks
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {roadmapData[selectedSubject].chapters.map((chapter, index) => (
            <div 
              key={chapter.id} 
              className={`border-l-4 pl-6 pb-6 relative ${
                completedTasks.has(chapter.id) 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center ${
                completedTasks.has(chapter.id) 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-300'
              }`}>
                {completedTasks.has(chapter.id) ? '✓' : index + 1}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{chapter.title}</h4>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-600">⏱️ {chapter.duration}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(chapter.difficulty)}`}>
                        {chapter.difficulty}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleTask(chapter.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      completedTasks.has(chapter.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    {completedTasks.has(chapter.id) ? 'Completed' : 'Mark Complete'}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">📝 Key Topics</h5>
                    <ul className="space-y-2">
                      {chapter.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">📚 Study Resources</h5>
                    <ul className="space-y-2">
                      {chapter.resources.map((resource, resourceIndex) => (
                        <li key={resourceIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-gray-700">{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">💡 Study Tips for Success</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Create a daily study schedule and stick to it</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Take regular breaks to avoid burnout</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Practice previous year papers regularly</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>Form study groups with classmates</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span>Ask doubts immediately - don't let them pile up</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <span>Maintain a healthy lifestyle and get enough sleep</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
