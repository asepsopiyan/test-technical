/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Menu = ({ name, url }) => {
    return (
        <li>
            <a
                href={`${url}`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >

                <span className="ml-3">{name}</span>
            </a>
        </li >
    )
}

export default Menu