import React from 'react';
import ReactDOM from 'react-dom';
//core react element 
const heading = React.createElement('h1', null, 'namaste core element of react');
const root = ReactDOM.createRoot(document.getElementById('root')); //element ko  element with jsx ko and component ko ek bar ese react dom se render kar sakte hai' 


//using jsx 
//this jsx converted into react element by babel
// browsers don't understand JSX, so it needs to be transformed into regular JavaScript before it can be run in a browser.
//Parcel is a web application bundler that comes with out-of-the-box support for transforming JSX code into React elements using Babel.
 

//this is jsx
const jsxHeading = <h1>namaste jsx</h1>;
    
    
    //react functional component
    const Title = () =>(
         <h1>this is title</h1>
    );


const number =7;
//component inside component,component composition
    const Heading = () =>(
        <div>
            {number}
            {jsxHeading}  
            {Title()}
             <Title />  
         <h1>namaste functional component</h1>
        </div>
    );
    root.render(<Heading/>);  //element ko  element with jsx ko and component ko ek bar ese render kar sakte he 


