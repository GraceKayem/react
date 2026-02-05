import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//create entry component: <Entry />
//creatre props to replace the hardcoded data
//import the emji const
//map through the emjis array and rend entry components

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
