/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const Img = styled.img`
  ${tw`w-12 h-12 flex bg-gray-600 items-center hover:cursor-pointer justify-center rounded-full hover:bg-indigo-600 hover:rounded-xl hover:transition-all ease-in-out`}
  ${({ active }) => active
    && `
    background: rgba(79, 70, 229, var(--tw-bg-opacity));
    border-radius: 0.75rem
  `}
`;

const WhiteBar = styled.img`
  ${tw`absolute bg-white h-3 w-[5px] rounded-r-2xl left-0 transition-all ease-in-out`}
  ${({ hover }) => hover
    && `
  height: 1.3em
`}
  ${({ active }) => active
    && `
    height: 2em
  `}

  ${({ appear }) => appear
    && `
   opacity: 0
`}
  ${({ hidden }) => hidden
    && `
    display: none
`}
`;

const GroupName = styled.p`
  ${tw`opacity-0 absolute`}
  ${({ active }) => active
    && tw`flex flex-wrap rounded-3xl absolute bg-gray-900 text-white p-2 max-w-[200px] left-[75px] opacity-100 transition-all`}
`;

function Items({
  id, thumb, name, index, active, setActive, dragStart, isDragDisabled,
}) {
  const [hover, setHover] = useState('');
  const navigate = useNavigate();
  return (
    <Draggable key={id} draggableId={id} index={index} isDragDisabled={isDragDisabled}>
      {(provided) => (
        <li
          className="h-14"
          key={id}
          onClick={() => {
            setActive(id);
            navigate(`/groups/${id}`);
          }}
          onMouseEnter={() => setHover(id)}
          onMouseLeave={() => setHover('')}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex flex-col items-center justify-center">
            <WhiteBar
              hover={id === hover && active !== id}
              active={active === id}
              appear={dragStart}
            />
            <GroupName active={id === hover}>{name}</GroupName>
            <Img src={thumb} alt={`${name} Thumb`} active={active === id} />
          </div>
        </li>
      )}
    </Draggable>
  );
}

export function Icon({
  id, thumb, name, index, active, setActive,
}) {
  const [hover, setHover] = useState('');

  const outHandler = () => {
    setHover('');
  };
  const navigate = useNavigate();

  return (
    <li
      className="h-14"
      key={id}
      onClick={() => {
        setActive(name);
        return navigate('/contacts');
      }}
      onMouseEnter={() => setHover(name)}
      onMouseLeave={outHandler}
    >
      <div className="flex flex-col items-center justify-center">
        <WhiteBar hover={name === hover && active !== name} active={active === name} />
        <GroupName active={name === hover}>{name}</GroupName>
        <Img src={thumb} alt={`${name} Thumb`} active={active === name} />
      </div>
    </li>
  );
}

export default Items;
