import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      
         
            <Link to="/">Home</Link> |
        
            <Link to="/blogs">Blogs</Link>    |
         
            <Link to="/contact">Contact</Link>  |

            <Link to="/About">About</Link>  |
          
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;