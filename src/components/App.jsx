import React from "react";
import Term from "./Terms";
import emojipedia from "../emojipedia";

function createTerms(terminfo){
  return (<Term 
    key = {terminfo.id}
    emoji = {terminfo.emoji}
    name = {terminfo.name}
    meaning = {terminfo.meaning}
    />);
  }
  
  function App() {
    return (
      <div>
      <h1>
      <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
        { emojipedia.map(createTerms) }
      </dl>
      </div>
      );
    }
    
    export default App;
    