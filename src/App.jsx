"use client"

import { useState, useEffect } from "react"
import "./App.css"

const blogData = [
  {
    id: 1,
    day: "OJT  ",
    title: "First Day on Site: Orientation and First Impressions",
    date: "March 4, 2025",
    summary: "The first day of our On-the-Job Training introduced us to the workplace, its environment, and expectations. It wasn’t just about getting to know the systems—it was about stepping into the professional world and realizing how theory meets practice.",
    content: `
      <p>The first day of OJT was filled with a mix of excitement and nerves. We began with a warm welcome from our supervisors, followed by an orientation that laid out the company's mission, structure, and the role we would play during our stay.</p>
      <p>We toured the facility, met our department heads, and learned about the tools and technologies we would be working with. There was a sense of professionalism in the air—everything from how employees carried themselves to how tasks were managed spoke volumes about the standards we were expected to uphold.</p>
      <p>One of the highlights was a short seminar on workplace ethics and communication. It helped frame the importance of teamwork, time management, and accountability, all of which are crucial in any professional setting.</p>
      <p>This first day wasn’t just an introduction—it was a transition. From classroom discussions to real-world applications, it marked the beginning of a new chapter in our journey as professionals-in-training.</p>
    `,
    images: ["/ojt/3.jpg",
       
      
      "/ojt/2.jpg",
       
       
    ],
  }
  ,
  {
    id: 2,
    day: "OJT Sytem",
    title: "Initial Team Alignment and Project Briefing",
    date: "March 11, 2025",
    summary: "During our OJT orientation meeting, we were introduced to our mentors, project expectations, and the overall workflow. This session laid the foundation for effective teamwork and clarified our roles in the upcoming smart parking system project.",
    content: `
      <p>Our OJT officially began with an initial team meeting that served as both a welcome session and a project briefing. We gathered with our mentors and fellow interns to understand the objectives, expectations, and collaborative environment we would be working in.</p>
      <p>The mentors presented an overview of the smart parking system project, outlining the major components and deliverables. We discussed how the system should function, what tools we might use, and the timeline for development. This helped align our understanding and prepare us for the tasks ahead.</p>
      <p>Each team member introduced themselves and shared their strengths, which helped in delegating early responsibilities. The importance of communication, task ownership, and documenting our progress was emphasized throughout the meeting.</p>
      <p>This kickoff meeting not only set the tone for our OJT experience but also provided clarity and motivation. We left the session feeling more connected, goal-driven, and ready to begin building our solution together.</p>
    `,
    images: [
      "/ojt/1.jpg",
       
       
      "/ojt/4.jpg",
    ],
  },
  
  
  {
    id: 3,
    day: "Personal Journey",
    title: "Strength and Discipline: My Gym Journey Begins",
    date: "March 18, 2025",
    summary: "Starting my gym journey was more than a fitness decision—it was a commitment to self-discipline, consistency, and personal growth. Each workout became a step toward not just physical strength, but mental resilience.",
    content: `
      <p>Balancing OJT with my personal goal to get stronger and healthier wasn’t easy, but stepping into the gym for the first time felt like reclaiming control. It wasn’t about looking a certain way—it was about becoming a better version of myself.</p>
      <p>The first few days were the hardest. Learning proper form, adjusting to the routines, and pushing past soreness required more mental effort than I expected. But over time, I started seeing small changes—in strength, energy, and focus.</p>
      <p>I followed a basic program: compound lifts like squats and bench presses, combined with conditioning and core work. I tracked my progress, asked questions, and stayed consistent. What surprised me most was how the discipline I built in the gym started showing up in other areas of life—especially at work and school.</p>
      <p>This journey is just beginning, but each session teaches me something valuable: patience, effort, and the fact that progress comes from showing up every day, even when it’s hard.</p>
    `,
    images: [
      "/gym/1.jpg",
      
    ],
  }
  ,
  {
    id: 4,
    day: "Advanced Database Project",
    title: "Optimizing Data Management: Our Advanced DBMS Journey",
    date: "April 2, 2025",
    summary: "This project challenged us to design and implement an advanced database system that goes beyond simple CRUD operations—focusing on optimization, normalization, and real-world data handling for a robust solution.",
    content: `
      <p>As part of our Advanced Database subject, we were tasked with building a fully functional database system tailored to a realistic use case. Our team decided to focus on a multi-user inventory and transaction management system for a small-scale business environment.</p>
      <p>We began by constructing a well-normalized relational schema that ensured data integrity and minimized redundancy. Using MySQL and PHPMyAdmin, we implemented complex relationships and enforced constraints to handle real-world scenarios such as stock validation, user roles, and transaction tracking.</p>
      <p>One of the key components of the project was query optimization. We practiced using indexes, triggers, and stored procedures to improve performance and reduce load time. We also integrated basic analytics to provide summarized reports for decision-making.</p>
      <p>Aside from technical execution, this project enhanced our understanding of data modeling, security best practices, and team collaboration. It gave us a clearer perspective on how critical databases are to building scalable, efficient systems.</p>
    `,
    images: [
      "/adv/1.jpg",
      "/adv/2.jpg",
    ],
  }
  ,
  {
    id: 5,
    day: "App Development Project",
    title: "App Dev Capstone: Creating a Smart Mobile Solution",
    date: "April 25, 2025",
    summary: "Our app development project served as the highlight of our final year—transforming an idea into a fully functional mobile application that addressed a real-world need and showcased our growth as developers.",
    content: `
      <p>For our final capstone, we focused on app development—a field where design, functionality, and user experience intersect. We set out to build a mobile application that solves a specific problem faced by users in everyday life.</p>
      <p>Our chosen project was a [insert app type here, e.g., "real-time campus navigation app for students" or "task tracker for productivity enthusiasts"]. It required full-stack development using technologies like Flutter, Firebase, and REST APIs.</p>
      <p>We divided our team based on skill sets: some worked on front-end UI/UX design, while others handled back-end logic and database integration. We encountered challenges like [insert issue, e.g., "real-time data syncing delays" or "cross-platform compatibility problems"], but we tackled them with consistent testing and mentor feedback.</p>
      <p>One major milestone was achieving smooth user interaction with minimal bugs. We paid close attention to design principles and responsiveness to ensure the app felt intuitive and professional.</p>
      <p>By the end of the project, we had developed a fully operational mobile app and presented it with pride. The experience helped us gain practical knowledge in the development cycle—from ideation to deployment—and validated our skills as app developers ready for the industry.</p>
    `,
    images: [
      "/se/1.jpg",
      "/se/2.jpg",
      "/se/3.jpg",
    ],
  }
  
  ,
  {
    id: 6,
    day: "Web Project",
    title: "Building a Responsive Web Application: Our Web Project",
    date: "May 1, 2025",
    summary: "Our web project was an opportunity to showcase our skills in web development. We built a fully responsive, dynamic website that catered to user needs and provided a seamless experience across all devices.",
    content: `
      <p>Our web project was the most ambitious task we had taken on so far. From start to finish, we were responsible for every aspect—design, functionality, user interface, and testing. The goal was to create a responsive web application that was both functional and user-friendly.</p>
      <p>We started with brainstorming and defining the scope of the project, choosing to build a [describe the web project, e.g., "local event management platform" or "e-commerce site for small businesses"]. The first step was wireframing the user experience (UX), ensuring the site would be intuitive and easy to navigate.</p>
      <p>Our tech stack included [mention technologies used, e.g., "HTML, CSS, JavaScript, and React for the front-end, with Node.js and MongoDB for the back-end"]. Building the front-end was challenging as we focused on responsive design—ensuring the site looked great on any screen size. On the back-end, we set up databases and server-side logic to handle requests, manage data, and optimize performance.</p>
      <p>Testing was critical in this project. We spent hours debugging, checking for broken links, ensuring compatibility across different browsers, and optimizing the code for fast load times. It was both frustrating and rewarding to see everything come together.</p>
      <p>The end result was a fully functional, responsive web application that was user-friendly and reliable. Presenting it to our mentors and peers felt like a huge accomplishment. Not only did we create something tangible, but we also gained valuable experience in both front-end and back-end development.</p>
    `,
    images: [
      "/web/1.jpg",
      
      
    ],
  }
  ,
  {
    id: 7,
    day: "Software Engineering Project",
    title: "Engineering a Real-World Solution: Our Software Dev Journey",
    date: "May 15, 2025",
    summary: "Our Software Engineering project challenged us to design, develop, and deploy a full-scale system that addressed real-world needs, pushing our skills in architecture, collaboration, and agile development to new levels.",
    content: `
      <p>Our Software Engineering project served as one of the most defining academic experiences in our journey. The goal was to build a comprehensive software system that demonstrated not just our technical competence, but also our ability to work effectively as a team under real-world constraints.</p>
      <p>We chose to develop a [insert project type, e.g., "multi-platform booking and reservation system" or "community-based task sharing application"]. From the initial requirement analysis to final deployment, we followed the Software Development Life Cycle (SDLC) with emphasis on agile methodologies and version control practices.</p>
      <p>Our work was divided into phases: planning, designing UI/UX wireframes, creating system architecture, implementing code, and testing for reliability. We used technologies such as [insert stack, e.g., "React, Node.js, and MongoDB"] and tools like Git, Trello, and Figma to stay organized and efficient.</p>
      <p>As expected, we faced issues such as [insert challenges, e.g., "user authentication flaws" or "API integration conflicts"], but through code reviews, daily stand-ups, and constant iteration, we resolved them and improved our final product significantly.</p>
      <p>By project completion, we presented a polished software solution, complete with documentation, test cases, and a deployment plan. It wasn’t just about building an app—it was about understanding software engineering principles and applying them in a team environment. This experience prepared us for the demands of the tech industry and made us more confident as future professionals.</p>
    `,
    images: [
      "/pin/1.jpg",
      "/pin/2.jpg",
    ],
  }
  
  ,
]

