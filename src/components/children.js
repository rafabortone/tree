import { useContext } from "react";
import { AppContext } from '../context/AppContext';

export default function Children() {
  const {
    listChildren
  } = useContext(AppContext);

  return(
    <>
      {listChildren.length ?
        <ul>
          {
            listChildren.map(item => {
              return(
                <li
                className={'item'+ item.id}
                  key={item.id}
                >
                  <div>
                    <input
                      type="checkbox"
                      id={item.id}
                      name={item.id}
                    />
                    <label for={item.id}>
                      {item.name}
                    </label>
                  </div>
                </li>
                
              )
            })
          }
        </ul> : ''
      }
    </>
  )
}