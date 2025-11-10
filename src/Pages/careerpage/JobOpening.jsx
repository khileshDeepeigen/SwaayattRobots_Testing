import { useState, useEffect } from 'react';
import '../../stylesheets/JobOpening.css';
import axios from 'axios';

const JobOpening = () => {
  const [activeTab, setActiveTab] = useState('full-time');
  const [modal, setModal] = useState(null);
  const [jobDetails, setJobDetails] = useState([]);
  const [internshipDetails, setInternshipDetails] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/careers`)
      .then(response => {
        const data = response.data;
        setJobDetails(data.job_details || []);
        setInternshipDetails(data.internship_details || []);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  // console.log(import.meta.env.VITE_SERVER_URL)

  const openModal = (modalId) => {
    setModal(modalId);
  };

  const closeModal = () => {
    setModal(null);
  };

  // Job descriptions for specific roles
  const jobDescriptions = {
    'CUDA C++ Developer': {
      description: `
      <p>
        CUDA C++ Developer at Swaayatt Robots is responsible for developing and optimizing algorithms for both the CPU and the GPU, 
        along with using API for popular libraries wherever required (CuDNN, OpenCL, OpenACC etc.). This position requires frequently 
        interacting with R&D team working in computer vision (CV), deep learning (DL), machine learning (ML), reinforcement learning 
        (RL) and decision making, and motion planning. Thus, having a mathematical or a theoretical computer science (CS) background 
        becomes advantageous.</p>
        
        <strong>Responsibilities:</strong>
        <ul>
          <li>CPU/GPU based code optimization</li>
          <li>Writing algorithmic pipelines (DL/ML/CV) pipelines in C++ using CUDA</li>
          <li>Optimization of the existing CV/DL/ML pipelines</li>
          <li>Deployment of DL/ML based models/pipelines in production</li>
        </ul>
        
        <strong>Requirements:</strong>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Advance C++ Development Skills</li>
          <li>Experience with GPU Programming (CUDA, OpenCL etc..)</li>
          <li>Experience with TensorRT and cuDNN</li>
        </ul>
        
        <strong>Bonus qualification:</strong>
        <ul>
          <li>FPGA, ASIC</li>
          <li>fp8/fp11/fp16 and hardware level optimization</li>
          <li>Theoretical CS / mathematics background</li>
          <li>Having knowledge of pruning methods for deep neural networks</li>
        </ul>
      `
    },
    'Electronics & Embedded Systems Engineer': {
      description: `
      <p>
        As an Electronics and Embedded Systems Engineer at Swaayatt Robots, you will be responsible for designing, developing, 
        and testing software and hardware for various controllers for autonomous vehicles. This position also involves working 
        in an established inter-process communication protocols environment and maintaining and making necessary changes to the 
        code-base, wherever required.</p>
        
        <strong>Responsibilities:</strong>
        <ul>
          <li>Design, develop and test software for embedded Linux platforms</li>
          <li>Optimize software for embedded computational hardware (or OEM preferred development boards)</li>
          <li>Work on interfacing various sensors, electronics, and electrical components for controlling autonomous vehicles</li>
        </ul>
        
        <strong>Requirements:</strong>
        <ul>
          <li>Strong C/C++ and Python programming experience</li>
          <li>Familiarity with bash scripting and experience in embedded micro-controllers</li>
          <li>Strong understanding of various sensors, actuators and automotive communication protocols (ex. CAN, LIN etc)</li>
          <li>Familiarity with Digital Communication Buses like I2C, SPI, CAN, PCIe etc.</li>
        </ul>
        
        <strong>Bonus qualification:</strong>
        <ul>
          <li>Knowledge of Control Systems and electro-mechanical systems</li>
          <li>Knowledge about the Linux kernel and experience controlling hardware from the kernel</li>
          <li>Experience with Real-Time Operating Systems (like FreeRTOS)</li>
          <li>Experience in Automotive Industry</li>
        </ul>
      `
    },
    'Senior Mechanical Engineer': {
      description: `
      <p>
        As a senior mechanical engineer at Swaayatt Robots, you are expected to manage, conceptualize and develop innovative 
        products, hardware, electromechanical actuation systems, vehicles, and robotic systems. Key responsibility is to ensure 
        commercial-grade finishing of the manufactured or fabricated mechanical parts or systems, taking the dimensional or 
        geometrical constraints into account, when designing such parts for after-market vehicles, or when integrating with the OEMs.</p>
        
        <strong>Responsibilities:</strong>
        <ul>
          <li>Manage and design mechanical or electromechanical systems for actuation of controls in commercial vehicles</li>
          <li>Conceptualize and design new robotic systems or vehicles, and actuators for the same</li>
          <li>Mechanically calibrate, or assist in calibration of, various sensors in a vehicle</li>
          <li>Prototype and keep on improving existing actuators for brake, throttle, clutch, and steering systems</li>
          <li>Design closed mounting systems for various sensors on a vehicle, and prototype/manufacture/fabricate the same</li>
          <li>Dynamic load testing of the mechanical systems, including those of sensor mounts and the actuators</li>
        </ul>
        
        <strong>Requirements:</strong>
        <ul>
          <li>Strong knowledge of any one of the mechanical design software (Solidworks, CATIA, AutoCAD, etc.)</li>
          <li>Knowledge of computational fluid dynamics</li>
          <li>Familiarity with, or ability to learn, operating principles of various systems in commercial vehicles</li>
          <li>Mathematical background to perform basic mathematical computations or calculations of various forces and torque requirements</li>
          <li>Experience of prototyping designs using 3D printing or ability to learn the same</li>
          <li>Experience in field work -- lathe machines, CNC, 3D printing, laser cutting</li>
        </ul>
      `
    },
    'Product Manager - ADAS': {
      description: `
      <p>
       As a product manager at Swaayatt Robots, you will be responsible for managing the development cycle of Swaayatt's 
       autonomous navigation software frameworks, operations, and strategies. You will also be responsible for AutonomousOne
        -- a flagship ADAS system of Swaayatt Robots to be launched in December 2022. You are expected to create roadmaps and 
        formulate strategies to meet the necessary deadlines set by the company for the development of its products and software or software services. 
        One of your key responsibilities is to understand the market requirements, understand the needs of diverse userbase, collaborate with right
       industry partners and guide developers and engineers to timely deliver the products or services.</p>
        
        
        
        <strong>Responsibilities:</strong>
        <ul>
        <li>Conceptualize and design products for autonomous mobility or ADAS applications</li>
        <li>Manage key algorithmic development processes for various frameworks and applications</li>
        <li>Formulate strategies and create roadmaps for the execution of key ideas</li>
        <li>Market analysis, connect with the industry/OEMs and customers</li>
        <li>Ensuring adherence to the deadlines for the delivery of products and services</li>
          
        </ul>

         <strong>Bonus Qualifications:</strong>
        <ul>
        <li>MBA from one of the reputed colleges (IIMs)</li>
        <li>Strong proficiency in one of the relevant technical areas</li>
        <li>Experience working in robotics or AI or automotive industry</li>
          
        </ul>
      `
    },
    'Motion Planning Engineer': {
      description: `
      <p>
       Motion planning engineer at Swaayatt Robots will primarily be responsible for implementing existing state-of-the-art or proprietary algorithms for various applications, including for autonomous driving. Secondarily, motion planning engineer will also be responsible for developing novel motion planning algorithms and navigational algorithmic frameworks, including developing decision making algorithmic pipelines, for autonomous vehicles. Typically such an engineer is expected to have the knowledge of the motion planning literature from 1995 till date, having worked on majority of, or have practical experience working deeply in at least two/three of, the motion planning paradigms listed below:
       </p>   
       <ul>
          <li>Potential field methods</li>
          <li>Graph based methods (A*, D*, including anytime variants)</li>
          <li>Sampling based methods and Probabilistic Road Maps</li>
          <li>Local high-dimensional lattice based methods</li>
          <li>Local path-set methods</li>
          <li>HJB formulation based methods</li>
          <li>MPC based methods</li>
          <li>Various other controls and heuristic based planning algorithms</li>
          </ul>
        Along with that, knowledge of path tracking algorithms or controllers, and mathematical knowledge of the dynamics and kinematics of standard robotic/vehicle models is also required.


        <strong>Responsibilities:</strong>
        <ul>
          <li>Implement existing motion planning algorithms, including reproducing results of research papers</li>
          <li>Write motion planning software, in C/C++, for deployment in autonomous vehicles</li>
          <li>Develop simulation environments to test motion planning and decision making algorithmic frameworks' capabilities</li>
          <li>Develop or assist in the development of novel intelligent vehicle controllers using RL</li>
          <li>Develop or assist in the development of novel motion planning algorithmic frameworks (typically using RL)</li>
        </ul>
        
        <strong>Requirements:</strong>
        <ul>
          <li>Strong mathematical foundation (linear algebra, calculus, statistics)</li>
          <li>Proficiency in C/C++ and Python</li>
          <li>Deep knowledge of data structures and algorithms</li>
          <li>Ability to understand and implement existing motion planning algorithms that typically use a wide range of complex mathematical concepts</li>
         
        </ul>
        
        <strong>Bonus qualification:</strong>
        <ul>
          <li>Having strong foundation in Machine Learning </li>
          <li>Knowledge of convex optimization, including non-differential convex optimization </li>
          <li>Deep knowledge in the field of reinforcement learning </li>
          <li>CUDA proficiency </li>
          <li>Theoretical knowledge of vehicle dynamics, and numerical integration for performing FID, and tire models </li>
          <li>Track record of publishing papers in Tier-1 conferences in robotics or machine learning</li>
         
        </ul>
      `
    },
    'Mapping and Localization Engineer': {
      description: `
      <p>
       As a Mapping and Localization Engineer at Swaayatt Robots, you will be responsible for designing, developing and testing software for mapping and localizing autonomous vehicles in challenging and unstructured environments. The work includes building maps of various environments in a modular and efficient manner so that the autonomous vehicles can localize in such environments with very high precision.
         </p>

        <strong>Responsibilities:</strong>
        <ul>
          <li>Implement and test existing state-of-the-art algorithms and pipelines for mapping and localization</li>
          <li>Design, develop, and test novel algorithmic pipelines for performing mapping and localization</li>
          <li>Work with data from various sensors and come up with techniques and solutions to solve the mapping and localization problem in challenging environments</li>
          <li>Work on calibrating various sensors for integrating and on sensor fusion</li>
          <li>Write high quality, efficient and modular code</li>
        </ul>
        
        <strong>Requirements:</strong>
        <ul>
          <li>Strong C/C++ and Python programming experience</li>
        <li> Strong knowledge of data structures and algorithms</li>
        <li> Familiarity with Bash Scripting, Build Systems, Version Control</li>
        <li> Strong mathematical knowledge (Probability, Calculus, Linear Algebra, and various filters, like Kalman, Particle, EKF)</li>
        <li> Knowledge of probabilistic graphical models, and numerical optimization techniques</li>
        <li> Strong knowledge and experience with ROS and LCM or ZCM</li>
        <li> Strong Knowledge of, and experience working with, real-time non-linear kalman filtering and smoothing techniques</li>
        <li> Strong knowledge of, and experience with, 3D coordinate frames, transformations, multiple view geometry, and knowledge about lie groups and lie algebra.</li>
        <li> Strong knowledge of pose-graph optimization, and experience with pose-graph optimization libraries like G2O/Ceres/GTSAM</li>
         
        </ul>
        
        <strong>Bonus qualification:</strong>
        <ul>
          <li>Knowledge of computer vision and control systems.</li>
          <li>Experience working and interfacing with various sensors like Cameras, LIDARs, GPS, IMU etc.</li>
          <li>Knowledge in machine learning and deep learning.</li>
          <li>Experience with real-time operating systems (like FreeRTOS).</li>
        </ul>
      `
    },
    'Research Scientist: Motion Planning': {
      description: `
      <p>
A  Motion planning Research scientist (RS) at Swaayatt Robots will be responsible for conceptualizing and developing motion planning and decision making algorithmic frameworks for various complex and stochastic traffic scenarios, to achieve level-5 autonomy. Motion planning RS should be comfortable working on projects involving multidisciplinary theoretical concepts, foremost of which are traditional motion planning, reinforcement learning (RL) and stochastic processes, topology theory, and manifold theory.
</p>
        
        <strong>Requirements:</strong>
        <ul>
          <li>M Tech/MS/PhD in EECS/CS/Robotics/Aero-Astro/Mechanical Engineering or equivalent research experience</li>
          <li>Proficiency Proficiency in C, C++, Python programming languages with clean and efficient coding skills</li>
          <li>Deep knowledge of motion planning, and path tracking literature, since 1995</li>
          <li>Strong knowledge in at least one of the following areas: machine learning, vehicle dynamics and controls, mathematical optimization (convex / non-convex / numerical), reinforcement learning, heuristic search.</li>
         
        </ul>
      `
    },
    'Research Scientist: Reinforcement Learning': {
      description: `
      <p>
RL Research Scientist (RS) at Swaayatt Robots will be responsible for conceptualizing, theorizing and developing novel decision making algorithmic frameworks to enable autonomous vehicles to negotiate complex, stochastic and adversarial traffic situations. RS is expected to work at the intersection of theoretical computer science (ML, RL, game theory, graph theory, heuristic search, mathematical optimization), motion planning, and pure and applied mathematics.
</p>
<p>RL Research Scientist is also expected to optimize and scale the existing proprietary algorithmic frameworks at Swaayatt Robots, such as the Off-Shift Policy framework, Two-Lanes Overtaking Policy framework, and the Multi-Agent Intent Analysis and Negotiation framework. These algorithmic frameworks typically require working at the intersection of following areas: RL, Inverse-RL, ML, Heuristic Search, Topology Theory, Mathematical Optimization, Graph Theory, Manifold Alignment.
       </p> 

        <strong>Requirements:</strong>
        <ul>
          <li>M Tech/MS/PhD in EECS or relevant areas (PhD in ML/RL/Robotics/Aero-Astro), or equivalent research experience</li>
        <li>Proficiency in C/C++ and Python programming languages</li>
        <li>Deep knowledge in machine learning, reinforcement learning, and probabilistic graphical models</li>
        <li>Strong knowledge in mathematical optimization (convex, numerical, non-differential convex)</li>
        <li>Track record of publication in Tier-1 robotics or ML conferences</li>
        <li>Previous experience in robotics / AI R&D startup outside India is a bonus</li>
         
        </ul>
      `
    },
    'Research Scientist: Machine Learning': {
      description: `
      <p>
Machine learning research scientist at Swaayatt Robots is responsible for articulating, designing and developing custom ML/DL/RL algorithms for various robotic and autonomous driving applications, along with doing foundational research in developing novel algorithmic frameworks for autonomous vehicles negotiating complex traffic scenarios. ML research scientist is required to have the mathematical aptitude and the ability to work on projects involving multidisciplinary theoretical concepts and ideas.</p>
       </p> 

        <strong>Requirements:</strong>
        <ul>
          <li>PhD in Computer Science or related areas, such as, PhD in ML/RL/Robotics</li>
          <li>Advanced mathematical knowledge in a mix of following areas: convex optimization, probabilistic graphical models, reinforcement learning, stochastic processes, manifold theory and manifold alignment</li>
          <li>Ability to quickly grasp concepts in other theoretical areas when required</li>
          <li>C++/Python.</li>
        </ul>
      `
    },
    'Software Engineer': {
      description: `
      <p>
As a Software Engineer at Swaayatt Robots, you will be working on developing and integrating software packages for the autonomous driving technology stack. It would also involve you working along side the R&D team and implementing the necessary programming blocks.         </p>

        <strong>Responsibilities:</strong>
        <ul>
          <li>Implement software packages that are efficient and scalable.</li>
          <li>Work on software development tasks like building GUI’s, automating pipelines, integrating software stacks (eg, planning, perception, localization etc).</li>
          <li>Work with available libraries and solvers for formulating and solving mathematical equations (eg. like those encountered in non-linear optimization).</li>
          <li>Contribute to simulation, design and graphics for visualizations.</li>
          <li>Develop pipelines for logging and monitoring the status of the autonomous vehicle during testing and deployment.</li>
        </ul>
        
        <strong>Requirements:</strong>
        <ul>
          <li>Advanced proficiency in C/C++ and Python</li>
          <li>Deep knowledge in Data Structures and Algorithms</li>
          <li>Ability to go through documentation of third-party libraries and integrate them with existing pipelines</li>
          <li>Knowledge of Operating Systems</li>
         
        </ul>
        
        <strong>Bonus qualification:</strong>
        <ul>
          <li>Strong mathematical foundation</li>
          <li>Work on simulation and graphics</li>
          <li>Experience working on different hardware platforms</li>
        </ul>
      `
    },
  };

  return (
    <>
      <section id="job-opening-section">
        <div className="open-positions hidden">
          <div className="position-tabs">
            <div
              className={`tab ${activeTab === 'full-time' ? 'active' : ''}`}
              onClick={() => setActiveTab('full-time')}
            >
              Full Time
            </div>
            <div
              className={`tab ${activeTab === 'internship' ? 'active' : ''}`}
              onClick={() => setActiveTab('internship')}
            >
              Internship
            </div>
          </div>

          <div className="positions-container hidden">
            {/* Full-Time Job Openings */}
            <div className={`category full-time ${activeTab === 'full-time' ? 'active' : ''}`}>
              {jobDetails.map((job) => (
                <div
                  className="position"
                  key={job.id}
                  onClick={() => openModal(`modal-${job.id}`)}
                >
                  <div className="name">
                    {job.career_name}
                    <p>Experience: {job.Experience}</p>
                  </div>
                  <span className="location">
                    {jobDescriptions[job.career_name] ? 'Description' : ''}
                  </span>
                </div>
              ))}
            </div>

            {/* Internship Openings */}
            <div className={`category internship ${activeTab === 'internship' ? 'active' : ''}`}>
              {internshipDetails.map((internship) => (
                <div className="position" key={internship.id}>
                  <div className="name">
                    {internship.internship_role}
                  </div>
                  <p>Duration: 6 Months</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modals for each job */}
        {jobDetails.map((job) => (
          <div
            key={job.id}
            id={`modal-${job.id}`}
            className={`modal ${modal === `modal-${job.id}` ? 'active' : ''}`}
            onClick={closeModal}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{job.career_name}</h2>
              <h4>Job Description</h4>
              <div dangerouslySetInnerHTML={{ __html: jobDescriptions[job.career_name] ? jobDescriptions[job.career_name].description : 'No description available' }} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default JobOpening;
