import { useContext } from "react";
import { AppContext } from '../context/AppContext';

export default function Children() {
  const {
    data,
    listChildren,
    setListChildren
  } = useContext(AppContext);

  console.log(data);

  function handleClick(id) {
    var pai = data.find(item => item.id == id);
    var list = Object.keys(pai.children).map(key => pai.children[key]);
    
    setListChildren(list)

    var children = <Children />

  }

  return(
    <>
      {data.length ?
        <ul>
          {
            data.map(item => {
              return(
                <li
                className={'item'+ item.id}
                  key={item.id}
                >
                  <div
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </div>
                </li>
                
              )
            })
          }
        </ul> : <h1> loading list of characters....</h1>
      }
    </>
  )
}