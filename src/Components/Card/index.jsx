import React from "react";
import { Card, Info } from "../../UI";
import ImageFilter from "../../utils/ImageFilter";

export default ({ cargo }) => {
    const { type, value, from, date } = cargo;

    return (
        <Card>
            {ImageFilter(type)}
            <Info>
                <span className="type">{type}</span>
                <span>{from}</span>
                <span>{value}</span>
            </Info>
            <span>{date}</span>
        </Card>
    );
};
