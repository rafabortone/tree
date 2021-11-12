import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Children from "./children";

export default function Tree() {
  const {
    data,
    setListChildren,
    setIdPai
  } = useContext(AppContext);

  console.log(data);

  function handleClick(id) {

    if(document.querySelector('.item'+id).classList.contains('active')) {
      document.querySelector('.item'+id).classList.remove('active')

      document.querySelector('.item'+id+' .list-children').innerHTML = ''

    } else {
      document.querySelector('.item'+id).classList.add('active')
      var pai = data.find(item => item.id == id);
      var list = Object.keys(pai.children).map(key => pai.children[key]);
  
      var content = list.map(children => {
        return (
          '<li class="children item'+ children.id +'" >' +
            children.name +
          '</li>'
        )
      })
      document.querySelector('.item'+id+' .list-children').innerHTML = content;
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
                  <div
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </div>
                  <ul className="list-children"></ul>
                </li>
                
              )
            })
          }
        </ul> : <h1> loading list of characters....</h1>
      }
    </div>
  )
}