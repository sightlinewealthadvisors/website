import React from 'react'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Login | Sightline Wealth Advisors</title>
        <meta name="description" content="Secure login portal for Sightline Wealth Advisors clients. Access your financial planning and investment management information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Client Login | Sightline Wealth Advisors" />
        <meta property="og:description" content="Access your secure client portal at Sightline Wealth Advisors. View your financial planning and investment management information." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>index</div>
    </>
  )
}