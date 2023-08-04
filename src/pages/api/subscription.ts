/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiResponse, NextApiRequest } from 'next'

import { CREATE_SUBSCRIPTION } from '@/api/mutations'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { formData } = req.body

      const response = await fetch(process.env.API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN!}`,
        },
        body: JSON.stringify({
          query: CREATE_SUBSCRIPTION,
          variables: formData,
        }),
      })

      const data = await response.json()

      const isError = data.errors?.length > 0

      if (!data || isError) {
        return res.status(400).json({ message: 'Bad request' })
      }

      return res.status(201).json({
        message: 'Subscription created successfully',
        payload: { ...data },
      })
    } catch (error: any) {
      throw new Error(error)
    }
  } else {
    res.status(404).json({ message: 'Method not allowed' })
  }
}
