'use client'

import React, { useEffect } from 'react'

type AdBannerTypes = {
  pubId: string
  dataAdSlot: string
  dataAdFormat: string
  dataFullWidthResponsive: boolean
  className?: string
}

const AdBanner = ({
  pubId,
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  className,
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (error: any) {
      console.error(error.message)
    }
  }, [])

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client={`ca-pub-${pubId}`}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  )
}

export default AdBanner
