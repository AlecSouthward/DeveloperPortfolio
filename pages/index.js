import Navbar from "./navbar";

function Welcome() {
    return (
        <div className="welcome-container">
            <Navbar />
            <div className="content">
                <h1>Hello and welcome to my Developer Portfolio.</h1>
                <img src="/static/StaticImage.jpg" className="my-img"/>
            </div>

            {/* Styles using styled-jsx */}
            <style jsx>{`
            .welcome-container {
              background-color: #f4f4f4;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .welcome-container Navbar {
                display: none;
            }
    
            .content {
              margin-top: 2rem;
              text-align: center;
            }
    
            h1 {
              font-size: 2.5rem;
              color: #333;
            }

            .my-img {
                box-shadow: 2px 2px 4px 4px rgba(0,0,0,0.2);
                border-radius: 12px;
                width: 30%;
            }
          `}</style>
        </div>
    );
}

export default Welcome;