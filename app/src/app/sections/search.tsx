"use client";

import React, {useState} from 'react';
import {Search} from "@components/molecules";
import {useRouter} from "next/navigation";

export const SectionSearch = () => {
    const router = useRouter();

    const [query, setQuery] = useState('');

    const searchHandler = () => {
        router.push(`/search?q=${query}`)
    }
    return (
        <Search value={query} onChange={value => setQuery(value)}  onClick={searchHandler}/>
    )
}