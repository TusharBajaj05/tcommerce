'use client'

import { ReactNode } from 'react'
import { CartProvider as UBCProvider } from 'use-shopping-cart'

export default function CartProviders({children}: {children: ReactNode}) {
  return (
    <UBCProvider
        cartMode='client-only'
        mode='payment'
        stripe= {process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl='https://tcommerce-r2b4sieml-tusharbajaj05s-projects.vercel.app/stripe/success'
        cancelUrl='https://tcommerce-r2b4sieml-tusharbajaj05s-projects.vercel.app/stripe/error'
        billingAddressCollection= {true}
        shouldPersist= {true}
        currency='CAD'
        language='en-US'
    >
        {children}
    </UBCProvider>
  )
}
