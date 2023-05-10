'use client';

import { useState, useEffect } from 'react';

export default function Infographics() {

    const [data, setData] = useState(null);

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
            <p>Total Contributions</p>
            <p>Number of Contributors</p>
            <p>Implied Impact</p>
            <p>Safe Address</p>
            <p>ERC-721M Contract</p>
            {data ? (
                <>
                    <p>Address: {data.address}</p>
                    <p>Name: {data.name}</p>
                    <p>Symbol: {data.symbol}</p>
                    <p>Supply: {data.totalSupply}</p>
                </>
            ) : (
                <>
                    <p>Address: Loading...</p>
                    <p>Name: Loading...</p>
                    <p>Symbol: Loading...</p>
                    <p>Supply: Loading...</p>
                </>
            )}
        </section>
    );
}