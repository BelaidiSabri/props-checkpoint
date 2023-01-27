import React from 'react'

const Profile = ({fullName,bio,profession,children,alertMe} ) => {
    function hover(e) {
        e.target.style.background = 'blue';
        e.target.style.transition ='0.5s';
        e.target.style.cursor='pointer';

      }
      function unhover(e) {
        e.target.style.background = '#4CAF50';
        e.target.style.transition ='0.5s'

      }  

    
    
    return (
        <div style={{width:'30%',margin:'auto', backgroundColor:'#35363A', padding:'30px',borderRadius:'20px 20px'}}>
        {children}
        <h1 style={{fontSize:'2rem',fontWeight:'bolder', color:'aliceblue'}}>{fullName}</h1>
        <p style={{fontSize:'1.5rem',fontWeight:'bold',color:'aliceblue'}}>{bio}</p>
        <p style={{fontSize:'1.5rem',fontWeight:'bold',color:'aliceblue'}}>{profession}</p>
        <button onMouseEnter={hover} onMouseLeave={unhover} onClick={() => alertMe(fullName)} style={{backgroundColor:'#4CAF50',borderStyle:'none',padding:'10px',color:'white',borderRadius:'5px 5px', width:'200px' ,fontSize:'20px'}}> alert Me </button>
    </div>
  )
}
Profile.defaultProps = {
    fullName: "foulen",
    bio:"born in Tunisia",
    profession:"battal metrassem"
   };

export default Profile