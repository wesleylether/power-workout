import type {InferGetStaticPropsType} from 'next'
import Head from 'next/head'
import WorkoutFlow from '../components/WorkoutFlow'
import {Workout} from './api/data'

export const getStaticProps: () => Promise<{ notFount: boolean } | { props: { data: Workout[] } }> = async () => {
    const res = await fetch(`${process.env.HOST}/api/data`)
    const data: Workout[] = await res.json()

    if (!data) {
        return {
            notFount: true,
        }
    }

    return {
        props: { data }
    }
}

function Home({data}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Power Workout | LetherMade</title>
                <meta name="description" content="7-minute power workout! Enjoy"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={'w-screen h-screen flex justify-center items-center'}>
                <WorkoutFlow workout={data} />
            </div>
        </>
    )
}

export default Home
