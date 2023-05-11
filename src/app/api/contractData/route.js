import { NextResponse } from 'next/server';
import { ALCHEMY_API_BASE_URL, CONTRACT_ADDRESS } from '@/data/config';

// API route handler to fetch NFT smart contract metadata from Alchemy
export async function GET() {

    const apiKey = process.env.ALCHEMY_API_KEY;
    const apiUrl = `${ALCHEMY_API_BASE_URL}/nft/v3/${apiKey}/getContractMetadata?contractAddress=${CONTRACT_ADDRESS}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
        next: {
            revalidate: 60
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.serverError('An error occurred while fetching data.');
    }
}