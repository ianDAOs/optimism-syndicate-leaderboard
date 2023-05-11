'use client';

import { useState, useEffect } from 'react';

export default function Infographics() {

    const [data, setData] = useState(null);

    // Fetch ERC-721M smart contract data from Alchemy
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/contractData');
            const data = await response.json();
            setData(data);
        }

        fetchData();
    }, []);

    return (
        <section>
            <p>Infographics</p>
            <p>Total Contribution Amount</p>
            <p>Total Contributions: {data ? data.totalSupply : ("Loading...")}</p>
            <p>Largest Contribution</p>
            <p>Number of Contributors</p>
            <p>Most Contributions</p>
            <p>Implied Impact</p>
            <p>Safe Address</p>
            <p>ERC-721M Contract</p>
            <p>Address: {data ? data.address : ("Loading...")}</p>
            <p>Name: {data ? data.name : ("Loading...")}</p>
            <p>Symbol: {data ? data.symbol : ("Loading...")}</p>
        </section>
    );
}