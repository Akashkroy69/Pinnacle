"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "./Book.module.css";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
// import React from 'react'

const page = () => {
    const { bookid } = useParams();
    const router = useRouter();
    const book = {
        id: bookid,
        image: "https://picsum.photos/600/400",
        title: "Atomic Habits",
        author: "James Clear",
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>",
        price: "$29.99",
        amazonLink: "https://www.amazon.com/dp/B09XYZ1234", // Example link
    };

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src={book.image}
                        alt={book.title}
                        className={styles.bookImage}
                    />
                </div>
                <div className={styles.details}>
                    <h1 className={styles.bookTitle}>{book.title}</h1>
                    <p className={styles.bookAuthor}>by {book.author}</p>
                    <div
                        className={styles.bookDescription}
                        dangerouslySetInnerHTML={{ __html: book.description }}
                    ></div>
                    <p className={styles.bookPrice}>{book.price}</p>
                    <button className={styles.purchaseButton}
                        onClick={() => {
                            router.push(`/read/${book.id}`); // Navigate to the reading page
                        }
                        }>
                        Start Reading
                    </button>
                    {/* buy on amazon button */}
                </div>
            </div>
        </div>

    )
}

export default page