import React, {FC, ReactElement, useEffect, useRef, useState} from 'react'
import {Workout} from '../pages/api/data'

interface Props {
    workout: Workout[];
}

const WorkoutFlow: FC<Props> = ({ workout }): ReactElement => {
    const workoutRef = useRef<Workout[]>(workout)
    const [activeWorkout, setActiveWorkout] = useState<Workout>()

    useEffect(() => {
        if (!workoutRef.current) return

        setActiveWorkout(workoutRef.current.shift())
    }, [])

    return (
        <>
            {JSON.stringify(activeWorkout)}
        </>
    )
}

export default WorkoutFlow
