"use client";
import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Navbar from "@/components/Navbar";
import styles from "./Read.module.css";
import { useParams } from 'next/navigation';

const apiurl = process.env.NEXT_PUBLIC_API_URL;

interface Book {
    _id: string;
    image: string;
    title: string;
    author: string;
    pdf: string;
}

const Page = () => {
    const { bookid } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`${apiurl}/api/books/${bookid}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book data");
                }
                const data = await response.json();
                setBook(data);
                setLoading(false);
            } catch (err: any) {
                console.error(err);
                setError(err.message || "Something went wrong");
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookid]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const pdfUrl = book?.pdf ? `${apiurl}/${book.pdf}` : null;

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.viewer}>
                    {pdfUrl ? (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                            <Viewer
                                fileUrl={pdfUrl}
                                plugins={[defaultLayoutPluginInstance]}
                                theme="dark"
                            />
                        </Worker>
                    ) : (
                        <p>PDF not available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
