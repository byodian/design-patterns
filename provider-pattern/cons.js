const CountContext = React.createContext(null);

// When you click on Increment, however, you can see that it's not just the
// count that re-renders. The date in the Reset component re-renders as well!
function Rest() {
  const { setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(0)}>Reset count</button>
      <div>Last reset: {new Date().getTime()}</div>
    </div>
  );
}

function Button() {
  const { count, setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count: {count}</div>
    </div>
  );
}

function useCountContext() {
  const context = React.useContext(CountContext);
  
  if (!context) {
    throw new Error('useCountContext must be used within a CountProvider');
  }

  return context;
}

function CountContextProvider ({ children }) {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function App() {
  return (
    <div className="app">
      <CountContextProvider>
        <Button />
        <Rest />
      </CountContextProvider>
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById('app'))
  .render(<App />);
