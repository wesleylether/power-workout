import React, {
    FC,
    HTMLAttributes,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Workout } from '../pages/api/data'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/dist/DrawSVGPlugin'
import classNames from 'classnames'
gsap.registerPlugin(DrawSVGPlugin)

interface Props extends HTMLAttributes<HTMLDivElement> {
    workout: Workout
    onFinish: () => void
}

const WorkoutItem: FC<Props> = ({
    workout,
    onFinish,
    className,
    ...props
}): ReactElement => {
    const circleRef = useRef(null)
    const [seconds, setSeconds] = useState(workout.seconds)

    useEffect(() => setSeconds(workout.seconds), [workout])

    useEffect(() => {
        if (!circleRef) return

        let interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            } else {
                clearInterval(interval)
                onFinish()
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [workout, onFinish, seconds])

    useEffect(() => {
        if (!circleRef.current) return
        gsap.to(circleRef.current, {
            duration: 0.2,
            ease: 'power2.out',
            drawSVG: `100% ${100 - (seconds / workout.seconds) * 100}%`,
        })
    }, [seconds, workout])

    return (
        <div
            className={classNames(
                'relative text-center md:space-y-4',
                className
            )}
            {...props}
        >
            <div className={'p-8 relative flex justify-center items-center'}>
                <svg
                    viewBox="0 0 100 100"
                    className={'stroke-white -rotate-90'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        ref={circleRef}
                        cx={'50'}
                        cy={'50'}
                        r={'45'}
                        strokeWidth={'5'}
                        fill={'none'}
                    />
                </svg>
                <div className={'absolute text-6xl font-bold'}>{seconds}</div>
            </div>
            <div className={'px-4 text-4xl md:text-6xl font-bold'}>
                {workout.name}
            </div>
        </div>
    )
}

export default WorkoutItem
