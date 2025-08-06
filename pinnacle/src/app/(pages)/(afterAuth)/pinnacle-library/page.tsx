"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import styles from "./pinnacleLibrary.module.css";

import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { MdBook } from "react-icons/md";

const apiurl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Book {
  _id: string;
  image: string;
  title: string;
  author: string;
}

const Page = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch(`${apiurl}/api/books/all`);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data: Book[] = await response.json();
        setAllBooks(data);
      } catch (err: any) {
        setError(err.message || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
        {/* Sidebar */}
        <div className={styles.left}>
          <div className={styles.menuMain}>
            <FaBookOpen className={styles.bookicon} />
            <p>Library</p>
            {show ? (
              <FaChevronDown
                onClick={() => setShow(!show)}
                className={styles.toRight}
              />
            ) : (
              <FaChevronRight
                onClick={() => setShow(!show)}
                className={styles.toRight}
              />
            )}
          </div>

          {show && (
            <div className={styles.menuItems}>
              <span>All Titles</span>
              <span>Books</span>
              <span>Comics</span>
              <span>Samples</span>
            </div>
          )}

          <div className={styles.menuMain}>
            <MdBook className={styles.bookicon2} />
            <p>Notes & Highlights</p>
          </div>
        </div>

        {/* Book Grid */}
        <div className={styles.right}>
          <h1>Trending</h1>
          <div className={styles.books}>
            {allBooks.map((book) => (
              <div
                key={book._id}
                className={styles.bookItem}
                onClick={() => router.push(`/book/${book._id}`)}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className={styles.bookImage}
                />
                <div className={styles.bookDetails}>
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.bookAuthor}>{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
