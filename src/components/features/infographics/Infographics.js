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
            <p>Total Contribution Amount - alchemy/usdc</p>
            <p>Total Contributions - backend/alchemy/assettransfers</p>
            <p>Largest Contribution - backend/alchemy/assettransfers</p>
            <p>{data ? data.totalSupply : ("Loading...")} Number of Contributors</p>
            <p>Most Contributions - backend/alchemy/assettransfers</p>
            <p>Implied Impact</p>
            <p>Safe Address</p>
            <p>ERC-721M Contract</p>
            <p>{data ? data.address : ("Loading...")} Address</p>
            <p>{data ? data.name : ("Loading...")} Name</p>
            <p>{data ? data.symbol : ("Loading...")} Symbol</p>
        </section>
    );
}