import React, { useState, useEffect } from "react";

export function Example() {
  const [count, setCount] = useState(0);
  const [noteVisible, setNoteVisible] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setNoteVisible(true);
        }}
      >
        Click me
      </button>
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
