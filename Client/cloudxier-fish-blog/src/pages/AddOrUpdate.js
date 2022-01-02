import React from "react"
import { Button } from 'antd'
import { Routes, Route, Link } from "react-router-dom";

const AddOrUpdate = () => {
    return (
        <div>
            <h2>
                Add Page
            </h2>
            <Button type="primary">
                <Link to={"/"}>
                    Go Back to Home
                </Link>
            </Button>
        </div>
    )
}

export default AddOrUpdate