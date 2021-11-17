import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Children from "./children";

export default function Tree() {
  const {
    data,
    setListChildren,
    setIdPai,
    idPai
  } = useContext(AppContext);

  function handleClick(id) {

    if(document.querySelector('.item'+id).classList.contains('active')) {
      document.querySelector('.item'+id).classList.remove('active')
      
      setIdPai('');

    } else {
      document.querySelector('.item'+id).classList.add('active')
      var pai = data.find(item => item.id === id);
      var list = Object.keys(pai.children).map(key => pai.children[key]);
  
      setListChildren(list);
      setIdPai(id)

    }

  }

  return(
    <div className="container">
      {data.length ?
        <ul 
          className="lista-principal"
        >
          {
            data.map(item => {
              return(
                <li
                  className={'children item'+ item.id}
                  key={item.id}
                >
                  <div>
                    <input
                      type="checkbox"
                      id={item.id}
                      name={item.id}
                      onClick={() => handleClick(item.id)}
                    />
                    <label for={item.id}>
                      {item.name}
                    </label>
                  </div>
                  <ul className="list-children">
                    {idPai === item.id ? 
                      <Children />
                      :

                      ''
                    }
                  </ul>
                </li>
                
              )
            })
          }
        </ul> : <h1> loading list of characters....</h1>
      }
    </div>
  )
}