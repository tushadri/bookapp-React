import React from 'react';
import Card from './Booklist'
import data from './data'




  const App= () =>(
    <React.Fragment>
    <h1 className="heading-style">Top 4 BOOKS</h1>
    {data.map( (value) =>{
        return(
         <Card
         imgsrc={value.imgsrc}
         title={value.title}
         author={value.author}
         link={value.link}
         />
     );
 })}
    </React.Fragment> 
  )

  export default App;
   
  