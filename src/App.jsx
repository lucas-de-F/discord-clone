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
      <div className='w-[70px] min-w-[70px] bg-gray-800 pb-10 overflow-y-auto example'>
          <div>oioi1</div>
          <div>oioi4</div>
          <div>oioi5</div>
          <div>oioi6</div>
          <div>oioi7</div>
          <div>oioi8</div>
          <div>oioi9</div>
      </div>
      <div className=' w-[250px] min-w-[250px] bg-gray-700'></div>
      <div className='w-full bg-gray-600'></div>
    </div>
  );
}

export default App;
