import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.XxjHjw9Je18g8UxBhVsl3gHaEK&pid=Api&P=0&w=289&h=163"
          alt=""
        />
        <p>Trending</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.l4gVkEnI-xusZcV81ymvGQHaDU&pid=Api&P=0&w=406&h=183"
          alt=""
        />
        <p>communities</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.qzdn9bm2SGbibOQcAdrGDwHaMi&pid=Api&P=0&w=300&h=300"
          alt=""
        />
        <p>Badge</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.sUPAXD58hfd2iTpzkfLQlAHaEK&pid=Api&P=0&w=270&h=152"
          alt=""
        />
        <p>Academic Notes</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science</p>
      </div>

     
      

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p>Technology</p>
      </div>

     
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;