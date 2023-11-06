import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link className='nav-link' href="/about">
                <p className='plink'>About Me</p>
            </Link>

            <Link className='nav-link' href="/contact">
                <p className='plink'>Contact Me</p>
            </Link>

            <Link className='nav-link' href="/projects">
                <p className='plink'>My Projects</p>
            </Link>

            {/* Styles using styled-jsx */}
            <style jsx>{`
                nav {
                    background-color: rgba(0, 0, 0, 0.1);
                    color: white;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }

                .nav-links {
                    display: flex;
                }

                .nav-link {
                    color: white;
                    text-decoration: none;
                    margin-left: 1.5rem;
                    transition: all 0.3s ease;
                }

                .plink {
                    color: black;
                    font-weight: 700;
                    font-size: large;
                    margin: 0px 15px 0px 15px;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;