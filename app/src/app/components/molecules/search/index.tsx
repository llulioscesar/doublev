"use client";
import React, {FC, useEffect, useState} from 'react';

type SearchProps = {
    onClick?: () => void;
    value?: string;
    onChange?: (value: string) => void;
}

const Search: FC<SearchProps> = props => {
    const {value: query = '', onClick, onChange} = props;

    const [value, setValue] = useState(query);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (value.length < 4 || value.includes('doublevpartners')) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [value]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim();
        setValue(query);
        onChange && onChange(query);
    }

    return (
        <>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative mt-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       type="search"
                       value={value}
                       onChange={handleOnChange}
                       id="default-search"
                       placeholder="Buscar usuarios de GitHub"
                />
                <button
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-200"
                    disabled={disabled}
                    onClick={onClick}
                >
                    Buscar
                </button>
            </div>
            {disabled && value !== '' && (
                <span className="text-red-400 text-xs mt-10 text-left">
                    búsqueda de usuarios sea de un <strong>mínimo de 4 caracteres</strong> y que no contenga <strong>"doublevpartners"</strong>
                </span>
            )}
        </>
    )
}

export default Search;