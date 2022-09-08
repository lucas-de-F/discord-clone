import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const LiComponent = styledComponents.div`
    li {
        ${tw` py-1 flex flex-row items-center justify-between cursor-pointer text-gray-400 rounded-md mx-2 my-0.5`}
        ${({ selected }) => selected
          && tw`
          text-gray-200 bg-gray-500
    `}
    }
    li:hover {
        ${tw`text-gray-300 bg-gray-600`}
    }
`;

const ContactsStyle = styledComponents.div`
    .main {
      ${tw`w-[250px] min-w-[250px] bg-gray-700 pb-12`}
    }
    .text-label {
        ${tw`px-4 my-2 text-gray-400 hover:text-gray-300`}
    }
    .container {
        ${tw`mx-2 flex flex-row items-center`}
    }
    p {
        ${tw`mx-2`}
    }
    .img-icon-fix-class {
      ${tw`w-9 h-9 flex bg-transparent items-center justify-center rounded-full`}
    }
    .img-class {
        ${tw`w-9 h-9 flex bg-gray-600 items-center justify-center rounded-full`}
    }
`;

export default ContactsStyle;
