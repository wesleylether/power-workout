import type { NextApiRequest, NextApiResponse } from 'next'

export interface Workout {
    name: string;
    seconds: number;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Workout[]>
) {
    if (req.method !== 'GET') {
        throw new Error('Only get data trough GET request')
    }

    res.status(200).json(
        [
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Mountain Climbing',
                seconds: 30,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Push ups',
                seconds: 30,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Shoulder press',
                seconds: 30,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Rotate',
                seconds: 30,
            },
            {
                name: 'Pauze',
                seconds: 60,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Mountain Climbing',
                seconds: 30,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Push ups',
                seconds: 30,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Shoulder press',
                seconds: 30,
            },
            {
                name: 'Planking',
                seconds: 15,
            },
            {
                name: 'Rotate',
                seconds: 30,
            },
        ]
    )
}
