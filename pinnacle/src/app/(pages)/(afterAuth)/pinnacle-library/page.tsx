"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from 'react'
import styles from "./pinnacleLibrary.module.css";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { MdBook } from "react-icons/md";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.menuMain}></div>
          <div className={styles.menuItems}>
            <span>All Titles</span>
            <span>Books</span>
            <span>Comics</span>
            <span>Samples</span>
          </div>
        </div>

        <div className={styles.right}>
        </div>
      </div>


    </div>
  )
}

export default page