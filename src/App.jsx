/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import './index.css';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Gary from './images/gary.png';
import Gato from './images/gato.png';

// const data = [{ img, key: 0 }, { img: controle, key: 1 }];
const finalSpaceCharacters = [
  {
    id: 'Gary',
    name: 'Gary',
    thumb: Gary,
  },
  {
    id: 'Gato',
    name: 'Gato',
    thumb: Gato,
  },
];
function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const getTitles = () => {
    const title = document.getElementById('app-title');
    const myText = 'Discord';

    title.innerText = `${myText} | SUCO DE FRUTA`;
  };
  getTitles();

  const handleDrop = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };
  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="w-[70px] min-w-[70px] bg-gray-800 pb-10 overflow-y-auto example">
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({ id, name, thumb }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      // eslint-disable-next-line max-len
                      <li className="m-2" key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div>
                          <img src={thumb} className="w-14 h-14 flex bg-slate-700 items-center hover:cursor-pointer justify-center rounded-full hover:bg-cyan-500 hover:rounded-xl transition duration-300" alt={`${name} Thumb`} />
                        </div>
                        {/* <p>
                          { name }
                        </p> */}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

      </div>
      <div className=" w-[250px] min-w-[250px] bg-gray-700" />
      <div className="w-full bg-gray-600" />
    </div>
  );
}

export default App;
