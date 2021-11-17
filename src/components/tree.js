import { useContext, useEffect } from "react";
import { AppContext } from '../context/AppContext';


export default function Tree() {
  const {
    data
  } = useContext(AppContext);

  function handleClick(id) {

    const checkPai = document.querySelector('.item' + id)
    var checkChildrens = document.querySelectorAll('.item' + id + ' .list-children input[type="checkbox"]')
    var itensChildrens = document.querySelectorAll('.item' + id + ' .list-children li')

    if (checkPai.classList.contains('active')) {
        checkPai.classList.remove('active')
   
      for (let item of itensChildrens) {
        item.classList.remove('active')
      }

      for (let children of checkChildrens) {
        children.checked = false;
      }

    } else {
      checkPai.classList.add('active')

      for (let item of itensChildrens) {
        item.classList.add('active')
      }

      for (let children of checkChildrens) {
        children.checked = true;
      }

    }
    
  }

  return (
    <div className="container">
      {data.length ?
        <ul
          className="lista-principal"
        >
          {
            data.map(item => {

              let lista = item.children
              let childrens = Object.keys(lista).map(key => lista[key]);

              return (
                <li
                  className={'children item' + item.id}
                  key={item.id}
                >
                  <div>
                    <input
                      type="checkbox"
                      id={item.id}
                      name={item.id}
                      onChange={() => handleClick(item.id)}
                    />
                    <label htmlFor={item.id}>
                      {item.name}
                    </label>
                  </div>
                  <ul className="list-children">
                    {childrens.map(children => {
                      let lista = children.children
                      let childrens = Object.keys(lista).map(key => lista[key]);
                      return (
                        <li
                          className={'children item' + children.id}
                          key={children.id}
                        >
                          <div>
                            <input
                              type="checkbox"
                              id={children.id}
                              name={children.id}
                              onChange={() => handleClick(children.id)}
                            />
                            <label htmlFor={children.id}>
                              {children.name}
                            </label>
                          </div>
                          <ul className="list-children">
                            {childrens.map(children => {
                              return (
                                <li
                                  className={'children item' + children.id}
                                  key={children.id}
                                >
                                  <div>
                                    <input
                                      type="checkbox"
                                      id={children.id}
                                      name={children.id}
                                      onChange={() => handleClick(children.id)}
                                    />
                                    <label htmlFor={children.id}>
                                      {children.name}
                                    </label>
                                  </div>
                                </li>

                              )
                            })
                            }
                          </ul>
                        </li>

                      )
                    })
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