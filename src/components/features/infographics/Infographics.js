'use client';

import { useState, useEffect } from 'react';
import Subtitle from '@/components/ui/main/Subtitle';
import DataLabel from './DataLabel';
import ContractDataLabel from './ContractDataLabel';

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
        <section className="py-4 px-5 border-gray-300">
            <Subtitle title="Summary" />
            <p className="pt-3 text-5xl">$$$</p>
            <DataLabel label="Total Contributions" />
            <p className="pt-3 text-5xl">{data ? data.totalSupply : ("Loading...")}</p>
            <DataLabel label="Total Contributions" />
            <p className="pt-3 text-2xl">$$$</p>
            <DataLabel label="Largest Contribution" />
            <p className="pt-3 text-2xl">###</p>
            <DataLabel label="Most Contributions" />
            <p className="pt-3 text-2xl">$$$</p>
            <DataLabel label="Implied Impact" />
            <p className="pt-10 text-sm">{data ? data.address : ("Loading...")}</p>
            <ContractDataLabel label="Optimism Co-Grant Address" />
            <p className="pt-3 text-sm">{data ? data.address : ("Loading...")}</p>
            <ContractDataLabel label="ERC-721M Contract Address" />
            <p className="pt-3 text-sm">{data ? data.name : ("Loading...")}</p>
            <ContractDataLabel label="Name" />
            <p className="pt-3 text-sm">{data ? data.symbol : ("Loading...")}</p>
            <ContractDataLabel label="Symbol" />
        </section>
    );
}