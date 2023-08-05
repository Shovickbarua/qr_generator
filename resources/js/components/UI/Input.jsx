import React from "react";
import { slugify } from "../../utils/helpers";

const Input = ({type="text", placeholder="", ...others}) => {
    // const classess = "bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-blue-500 dark:border-blue-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    // const classess="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    const classess="pt-3 pb-2 block w-full px-2.5 mt-0 bg-transparent border rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200";
    
    // return (<input type={type} className={classess} {...others}></input>);
    return (<div className="relative mb-4">
        {type === 'textarea' ? <textarea id={slugify(placeholder)} placeholder={placeholder} className={classess} {...others}></textarea> :
    <input type={type} id={slugify(placeholder)} placeholder={placeholder} className={classess} {...others} />}
        <label for={slugify(placeholder)} className="absolute duration-300 left-3 px-1 top-3 -z-1 origin-0 text-gray-500 bg-white">{placeholder}</label>
    </div>);
}

export default Input;