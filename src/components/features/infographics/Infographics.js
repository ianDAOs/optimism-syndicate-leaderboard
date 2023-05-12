'use client';

import { useState, useEffect } from 'react';
import Subtitle from '@/components/ui/main/Subtitle';

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
        <section className="px-4">
            <Subtitle title="Summary" />
            <p className="pt-3 text-5xl">$$$</p>
            <p className="pt-1 text-sm text-gray-500">Total Contribution Amount</p>
            <p className="pt-3 text-5xl">###</p>
            <p className="pt-1 text-sm text-gray-500">Total Contributions</p>
            <p className="pt-3 text-2xl">$$$</p>
            <p className="pt-1 text-sm text-gray-500">Largest Contribution</p>
            <p className="pt-3 text-2xl">{data ? data.totalSupply : ("Loading...")}</p>
            <p className="pt-1 text-sm text-gray-500">Number of Contributors</p>
            <p className="pt-3 text-2xl">###</p>
            <p className="pt-1 text-sm text-gray-500">Most Contributions</p>
            <p className="pt-3 text-2xl">$$$</p>
            <p className="pt-1 text-xs text-gray-500">Implied Impact</p>
            <p className="pt-10 text-sm">{data ? data.address : ("Loading...")}</p>
            <p className="pt-0 text-xs text-gray-500">Safe Address</p>
            <p className="pt-3 text-sm">{data ? data.address : ("Loading...")}</p>
            <p className="pt-0 text-xs text-gray-500">ERC-721M Contract Address</p>
            <p className="pt-3 text-sm">{data ? data.name : ("Loading...")}</p>
            <p className="pt-0 text-xs text-gray-500">Name</p>
            <p className="pt-3 text-sm">{data ? data.symbol : ("Loading...")}</p>
            <p className="pt-0 text-xs text-gray-500">Symbol</p>
        </section>
    );
}