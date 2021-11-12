import Tree from './components/tree';
import AppContextProvider from './context/AppContext'

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Tree/>
      </div>
    </AppContextProvider>
  );
}

export default App;
