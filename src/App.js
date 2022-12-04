import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "love",
  "😊": "Happiness",
  "👍": "All the best",
  "😉": "Wink",
  "😭": "Cry",
  "🐼": "Panda",
  "🎶": "Music",
  "🤑": "Money Minded",
  "💀": "Skull",
  "✨": "Stars"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={emojiInputHandler} />
      <div>{meaning}</div>
      <h2>Emojis we know</h2>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
