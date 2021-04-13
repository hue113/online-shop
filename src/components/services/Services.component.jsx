import React from "react";

import { ReactComponent as FreeDelivery } from "../../assets/images/icons/free-delivery.svg";
import { ReactComponent as BestPrice } from "../../assets/images/icons/best-price.svg";
import { ReactComponent as Card } from "../../assets/images/icons/card.svg";
import ServiceCard from "./sub-components/ServiceCard.component";

const Services = () => {
  return (
    <div className="section service mt-5">
      <div className="container">
        <div className="row px-3">
          <ServiceCard
            name="Free Shipping"
            content="Variations of passages of lorem isum is available here."
          >
            <FreeDelivery />
          </ServiceCard>

          <ServiceCard
            name="Member Discount"
            content="Variations of passages of lorem isum is available here."
          >
            <BestPrice />
          </ServiceCard>

          <ServiceCard
            name="Free Returns"
            content="Variations of passages of lorem isum is available here."
          >
            <Card />
          </ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
