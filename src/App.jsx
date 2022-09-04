import './index.css';
import './App.css';

function App() {
  const getTitles = () => {
    const title = document.getElementById('app-title')
    const myText = 'Discord'
  
    title.innerText = myText + ' | SUCO DE FRUTA'
  }
  getTitles()
  return (
    <div className='flex h-screen w-screen flex-row'>
      <div className=' w-[70px] min-w-[70px] bg-gray-800'></div>
      <div className=' w-[250px] min-w-[250px] bg-gray-700'></div>
      <div className='w-full bg-gray-400'></div>
    </div>
  );
}

export default App;
