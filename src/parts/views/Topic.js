import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

export default function Topic() {
  let { topicID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Topic yang dipilih adalah {topicID}
      </header>
    </div>
  );
}
