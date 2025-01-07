import React from "react";
import Header from "../Components/Header";
import WeddingPicture from "../images/Wedding-app.png";
import WeddingPicture1 from "../images/wedding-app-1.png";
import WeddingPicture2 from "../images/wedding-app-2.png";
import WeddingPicture3 from "../images/wedding-app-3.png";

export default function WeddingWebsite() {
  return (
    <div>
      <Header />
      <div className="bg-[#11235A] md:px-24 px-6 py-6">
        <div className="flex justify-center content-center text-white py-12 text-2xl">
          Perfect Wedding Website
        </div>
        <img src={WeddingPicture} alt="image of perfect wedding website" />
        <p className="pt-6 pb-12 px-12 text-center text-white">
          This is one of my first projects I did so I could practice my
          front-end skills. I initially did a simple HTML and CSS for this
          project but as I was learning React I decided to update some of the
          code. Some blocks of code I made into components to keep the code more
          clean and simple to read and I learned I could save time by reusing
          components.
        </p>
        <img src={WeddingPicture1} alt="" />
        <p className="pt-6 pb-12 px-12 text-center text-white">
          The website includes a gallery to shocase previous wedding images to
          future customers.
        </p>

        <img src={WeddingPicture2} alt="" />
        <p className="pt-6 pb-12 px-12 text-center text-white">
          A testimonials page is included to reasure future potential customers
          that they will recieve top notch cutomer service.
        </p>
        <div>
          <p className="text-lg text-white">Visit website:</p>
          <a
            className="text-cyan-500 pl-3"
            href="https://lulamacele.github.io/perfect-weddings/#/"
          >
            Perfect Wedding
          </a>
        </div>
      </div>
    </div>
  );
}
