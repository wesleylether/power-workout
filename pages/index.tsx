import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import WorkoutFlow from '../components/WorkoutFlow'
import React, { ReactElement, useState } from 'react'
import { workoutData } from '../data/workoutData'
import { Workout } from '../types/workout'

export const getStaticProps: () => Promise<
    { notFount: boolean } | { props: { data: Workout[] } }
> = async () => {
    if (!workoutData) {
        return {
            notFount: true,
        }
    }

    return {
        props: { data: workoutData },
    }
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [started, setStarted] = useState<boolean>(false)
    const [finished, setFinished] = useState<boolean>(false)

    const renderActive = (): ReactElement => {
        if (!started) {
            return (
                <div
                    className={
                        'p-4 flex flex-col items-center space-y-2 bg-white cursor-pointer bg-opacity-10 transition shadow-lg hover:shadow-md hover:translate-y-0.5 shadow-purple-700 border-2 border-white rounded-xl'
                    }
                    onClick={() => setStarted(true)}
                >
                    <span className={'text-6xl'}>🧗🏼</span>
                    <span className={'text-white text-xl'}>Starten!</span>
                </div>
            )
        }

        if (finished) {
            return (
                <div
                    className={
                        'flex flex-col items-center space-y-4 text-white'
                    }
                >
                    <div className={'text-[6rem]'}>🏆</div>
                    <div className={'text-4xl'}>Finished!</div>
                    <div
                        className={
                            'text-lg text-purple-300 cursor-pointer hover:underline'
                        }
                        onClick={() => {
                            setStarted(false)
                            setFinished(false)
                        }}
                    >
                        Restart?
                    </div>
                </div>
            )
        }

        return <WorkoutFlow workout={data} finished={() => setFinished(true)} />
    }

    return (
        <>
            <Head>
                <title>Power Workout | LetherMade</title>
                <meta
                    name="description"
                    content="7-minute power workout! Enjoy"
                />
            </Head>
            <div
                className={
                    'w-screen h-screen flex justify-center items-center bg-purple-600'
                }
            >
                {renderActive()}
            </div>
        </>
    )
}

export default Home
