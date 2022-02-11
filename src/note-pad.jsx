import React, { useState, useEffect } from "react";

export function NotePad(props) {
  const [count, setCount] = useState(0);
  const [noteVisible, setNoteVisible] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Mood Swing Tracker`;
  });

  const openNotePad = (enable) => {
    setNoteVisible(enable);
  };
  return (
    <div>
      <p>Add your notes here!!</p>
      <div>
        {noteVisible ? (
          <form>
            <textarea />
            <button id="save" onClick={() => setNoteVisible(false)}>
              Save
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
