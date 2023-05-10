'use client';

import { useState, useEffect } from 'react';

export default function Infographics() {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/infographics');
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
            <p>{JSON.stringify(data)}</p>
            <p>Implied Impact</p>
            <p>ERC-721M Contract | Safe Address</p>
        </section>
    );
}