import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

const Header = () => {

// const a = "true"
// console.log(typeof a) //string
// console.log(typeof JSON.parse(a)) //boolean

// console.log(props.theme)
//  const [isdark, SetDark] = theme
const  [isdark, SetDark] = useContext(themeContext)

  // Initialize state from localStorage

  // const [isdark, SetDark] = useState(JSON.parse(localStorage.getItem("isdark")))

//     () => {
//     const storage = localStorage.getItem("isdark");
//     return storage === "true";
//   });

  // Effect to add/remove dark class based on state
  // useEffect(() => {
  //   if (isdark) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [isdark]);

  return (
    <>
      <header className={`header ${isdark ? "dark" : " "}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world</a>
          </h2>
          <p
            className="dark-mode"
            onClick={() => {
              SetDark((prevIsDark) => {
                const newIsDark = !prevIsDark;
                localStorage.setItem("isdark", newIsDark);
                return newIsDark;
              });
            }}
          >
            <i className={`fa-regular fa-${isdark ? 'sun' : 'moon'}`}></i>  Dark mode
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
