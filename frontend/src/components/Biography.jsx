import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            MediBridge NG is a digital health solution designed to transform
            public hospital management in Nigeria. Built as a full-stack web
            application, our system streamlines patient registration,
            appointment scheduling, medical record-keeping, and administrative
            workflows, bridging the gap between healthcare professionals and the
            communities they serve.
          </p>
          <p>
            Our goal is to make healthcare more efficient, transparent, and
            accessible through technology. By focusing on user-friendly design
            and scalable architecture, MediBridge NG empowers hospitals to
            deliver better patient care while improving operational efficiency.
            We are committed to supporting the digital transformation of
            Africa's healthcare systems, one hospital at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
