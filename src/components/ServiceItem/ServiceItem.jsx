import React from 'react';
import {Button, Card, Typography} from "antd";
import styles from "./ServiceItem.module.css";

const ServiceItem = ({ name, price, short_text, img }) => {
    return (
   
            <Card
                hoverable
                className={styles.card}
                cover={<img src={img} alt={name} />}
                title={<h4>{name}</h4>}
            >
                <div className={styles.wrapper}>
                    <Typography.Text className={styles.short_text}>
                        {short_text}
                    </Typography.Text>
                </div>
                <div className={styles.button_price}>
                    <Button type={"primary"}>Купить</Button>
                    <p>{price} руб.</p>
                </div>
            </Card>
    
    );
};

export default ServiceItem;
