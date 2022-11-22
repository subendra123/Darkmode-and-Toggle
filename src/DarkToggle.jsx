import React,{ useEffect, useState } from 'react'

const DarkToggle = () => {
    const[theme, setTheme] = useState("light-theme")

  const toggleTheme = () => {
    if(theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  
  useEffect(() => {
    document.body.className = theme;
     
  },[theme]);


  return (
  
    <>
    <header>
       <a href="#">Subendra Mandal</a>
   
     <nav>
       <ul>
         <li>Home</li>
         <li>About</li>
         <li>Services</li>
       </ul>
     </nav>
     </header>
   <main>
     <section>
       <div className="container grid grid-two-column">
       <div className="hero-section-data">
         <h1>React Dark Mode</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sit fugit voluptate unde, soluta illo quisquam laboriosam quo hic, delectus maxime odio labore impedit! Maiores saepe id repellat delectus corrupti placeat quia corporis inventore debitis odio maxime architecto quibusdam non, aliquam dicta quisquam sed, nostrum porro aliquid, explicabo illo adipisci?
         </p>
         <a href="#" className="btn" onClick={() => toggleTheme()}>Toggle Mode</a>
       </div>
      
       <div className="hero-section-image">
       <img src="images/pro.jpg" alt="rightside image"  />
       </div>
       </div>
     </section>
   </main>

   </>
 );
}

  
  

export default DarkToggle