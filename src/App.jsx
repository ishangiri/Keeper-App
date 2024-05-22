import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateArea";
import ShowArea from "./components/ShowArea";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function addItem(input) {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
  }

  function deleteItem(id) {
    // this function deletes the items whose id is equal to the index of the
    //array while using filter method by returning a new array without that id.
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  function handleChange(event) {
    const value = event.target.value;
    setSearchQuery(value);
  }

  function clearSearch() {
    setSearchQuery("");
  }

  useEffect(() => {
    // Filter items based on the search query whenever it changes
    const filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items, searchQuery]);

  function displayShowArea() {
    while (items.length === 0) {
      return <ShowArea />;
    }
  }

  return (
    <div>
      <Header
        onChange={handleChange}
        value={searchQuery}
        clearSearch={clearSearch}
      />

      <CreateNote onAdd={addItem} displayShowArea={displayShowArea} />

      {filteredItems.length > 0
        ? filteredItems.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteItem}
            />
          ))
        : items.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteItem}
            />
          ))}

      {displayShowArea()}

      <Footer />
    </div>
  );
}

export default App;
