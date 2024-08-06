import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps{
        text: string;
        to: string
}

const ButtonLink : React.FC<ButtonLinkProps> = ({text,to})=>{
 return <Link
 className="text-black px-5 py-2.5 rounded-md hover:bg-gray-100 text-xl"
 to={to}
>
 {text}
</Link>
}



export default ButtonLink;