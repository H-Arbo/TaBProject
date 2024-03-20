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
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </>
  );
};

export default Animations;
