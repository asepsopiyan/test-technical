import React, { useState } from 'react';

const Equipment = ({ equipName }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className='flex-col gap-4 text-sm bg-white/20 p-2 rounded-md'>
            <p className='font-semibold mb-2'>{equipName}</p>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                />
                <div className={`relative w-9 h-5 rounded-full ${isChecked ? 'bg-green-600' : 'bg-gray-200'} transition-all`}>
                    <div
                        className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform ${isChecked ? 'translate-x-4' : 'translate-x-1'} transition-all`}
                    />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {isChecked ? 'ON' : 'OFF'}
                </span>
            </label>
        </div>
    )
}

export default Equipment