import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { DiCssdeck } from 'react-icons/di';
import { BiHash } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';

import Gary from '../images/gary.png';
import Cookie from '../images/cookie.jpg';
import Gato from '../images/gato.png';
import Discord from '../images/discord.png';
// import Amigos from '../images/amigos.png';
// import Nitro from '../images/nitro.png';

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

export const finalSpaceGroup = [
  {
    id: 'HaveaCookie',
    name: 'Have a Cookie',
    thumb: Cookie,
  },
  // {
  //   id: 'Group bao',
  //   name: 'Groupbao',
  //   thumb: Cookie,
  // },
];

export const discordIcon = [
  {
    id: 'Discord',
    name: 'Discord',
    thumb: Discord,
  },
];

export const discorIcons = {
  Amigos: <FiUsers />,
  Nitro: <DiCssdeck />,
  Text: <BiHash />,
  Voice: <AiFillSound />,
};

export const ContactsOptions = [
  {
    id: 'Amigos',
    name: 'Amigos',
    icon: discorIcons.Amigos,
  },
  {
    id: 'Nitro',
    name: 'Nitro',
    icon: discorIcons.Nitro,
  },
];

export default finalSpaceCharacters;
