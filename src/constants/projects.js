/**
 * Projects constant
 * Add your real projects here. Each entry maps to a card on
 * the Projects section AND a full ProjectDetails page at /project/:id
 *
 * tags  — used for filter buttons
 * featured — shown first, gets a larger card treatment
 */
export const projects = [
  {
  id: 'sinhala-sign-language-translator',

  title: 'Sinhala Speech and Text to Sinhala Sign Language Translator',

  shortDesc:
    'An ongoing final-year research project that translates Sinhala speech and text into Sinhala Sign Language using NLP, AI, and real-time 3D avatar animation.',

  longDesc: [
    {
      type: 'text',
      content: `This is my Final Year Research Project, focused on improving communication accessibility for the Deaf and speech-impaired community in Sri Lanka. The proposed system converts Sinhala speech or text into Sinhala Sign Language (SSL) through an intelligent pipeline that combines speech recognition, Natural Language Processing (NLP), multilingual translation, and real-time 3D avatar animation.

The system is being developed as a cross-platform Flutter application with a Python FastAPI backend. It leverages the SSL400 dataset, OpenAI Whisper, Google Speech-to-Text, Google Translate API, MediaPipe pose keypoints, and Unity WebGL/Three.js to generate realistic Sinhala Sign Language animations. The project also includes bidirectional communication support through Sinhala text-to-speech synthesis and is currently under active development as part of my undergraduate research.`,
    },

    {
      type: 'features',
      title: 'Planned Features',
      items: [
        'Sinhala speech-to-text conversion using OpenAI Whisper and Google Speech-to-Text.',
        'Sinhala text processing using Natural Language Processing (NLP).',
        'English-to-Sinhala translation support for multilingual accessibility.',
        'Real-time Sinhala Sign Language generation using a 3D avatar.',
        'Pose-based avatar animation using the SSL400 dataset and MediaPipe keypoints.',
        'Text-to-speech support for bidirectional communication.',
        'Cross-platform Flutter mobile application for Android and iOS.',
      ],
    },

    {
      type: 'features',
      title: 'Technologies Used',
      items: [
        'Flutter',
        'Dart',
        'Python',
        'FastAPI',
        'OpenAI Whisper',
        'Google Speech-to-Text',
        'Google Translate API',
        'Google Cloud Text-to-Speech',
        'TensorFlow Lite',
        'Firebase Firestore',
        'MediaPipe',
        'Three.js',
        'Unity WebGL',
        'SSL400 Dataset',
      ],
    },
  ],

  tags: [
    'Final Year Project',
    'Research',
    'Flutter',
    'NLP',
    'Artificial Intelligence',
    'Speech Recognition',
    'Sign Language',
    '3D Avatar',
    'Python',
    'FastAPI',
    'TensorFlow Lite',
    'Accessibility',
  ],

  category: 'research',

  publication: false,
  featured: false,

  liveUrl: '',

  githubUrl:
    'https://github.com/Akila-Prabath/sinhala-sign-language-translator',

  image: '/projects/fyp.png',

  highlights: [
    '🎓 Final Year Research Project',
    '🚧 Currently under active development',
    'AI-powered Sinhala Speech & Text to Sign Language Translation',
    'Real-time 3D Avatar Animation using SSL400',
    'Focused on improving accessibility for the Deaf community',
  ],

  year: '2026',

  status: 'Ongoing',
},


  {
  id: 'agrolens',
  title: 'AgroLens',
  shortDesc:
    'An AI-powered Flutter mobile application for rice leaf disease detection using TensorFlow Lite, providing instant predictions and crop management recommendations. (Ongoing)',

  longDesc: [
    {
      type: 'text',
      content: `AgroLens is an ongoing AI-powered mobile application designed to assist farmers in identifying rice leaf diseases using deep learning. Users can capture or upload images of rice leaves, and the application performs on-device disease classification using a TensorFlow Lite model.

The project combines Flutter for cross-platform mobile development with TensorFlow for model training and TensorFlow Lite for efficient mobile inference. It follows a modular architecture using Riverpod for state management and demonstrates the complete AI development pipeline, including dataset preprocessing, model training, evaluation, optimization, and mobile integration.`,
    },
    {
      type: 'features',
      title: 'Current Features',
      items: [
        'Capture or upload rice leaf images for disease detection.',
        'On-device disease prediction using TensorFlow Lite.',
        'Disease confidence score visualization.',
        'Crop management and treatment recommendations.',
        'Clean and responsive Flutter user interface.',
        'Riverpod state management for scalable application architecture.',
      ],
    },
    {
      type: 'features',
      title: 'Technologies Used',
      items: [
        'Flutter',
        'Dart',
        'TensorFlow',
        'TensorFlow Lite',
        'Python',
        'OpenCV',
        'Scikit-learn',
        'NumPy',
        'Pandas',
        'Riverpod',
      ],
    },
  ],

  tags: [
    'Flutter',
    'TensorFlow',
    'TensorFlow Lite',
    'Computer Vision',
    'Deep Learning',
    'Mobile Development',
    'AI',
    'Machine Learning',
  ],

  category: 'mobile',

  publication: false,
  featured: false,

  liveUrl: '',
  githubUrl: 'https://github.com/Akila-Prabath/AgroLens',

  image: '/projects/agrolens.png',

  highlights: [
    '🚧 Ongoing project',
    'AI-powered rice leaf disease detection',
    'TensorFlow Lite on-device inference',
    'Cross-platform Flutter application',
  ],

  year: '2026',
},

  {
  id: 'weather-app',
  title: 'SkyCast - Weather App',
  shortDesc:
    'A cross-platform Flutter weather application that provides real-time weather conditions and 5-day forecasts using the OpenWeatherMap API.',

  longDesc: [
    {
      type: 'text',
      content: `A modern weather application built with Flutter that delivers real-time weather information through the OpenWeatherMap API. The application features a clean and responsive user interface with current weather conditions, hourly forecasts, and a 5-day weather forecast.

The project follows a scalable architecture using Riverpod for state management, integrates REST APIs for live weather data, and provides a smooth user experience across Android devices. It demonstrates mobile application development best practices, API integration, and responsive UI design.`,
    },
    {
      type: 'features',
      title: 'Key Features',
      items: [
        'Real-time weather information using OpenWeatherMap API.',
        'Current temperature, humidity, wind speed, and weather conditions.',
        'Hourly weather forecast.',
        '5-day weather forecast.',
        'Search weather by city name.',
        'Modern responsive Flutter UI with Riverpod state management.',
      ],
    },
    {
      type: 'features',
      title: 'Technologies Used',
      items: [
        'Flutter',
        'Dart',
        'Riverpod',
        'REST API',
        'OpenWeatherMap API',
      ],
    },
  ],

  tags: [
    'Flutter',
    'Dart',
    'Riverpod',
    'REST API',
    'OpenWeatherMap',
    'Mobile Development',
  ],

  category: 'mobile',

  publication: false,
  featured: false,

  liveUrl: '',
  githubUrl: 'https://github.com/Akila-Prabath/Weather-App',

  image: '/projects/weather-app.png',

  highlights: [
    'Built with Flutter and Riverpod',
    'Integrated OpenWeatherMap REST API',
    'Real-time weather and 5-day forecasts',
    'Responsive cross-platform mobile application',
  ],

  year: '2026',
},

  {
    id: 'counseling-platform',
    title: 'Mindcare - Student Counseling System',
    shortDesc: 'A MERN stack–based Student Counseling and Mental Health Support Portal.',
    longDesc: [
      {
        type: 'text',
        content: `A full-stack MERN web application developed to provide students with accessible, confidential, and structured mental health support. The platform allows students to connect with counselors, book appointments, access wellness resources, and communicate securely through a modern digital counseling system.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Book counseling appointments.',
          'Appointment status tracking.',
          'Anonymous messaging support.',
          'Access mental health resources.',
        ],
      },
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'fullstack',
    featured: false,
    //liveUrl: 'https://neoshop-demo.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/Student-Counseling-System',
    image: '/projects/counseling.png',
    highlights: [
      'JWT authentication & authorization',
      'Password hashing using bcrypt',
      'Protected routes & middleware',
      'Secure environment variables',
    ],
    year: '2026',
  },
  
  {
    id: 'sinhala-sign-language-review',
    title: 'A Review of AI and NLP Approaches for Sinhala Speech and Text to Sinhala Sign Language Translation Using 3D Avatar Animation',
    shortDesc: 'Published review on AI and NLP approaches for translating Sinhala speech and text to Sinhala Sign Language using 3D avatar animation.',
    longDesc: [
      {
        type: 'text',
        content: `A comprehensive review paper published under the Independent Research Studies module, examining existing AI and NLP methodologies for translating Sinhala speech and text into Sinhala Sign Language (SSL) via 3D avatar animation.

The review analyses the current landscape of sign language recognition and generation systems, with a focus on the unique linguistic challenges of Sinhala — a low-resource language with limited digital datasets. It evaluates deep learning architectures, NLP pipelines, and avatar animation techniques used in comparable systems globally, and identifies research gaps specific to SSL.`,
      },
      {
        type: 'features',
        title: 'Key Areas Covered',
        items: [
          'Survey of AI & NLP approaches for sign language translation.',
          'Analysis of Sinhala as a low-resource language in NLP.',
          'Review of 3D avatar animation techniques for sign rendering.',
          'Evaluation of existing datasets and their limitations.',
          'Identification of open research gaps for future work.',
        ],
      },
    ],
    tags: ['NLP', 'AI', 'Sign Language', 'Deep Learning', '3D Animation', 'Research'],
    category: 'research',
    publication: true,
    featured: false,
    liveUrl: '',
    githubUrl: '',
    image: '/projects/research.png',
    highlights: [
      'Published under Independent Research Studies module',
      'Focus on Sinhala — a low-resource language',
      'Covers NLP, deep learning & 3D avatar animation',
      'Identifies open research gaps for the SSL domain',
    ],
    year: '2026',
  },
  
  {
    id: 'sinhala-sentiment-analysis',
    title: 'Sinhala Sentiment Analysis',
    shortDesc: 'Sinhala NLP sentiment analysis project using deep learning techniques.',
    longDesc: [
      {
        type: 'text',
        content: `A deep learning based Sinhala sentiment analysis project built using TensorFlow, Keras, and Bidirectional LSTM (BiLSTM) architecture for classifying Sinhala text sentiments.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Sinhala text sentiment classification.',
          'Real-time sentiment prediction.',
          'Sinhala NLP preprocessing pipeline.',
          'Streamlit web application.',
        ],
      },
    ],
    tags: ['TensorFlow', 'Keras', 'Python', 'Streamlit'],
    category: 'deeplearning',
    featured: false,
    //liveUrl: 'https://taskflow-demo.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/Sinhala-Sentiment-Analysis',
    image: '/projects/sentiment.png',
    highlights: [
      'Data preprocessing',
      'Tokenization & padding',
      'Deep learning model training',
      'Real-time sentiment prediction',
      'Streamlit web application deployment',
    ],
    year: '2026',
  },

  {
    id: 'Cat-Dog-Classifier',
    title: 'Cat vs Dog Classifier',
    shortDesc: 'A deep learning based image classification project that identifies whether an uploaded image contains a cat or a dog.',
    longDesc: [
      {
        type: 'text',
        content: `A deep learning web application that classifies images of cats and dogs using a Convolutional Neural Network (CNN) built with TensorFlow and deployed with Flask.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Cat vs Dog image classification.',
          'Upload and predict images instantly.',
          'Confidence score prediction.',
          'Responsive UI design.',
          'Modern Flask web interface',
        ],
      },
    ],
    tags: ['TensorFlow', 'Keras', 'Flask', 'Python', 'Jupyter Notebook'],
    category: 'deeplearning',
    featured: false,
    //liveUrl: 'https://devblog-demo.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/Cat-Dog-classifier',
    image: '/projects/cat-dog.png',
    highlights: [
      'Data preprocessing',
      'Data augmentation',
      'CNN model training',
      'Evaluation performance',
    ],
    year: '2026',
  },

  {
    id: 'Sinhala-TTS-STT-web',
    title: 'Sinhala TTS and STT web',
    shortDesc: 'A modern web-based application for Sinhala Text-to-Speech and Speech-to-Text conversion.',
    longDesc: [
      {
        type: 'text',
        content: `Simple Sinhala text to speech and speech to text web application. This project is built fully using HTML, CSS, and JavaScript and works directly in the browser without any server.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Convert Sinhala text into speech.',
          'Convert Sinhala speech into text.',
          'Download generated speech as MP3.',
          'Copy recognized text.',
        ],
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Google TTS'],
    category: 'nlp',
    featured: false,
    liveUrl: 'https://akila-prabath.github.io/sinhala-tts-stt-web/',
    githubUrl: 'https://github.com/Akila-Prabath/sinhala-tts-stt-web',
    image: '/projects/sinhala-tts.png',
    highlights: [
      'Text to Speech',
      'Speech to Text',
      'Lightweight system',
      'Browser Support',
    ],
    year: '2026',
  },

  {
    id: 'Heart-Attack-Predictor',
    title: 'Heart Attack Predictor',
    shortDesc: 'A Machine Learning–powered web application designed to predict the likelihood of a heart attack based on patient health data.',
    longDesc: [
      {
        type: 'text',
        content: `The Heart Attack Predictor is a Machine Learning-based healthcare prediction system developed as a group project for the Introduction to Machine Learning module. The project aims to predict an individual's risk of experiencing a heart attack using clinical and lifestyle-related health indicators. By leveraging machine learning techniques, the system assists in identifying high-risk patients and supports early preventive healthcare decisions.
                  As part of the project, all team members actively contributed to key stages of the machine learning pipeline, including data preprocessing, feature engineering, and Exploratory Data Analysis (EDA) to prepare and understand the dataset. Each member was also responsible for implementing and evaluating a specific machine learning model.
                  My contribution focused on the Support Vector Machine (SVM) model. I was responsible for training, tuning, and evaluating the SVM classifier, analyzing its performance using appropriate evaluation metrics, and comparing its effectiveness with other machine learning approaches used within the project.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Predicts heart attack risk based on health metrics.',
          'Simple and interactive front-end for user input and prediction display.',
          'Fully containerised for consistent deployment.',
          'Fast and lightweight environment management.',
          'Includes contributions from multiple team members via Jupyter notebooks.',
        ],
      },
      
      {
        type: 'specifications',
        title: 'My Contributions',
        items: [
          'Participated in data preprocessing and feature engineering',
          'Conducted exploratory data analysis (EDA)',
          'Implemented and trained the Support Vector Machine (SVM) model',
          'Evaluated model performance using classification metrics',
          'Analyzed prediction results and contributed to model comparison',
        ],
      },
    ],
    tags: ['Python', 'Flask', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    category: 'machinelearning',
    featured: false,
    //liveUrl: 'https://akilaprabath.dev',
    githubUrl: 'https://github.com/Akila-Prabath/Heart-Attack-Predictor',
    image: '/projects/heart.png',
    highlights: [
      'Data cleaning and preprocessing',
      'Feature engineering and feature selection',
      'Exploratory Data Analysis (EDA)',
      'Multiple machine learning model implementations',
      'Performance evaluation using classification metrics',
      'Visualization of dataset insights and model results',
    ],
    year: '2025',
  },

  {
    id: 'Laptop-Price-Predictor',
    title: 'Laptop Price Predictor',
    shortDesc: 'A machine learning web app that predicts the price of a laptop based on its specifications.',
    longDesc: [
      {
        type: 'text',
        content: `The Laptop Price Predictor is a Machine Learning-based web application that predicts the estimated price of a laptop based on its hardware specifications and features. The project uses data preprocessing, feature engineering, exploratory data analysis (EDA), and regression algorithms to learn pricing patterns from real-world laptop datasets and generate accurate price predictions.`,
      },
      {
        type: 'specifications',
        title: 'Laptop Specifications',
        items: [
          'Brand',
          'Processor Type',
          'RAM Size',
          'Graphics Card (GPU)',
          'Operating System',
          'Weight',
          'Touchscreen and IPS Display Features',
        ],
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Laptop price prediction.',
          'Interactive user interface.',
          'Real-Time Predictions.',
          'Deployment-ready application.',
        ],
      },
    ],
    tags: ['Python', 'Flask', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    category: 'machinelearning',
    featured: false,
    //liveUrl: 'https://akilaprabath.dev',
    githubUrl: 'https://github.com/Akila-Prabath/Laptop-Price-Predictor',
    image: '/projects/laptop.png',
    highlights: [
      'Data preprocessing',
      'Feature engineering',
      'Exploratory Data Analysis (EDA)',
      'Regression-based predictive modeling',
      'Model serialization using Pickle',
    ],
    year: '2025',
  },

  {
    id: 'E-Commerce-Web-Application',
    title: 'E-Commerce Web Application',
    shortDesc: 'Laravel-based e-commerce website for selling books, pencils, and stationery items.',
    longDesc: [
      {
        type: 'text',
        content: `The E-Commerce Web Application is a web-based online shopping platform developed as a group project for the Fundamentals of Software Security module. The project was designed to provide users with a convenient and secure environment for browsing, purchasing, and managing products online while enabling the team to analyze and identify potential security vulnerabilities within a real-world web application.
                  The system includes core e-commerce functionalities such as product management, user authentication, shopping cart management, order processing, and administrative controls. Throughout the project, special attention was given to understanding common web application security threats, assessing system vulnerabilities, and applying secure development practices.
                  As a member of the development team, I contributed as a Backend Developer, where I was responsible for implementing server-side functionalities, developing APIs, managing database interactions, and supporting authentication and business logic components of the system. My work ensured reliable communication between the frontend interface and the database while maintaining the application's core functionality.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'User registration and authentication',
          'Product browsing and search functionality',
          'Shopping cart management',
          'Order placement and processing',
          'Admin dashboard for product and order management',
          'Database-driven inventory management',
        ],
      },
      {
        type: 'specifications',
        title: 'My Contributions',
        items: [
          'Developed backend functionalities using Laravel',
          'Designed and implemented server-side business logic',
          'Managed database operations and data handling',
          'Developed API endpoints for frontend integration',
          'Supported security testing and vulnerability identification',
        ],
      },
    ],
    tags: ['PHP', 'Laravel Framework', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'fullstack',
    featured: false,
    //liveUrl: 'https://akilaprabath.dev',
    githubUrl: 'https://github.com/Akila-Prabath/Ecommerce-Web',
    image: '/projects/ecommerce.png',
    highlights: [
      'Security-focused development',
      'vulnerability analysis',
      'authentication and authorization mechanisms',
    ],
    year: '2025',
  },

  {
    id: 'Canteen-Management-System',
    title: 'Meal Mate - Canteen Management System',
    shortDesc: 'A web-based Canteen Management System developed using the MERN stack.',
    longDesc: [
      {
        type: 'text',
        content: `The Canteen Management System is a web-based platform developed as a group project for the Second Year Group Project module. The system was designed to streamline canteen operations by providing an efficient solution for managing meals, orders, users, and daily canteen activities. It aims to improve the overall dining experience for students while enabling canteen staff and administrators to manage operations more effectively.
                  The platform offers features such as meal browsing, online ordering, order tracking, user management, and administrative functionalities. By digitizing the ordering and management process, the system reduces manual work, minimizes waiting times, and enhances communication between customers and canteen operators.
                  As a member of the development team, I contributed as a Software Tester, ensuring the quality, reliability, and functionality of the application through comprehensive testing activities. My responsibilities included designing and executing test cases, performing unit testing, and validating system behavior through integration testing.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'User registration and authentication',
          'Online meal browsing and ordering',
          'Order management and tracking',
          'Menu and inventory management',
          'Administrative dashboard',
        ],
      },
      {
        type: 'specifications',
        title: 'My Contributions',
        items: [
          'Conducted Unit Testing using Vitest',
          'Performed component testing with React Testing Library',
          'Developed and executed test cases for frontend functionalities',
          'Conducted Integration Testing using Selenium',
          'Identified, documented, and reported software defects',
          'Verified system functionality and user workflows',
          'Collaborated with developers to improve software quality and reliability',
        ],
      },
    ],
    tags: ['React.js', 'Node.js', 'JavaScript', 'Vitest', 'React Testing Library', 'Selenium', 'MongoDB'],
    category: 'fullstack',
    featured: false,
    //liveUrl: 'https://akilaprabath.dev',
    githubUrl: 'https://github.com/Akila-Prabath/nextapp',
    image: '/projects/mealmate.png',
    highlights: [
      'User authentication',
      'Unit Testing',
      'Test Case Design',
    ],
    year: '2024',
  },
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'deeplearning', label: 'Deep Learning' },
  { id: 'nlp', label: 'NLP' },
  { id: 'machinelearning', label: 'Machine Learning' },
  { id: 'mobile', label: 'Mobile Development' },
  { id: 'research', label: 'Research Publication' },
]
