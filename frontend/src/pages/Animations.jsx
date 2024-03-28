import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import Pat_Navbar from "../components/Pat_Navbar";

const Animations = () => {
  return (
    <>
      <Pat_Navbar />
      <div className="p-4">
        <h1 className="text-3xl my-4">Animations!</h1>
        <iframe
          src="https://www.youtube.com/embed/oHPj2jA3s8g"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="true"
          title="video"
          rel="0"
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/oHPj2jA3s8g?si=GY4y_AMq3MKYwPnD&amp;controls=1rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Animations;
