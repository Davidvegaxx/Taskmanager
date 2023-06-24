import React from "react";
import Image from "../assets/bro.svg";
import '../styles/Task.css'

const Text = () => {
  return (
    <div className="d-flex" >
      <div className=" container d-flex">
        <div>
          <div className=" align-items-center mt-5">
            <h2 className>Manage your Tasks on</h2>
            <h2 className="h2">TaskDuty</h2>
          </div>
        <p className="text w-50 ps-60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          consectetur facere repellendus perspiciatis debitis ea explicabo eum
          eaque reprehenderit quisquam quibusdam quia libero sint voluptas in non
          nobis sed, error eius! Quidem placeat, aliquid repellat vero incidunt
          aut. Non, ut. 
        </p>
      <button type="button" className="btn btn-info">Go to My Task</button></div>
      <div>
        <div className="d-flex">
        <img src={Image} alt="" />
      </div>
    </div>
      
      
    </div>
    </div>
  );
};

export default Text;