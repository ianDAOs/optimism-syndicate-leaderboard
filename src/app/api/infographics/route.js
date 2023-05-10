import { NextResponse } from 'next/server';
import { ALCHEMY_API_BASE_URL, CONTRACT_ADDRESS } from '@/data/config';

export async function GET() {

    const apiKey = process.env.ALCHEMY_API_KEY;
    const apiUrl = `${ALCHEMY_API_BASE_URL}/nft/v3/${apiKey}/getContractMetadata?contractAddress=${CONTRACT_ADDRESS}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        },
        next: {
            revalidate: 60
        }
    };

    const data = await fetch(apiUrl, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return NextResponse.json({ data });

}