import React from 'react';
import ServiceItem from "../ServiceItem/ServiceItem.jsx";
import styles from "./ServicesList.module.css";
import {discount} from "../../utils/discount.js";

const ServicesList = ({services}) => {
    return (
        <div className={styles.list}>
            {services &&
                services.map((service) => (
                    <ServiceItem
                        key={service.id}
                        name={service.name}
                        price={discount(
                            service.price,
                            service.discount
                        )}
                        img={service.image_url}
                        short_text={service.short_text}
                    />
                ))}
        </div>
    );
};

export default ServicesList;
