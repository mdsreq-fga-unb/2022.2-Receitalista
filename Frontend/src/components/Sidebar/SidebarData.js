import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: "/perfil",
        icon: <BsIcons.BsFillFilePersonFill />,
        cName: 'nav-text'
    },
    {
        title: 'Produtos',
        path: "/produtos",
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Materiais',
        path: "/materiais",
        icon: <GiIcons.GiPaperBagOpen />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Pedidos',
    //     path: "/pedidos",
    //     icon: <FaIcons.FaCartPlus />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Clientes',
    //     path: "/clientes",
    //     icon: <BiIcons.BiUserCircle />,
    //     cName: 'nav-text'
    // }
]

export default SidebarData;