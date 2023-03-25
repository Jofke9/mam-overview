
import './App.css';
import Builder from './components/Builder';

function App() {
  return (
    <div>
      <div className="flex items-center justify-center h-24 bg-blue-500 text-white w-full">
        <h1 className='text-4xl font-bold'> Overview Mines and Magic Troops </h1>
      </div>
      <Builder></Builder>
    </div>
  );
}

export default App;
