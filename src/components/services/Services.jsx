import React from "react";
import ServicesItem from "./ServicesItem";
import useGetServices from "../../hooks/useGetServices";
import "./Services.css";

const Services = () => {
  const services = useGetServices();

  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">
            Serv<span>i</span>ces
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            deleniti maiores pariatur assumenda quas magni et, doloribus quod
            voluptate quasi molestiae magnam officiis dolorum, dolor provident
            atque molestias voluptatum explicabo!
          </p>
        </div>
        <div className="service-bottom">
          {services.map((service) => (
            <ServicesItem
              title={service.title}
              image={service.image}
              description={service.description}
            ></ServicesItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
