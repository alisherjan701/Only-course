"use client"

import { useTranslation } from '@/i18next/client'
import { translation } from '@/i18next/server'
import { useParams } from 'next/navigation'
import React from 'react'

 function HomePage() {
    const {lng} = useParams()
    const {t} = useTranslation(lng as string)

  return (
    <div className='mt-24 font-spaceGrotesk-mono font-medium'>
        {t("home")}
    </div>
  )
}

export default HomePage


{/*ssr server side rendering  */}