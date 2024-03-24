import { useState } from "react";
import "./App.css";
import menu from "./data";
function App() {
  const [arr, setarr] = useState(menu);
  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className="button-handle">
        <button
          onClick={() => {
            const newarr = menu.filter((x) => {
              return x;
            });
            setarr(newarr);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            const newarr = menu.filter((x) => {
              return x.category === "breakfast";
            });

            setarr(newarr);
          }}
        >
          breakfast
        </button>
        <button
          onClick={() => {
            const newarr = menu.filter((x) => {
              return x.category === "lunch";
            });

            setarr(newarr);
          }}
        >
          lunch
        </button>
        <button
          onClick={() => {
            const newarr = menu.filter((x) => {
              return x.category === "shakes";
            });
            setarr(newarr);
          }}
        >
          shakes
        </button>
      </div>

      <div className="card1">
        {arr.map((item) => {
          return (
            <section key={item}>
              <div className="card">
                <img src={item.img} alt="" />
                <div className="div-handle">
                  <h2>{item.title}</h2>
                  <span>{item.price}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
