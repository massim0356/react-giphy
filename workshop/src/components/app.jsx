import React, { Component } from "react";
import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const selectedId = "";
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={[]} />
        </div>
      </div>
    );
  }
}

export default App;
