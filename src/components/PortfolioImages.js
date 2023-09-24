import React from "react"
import { Col } from "react-bootstrap"
export const PortfolioImages = ({ title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="portf-imgbx">
                <img src={imgUrl} alt="Portfolio"/>
                <div className="portf-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}