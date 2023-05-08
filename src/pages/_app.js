import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Optimism Co-grants Leaderboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* add favicon */}
                {/* add social previews */}
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

// persistent layout
// state between pages
// global css