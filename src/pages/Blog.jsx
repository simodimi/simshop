import React from "react";
import "../style/blog.css";
import { writting } from "../components/writtingBlog";

const Blog = () => {
  return (
    <div className="MainBlog">
      <h4 id="MainBlogName">Blog</h4>
      <div className="BlogTitle">
        {writting.map((p) => (
          <div className="BlogSubtitle" key={p.id}>
            <p style={{ fontWeight: "bold" }}>{p.titre}</p>
            <p style={{ color: "green" }}>{p.soustitre}</p>
            <p>{p.intro}</p>
            <div className="BlogWrite">
              <div className="BlogWrite">
                <p>{p.texte1}</p>
              </div>
              <div className="BlogPhoto">
                <img src={p.image1} alt="" />
              </div>
            </div>
            <div className="BlogWrite">
              <div className="BlogWrite">
                <p>{p.texte2}</p>
              </div>
              <div className="BlogPhoto">
                <img src={p.image2} alt="" />
              </div>
            </div>
            <div className="BlogWrite">
              <div className="BlogWrite">
                <p>{p.texte3}</p>
              </div>
              <div className="BlogPhoto">
                <img src={p.image3} alt="" />
              </div>
            </div>
            <div className="BlogWrite">
              <div className="BlogWrite">
                <p>{p.texte4}</p>
              </div>
              <div className="BlogPhoto">
                <img src={p.image4} alt="" />
              </div>
            </div>
            {p.texte5 && p.image5 && (
              <div className="BlogWrite">
                <div className="BlogWrite">
                  <p>{p.texte5}</p>
                </div>
                <div className="BlogPhoto">
                  <img src={p.image5} alt="" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
