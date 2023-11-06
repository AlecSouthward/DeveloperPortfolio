import Navbar from "./navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h2>Projects</h2>
      <h3><a href='https://github.com/AlecSouthward/iTunesSearch'
        target="_blank" className="github-link">iTunes Search</a></h3>
      <p>iTunes Search App is a web application that 
        allows users to search for music, movies, 
        TV shows, and more using the iTunes Search 
        API. Users can view search results and add 
        their favorite items to a favorites list.</p>

      <h3><a href='https://github.com/AlecSouthward/HangmanReact'
        target="_blank" className="github-link">Hangman</a></h3>
      <p>This is a fun word-guessing game built 
        with React. You can play it on your own machine.</p>

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

        .github-link {
          text-decoration: none;
          color: rgba(0, 0, 100, 0.5);
        }

        .github-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Projects;