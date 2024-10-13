import "./navbar.css"
import { Link } from "react-router-dom";

const menuitems = [
    {item: "Membership", id:"/membership"},
    {item: "Events", id:"/events"},
    {item: "Prices", id:"/prices"}
  ];

  export default function Navbar(){
    const dropdown = menuitems.map(menuitems =>
       <li> 
        <Link to={menuitems.id}>{menuitems.item}</Link>
        </li>
     );

     return(
        <nav class = "nav">
            <a class = "site-title" href="/">Golf course</a>
             <ul>
                {dropdown}
             </ul>
            
        </nav>
   
        
     )
  };