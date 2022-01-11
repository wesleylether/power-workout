import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import WorkoutFlow from '../components/WorkoutFlow'
import { Workout } from './api/data'
import { useState } from 'react'

export const getStaticProps: () => Promise<
    { notFount: boolean } | { props: { data: Workout[] } }
> = async () => {
    const res = await fetch(`${process.env.HOST}/api/data`)
    const data: Workout[] = await res.json()

    if (!data) {
        return {
            notFount: true,
        }
    }

    return {
        props: { data },
    }
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [finished, setFinished] = useState<boolean>(false)

    return (
        <>
            <Head>
                <title>Power Workout | LetherMade</title>
                <meta
                    name="description"
                    content="7-minute power workout! Enjoy"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className={
                    'w-screen h-screen flex justify-center items-center bg-purple-600'
                }
            >
                {finished ? (
                    <div
                        className={
                            'flex flex-col items-center space-y-4 text-white'
                        }
                    >
                        <div className={'text-[6rem]'}>🏆</div>
                        <div className={'text-4xl'}>Finished!</div>
                    </div>
                ) : (
                    <WorkoutFlow
                        workout={data}
                        finished={() => setFinished(true)}
                    />
                )}
            </div>
        </>
    )
}

export default Home