function App() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [particlesVisible, setParticlesVisible] = useState(true)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    // Add meta viewport tag for better mobile responsiveness
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.getElementsByTagName("head")[0].appendChild(meta)

    // Add fade-in effect when page loads
    setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleBackClick = () => {
    setSelectedPost(null)
    window.scrollTo(0, 0)
    setParticlesVisible(true)
  }

  const handlePostSelect = (post) => {
    setSelectedPost(post)
    setParticlesVisible(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className={`app ${isLoaded ? "app-loaded" : ""}`}>
      {particlesVisible && <ParticlesAnimation />}
      {selectedPost ? (
        <BlogDetail post={selectedPost} onBack={handleBackClick} isMobile={isMobile} />
      ) : (
        <BlogList posts={blogData} onSelect={handlePostSelect} isMobile={isMobile} />
      )}
    </div>
  )
}

function ParticlesAnimation() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 1 + Math.random() * 3,
          speed: 0.5 + Math.random() * 1.5,
          opacity: 0.1 + Math.random() * 0.7,
          color: Math.random() > 0.5 ? "#00f2ff" : "#0051ff",
        })
      }
      setParticles(newParticles)
    }

    createParticles()
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          x: particle.x + (Math.random() - 0.5) * 0.2,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  )
}

function BlogList({ posts, onSelect }) {
  return (
    <div className="blog-list-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">Earl</div>
          </div>
          <h1>Earl</h1>
          <p>Documenting Our Journey Through Technology & Innovation</p>
          <div className="header-decoration">
            <span></span>
          </div>
        </div>
      </header>

      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} onSelect={onSelect} />
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">TC</div>
          </div>
          <p>© {new Date().getFullYear()} Tech Chronicles</p>
          <p className="footer-motto">"Innovate. Create. Transform."</p>
          <div className="social-links">
            <a href="#" aria-label="GitHub" className="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BlogCard({ post, onSelect }) {
  return (
    <div className="blog-card" onClick={() => onSelect(post)}>
      <div className="card-image" style={{ backgroundImage: `url(${post.images[0]})` }}>
        <div className="card-day">{post.day}</div>
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <h2>{post.title}</h2>
        <p className="date">{post.date}</p>
        <p className="summary">{post.summary}</p>
        <div className="view-details">
          <span>Read More</span>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function BlogDetail({ post, onBack, isMobile }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageLoaded(false)
      setCurrentImage((prev) => (prev + 1) % post.images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [post.images.length])

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <div className="blog-detail-container">
      <button onClick={onBack} className="back-button">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </svg>
        {!isMobile && <span>Back to All Posts</span>}
      </button>

      <div className="detail-header">
        <div className="header-overlay"></div>
        <img
          src={post.images[currentImage] || "/placeholder.svg"}
          alt={post.title}
          className={`header-image ${isImageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
        <div className="header-content">
          <div className="day-badge">{post.day}</div>
          <h1>{post.title}</h1>
          <p className="date">{post.date}</p>
        </div>
      </div>

      <div className="content-container">
        <div className="content-wrapper">
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="image-gallery">
            {post.images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${post.title} - ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation">
        <button onClick={onBack} className="back-button bottom-button">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
          </svg>
          {!isMobile && <span>Back to All Posts</span>}
        </button>
      </div>
    </div>
  )
}

export default App
