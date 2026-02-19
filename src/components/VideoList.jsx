import React, { useState } from "react";
import VideoCard from "./VideoCard";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const videos = [
  {
    id: 1,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail2.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Pemasaran",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
  {
    id: 2,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail3.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Desain",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
  {
    id: 3,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail1.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Pengembangan Diri",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
  {
    id: 4,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail3.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Bisnis",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
    {
    id: 5,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail1.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Pemasaran",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
  {
    id: 6,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail2.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Desain",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
  {
    id: 7,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail1.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Pengembangan Diri",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
  {
    id: 8,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail2.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Bisnis",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
    {
    id: 9,
    title: "Big 4 Auditor Financial Analyst",
    thumbnail: "/thumbnail3.jpg",
    instructor: "Jenna Ortega",
    instructorPhoto: "/ProfilePic.png",
    role:"Senior Accountant",
    rating: 3.5,
    totalStudents: 86,
    price: "Rp 300K",
    category: "Bisnis",
    description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau"
  },
];

const VideoList = () => {
  const [activeTab, setActiveTab] = useState("Semua Kelas");

  const filteredVideos =
    activeTab === "Semua Kelas"
      ? videos
      : videos.filter((video) => video.category === activeTab);

  return (
    <div className="video-list">
      <h3>Koleksi Video Pembelajaran Unggulan</h3>
      <p className="desc">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      {/* Tabs */}
      <div className="tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={`tab-item ${activeTab === item ? "active" : ""}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Video Cards */}
      <div className="video-container">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))
        ) : (
          <p>Tidak ada video dalam kategori ini.</p>
        )}
      </div>
    </div>
  );
};

export default VideoList;
