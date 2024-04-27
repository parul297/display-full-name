import { useState } from "react"; 


const DisplayFullName =() =>{
 const [FirstName , SetFirstName] = useState ()
 const [LastName , SetLastName] =useState()
  const [FullName , SetFullName] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault() ;
    if(!FirstName || !LastName) {
        SetFullName ();
        return ;
    }
     let res = FirstName + " " + LastName ;
     SetFullName(res)
  };

    return (
      <>
    <div className="App">
         <h1>Full Name Display</h1>
         <form onSubmit={handleSubmit}>
         <label htmlFor="first name">First Name:</label>
          <input type="text"  value={FirstName} onChange={(e)=>SetFirstName(e.target.value)} required/> 
          <label htmlFor="last name">Last Name:</label>
          <input type="text" value={LastName} onChange={(e)=>SetLastName(e.target.value)} required/>
          <button type="submit">Submit</button>
          </form>
          {FullName && <div>Full Name: {FullName}</div>}  
    </div>
    </>
    );
}
export default DisplayFullName