import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header.jsx";
import styles from "./HomePage.module.css";
import ServicesList from "../../components/ServicesList/ServicesList.jsx";
import axios from "axios";
import {Button, Input} from "antd";
import {discount} from "../../utils/discount.js";

const HomePage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices();
    }, [])

    const getServices = async () => {
        const response = await axios.get("https://api.avavion.ru/api/products");
        setServices(response.data.data);
    }

    const handleSearch = (event) => {
        const filterServices = [...services].filter((item) => {
            return item.name.toLowerCase().includes(event.target.value.toLowerCase());
        });

        setServices(filterServices);
    }

    const sortFromLowerToUpper = () => {
        const sortedServices = [...services].sort((a, b) => {
            return discount(a.price, a.discount) - discount(b.price, b.discount);
        });

        setServices(sortedServices);
    }

    const sortFromUpperToLower = () => {
        const sortedServices = [...services].sort((a, b) => {
            return discount(b.price, b.discount) - discount(a.price, a.discount);
        })

        setServices(sortedServices);
    }


    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.filters}>
                <Input
                    className={styles.input_style}
                    onChange={handleSearch}
                    placeholder={"Введите название"}
                />
                <div className={styles.btns}>
                    <Button onClick={sortFromLowerToUpper} type="primary" ghost>Меньше / Больше</Button>
                    <Button onClick={sortFromUpperToLower} type="primary" ghost>Больше / Меньше</Button>
                </div>
            </div>
            <ServicesList services={services} />
        </div>
    );
};

export default HomePage;
