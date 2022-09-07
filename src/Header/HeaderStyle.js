import tw from 'twin.macro';

import styled from 'styled-components';

const HeaderStyle = styled.div`
  ${tw`bg-gray-900 w-full h-10 flex  justify-end items-center rounded-t-xl`}

  h3 {
    ${tw`absolute left-[45vw] text-gray-100`}
  }

  div {
    ${tw`flex items-center justify-around w-20 mr-2`}
  }

  button {
    ${tw`text-gray-100 bg-gray-700 p-1 rounded-full hover:bg-gray-600`}
  }
`;
export default HeaderStyle;
