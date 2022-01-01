import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Power Workout | LetherMade</title>
                <meta name="description" content="7-minute power workout! Enjoy"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={'w-screen h-screen flex justify-center items-center'}>
                <h1>Hello world</h1>
            </div>
        </>
    )
}

export default Home
