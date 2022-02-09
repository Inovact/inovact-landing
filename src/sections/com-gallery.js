import SectionHeader from "components/section-header";
import React from "react";
import G1 from "../assets/Inovact_events/g1.JPG";
import G2 from "../assets/Inovact_events/g2.jpg";
import G3 from "../assets/Inovact_events/g3.jpg";
import G4 from "../assets/Inovact_events/g4.jpg";
import G5 from "../assets/Inovact_events/g5.jpg";
import G6 from "../assets/Inovact_events/g6.jpg";
import G7 from "../assets/Inovact_events/g7.jpg";
import G8 from "../assets/Inovact_events/g8.jpg";
import G9 from "../assets/Inovact_events/g9.jpg";
import G10 from "../assets/Inovact_events/g10.png";
import G11 from "../assets/Inovact_events/g11.JPG";

const ComGallery = () => {
  return (
    <div className="gallery">
      <SectionHeader title="Gallery" />
      <main className="gallery_container">
        <div className="gallery_container__flex-flow">
          <div className="gallery_card">
            <img src={G1} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G2} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G3} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G4} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G5} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G6} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G7} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G8} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G9} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G10} alt="" />
          </div>
          <div className="gallery_card">
            <img src={G11} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComGallery;
