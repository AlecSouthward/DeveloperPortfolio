import Navbar from "./navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h2>About Me</h2>
      <p>Hello, I'm Alec Southward, a passionate 
        web developer specializing in creating 
        dynamic and interactive websites. With 
        a strong focus on crafting seamless 
        user experiences, I specialize in programming 
        websites using cutting-edge technologies 
        like React and Next.js.
        <br/><br/>
        I thrive on transforming creative ideas 
        into functional, responsive, and visually 
        appealing web applications. My expertise 
        lies in leveraging the power of React and 
        Next.js to build robust, scalable, and 
        high-performance websites that engage users 
        and deliver exceptional results.
        <br/><br/>
        Driven by curiosity and a love for coding, 
        I constantly explore new trends and 
        techniques in the ever-evolving world of 
        web development. My goal is to not just 
        meet expectations but to exceed them, ensuring 
        that every project I work on is a testament 
        to innovation, functionality, and elegance.
        <br/><br/>
        I am dedicated to pushing the boundaries 
        of what is possible in web development, 
        and I am excited about the opportunity to 
        collaborate on projects that challenge me 
        to learn, grow, and contribute meaningfully 
        to the digital landscape.
        <br/><br/>
        Let's work together to bring your web 
        development ideas to life and create online 
        experiences that leave a lasting impression.</p>

      {/* Styles using styled-jsx */}
      <style jsx>{`
        div {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
        }

        p {
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default About;