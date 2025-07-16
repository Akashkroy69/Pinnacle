"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  return (
    <div className={styles.c1}>
      <div className={styles.c11}>
        <Image
          src="/pinnacle-logoo.png"
          alt="Pinnacle Logo"
          className={styles.logo}
          width={500}
          height={500}
        />
        <p className={styles.t1}>Take your stories wherever you go</p>
        <div className={styles.btnRow}>
          <button className={styles.btn1}
            onClick={() => router.push('/signup')}
          >Create an Pinnacle account</button>
          <button className={styles.btn2}
            onClick={() => router.push('/login')}
          >
            {/* <Image src=""
              alt="Pinnacle Logo"
              className={styles.btnicon}
              width={20}
              height={20}
            /> */}
            <span>Sign in with your account</span>
          </button>
        </div>
      </div>
      <Image
        src="/pinnacle_dash.png"
        alt="Pinnacle Dash"
        className={styles.bottomimg}
        width={1000}
        height={500}
      />
    </div>
  )
}

export default Page
