import React, {useState} from "react"
import { Button } from 'antd'
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([])
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "center"
            }}>
            <h2>
                Welcome to the Fish Blog
            </h2>
            <Button block style={{margin:"20px", width: "50%", fontSize: "13px"}}>
                <Link to={"/add"}>Click here to add more fish!</Link>
            </Button>
            <p>
                {JSON.stringify(data)}
            </p>
        </div>
    )
}

export default Home