/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import '../index.css';
import '../App.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import { discordIcon, finalSpaceGroup } from './data';
import Items, { Icon } from './items';

function SideBar() {
  const [characters, updateCharacters] = useState(finalSpaceGroup);
  const [active, setActive] = useState('');
  const [dragStart, setDragStart] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('groups')) {
      const group = location.pathname.split('/')[2];
      setActive(group);
    } else {
      setActive('Discord');
    }
  }, []);
  const handleDrop = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
    setDragStart(false);
  };
  const handleStart = () => {
    setDragStart(true);
  };

  return (
    <div className="w-[70px] min-w-[70px] bg-gray-800 pb-10 overflow-y-auto example">
      <ul className="flex flex-col items-center mt-2">
        <DragDropContext onDragEnd={handleDrop} onBeforeDragStart={handleStart}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {discordIcon.map(({ id, name, thumb }, index) => (
                  <Icon
                    setActive={setActive}
                    key={index}
                    name={name}
                    id={id}
                    thumb={thumb}
                    index={index}
                    active={active}
                  />
                ))}
                <div className="bg-gray-700 p-[1px] mb-2 rounded-xl" />
                {characters.map(({ id, name, thumb }, index) => (
                  <Items
                    isDragDisabled={characters.length === 1}
                    setActive={setActive}
                    key={id}
                    name={name}
                    id={id}
                    thumb={thumb}
                    index={index}
                    active={active}
                    dragStart={dragStart}
                  />
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </ul>
    </div>
  );
}

export default SideBar;
