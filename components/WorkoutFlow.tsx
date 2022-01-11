import React, { FC, ReactElement, useEffect, useState } from 'react'
import WorkoutItem from './WorkoutItem'
import classNames from 'classnames'
import { Workout } from '../types/workout'

interface Props {
    workout: Workout[]
    finished: () => void
}

const WorkoutFlow: FC<Props> = ({ workout, finished }): ReactElement => {
    const [index, setIndex] = useState<number>(0)
    const [activeWorkout, setActiveWorkout] = useState<Workout>(workout[index])
    const [nextWorkout, setNextWorkout] = useState<Workout>()

    const nextIndex = () => {
        if (index + 1 === workout.length) {
            return finished()
        }

        setIndex(index + 1)
    }

    useEffect(() => {
        setActiveWorkout(workout[index])

        if (index + 1 < workout.length) {
            setNextWorkout(workout[index + 1])
        } else {
            setNextWorkout(undefined)
        }
    }, [index, workout])

    return (
        <div
            className={classNames(
                'p-4 w-full max-w-sm md:max-w-xl text-white text-center divide-purple-400',
                { 'divide-y': !!nextWorkout }
            )}
        >
            <WorkoutItem
                className={'py-2 md:py-8'}
                workout={activeWorkout}
                onFinish={nextIndex}
            />

            <div className={'py-2 md:py-8 text-purple-400'}>
                {nextWorkout && (
                    <>
                        <div className={'mb-2 text-xl'}>Next:</div>
                        <div className={'text-4xl md:text-6xl font-bold'}>
                            {nextWorkout.name}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default WorkoutFlow
