import axios from "axios";
import { useState, useEffect, useCallback } from "react";

import "./Blog.css";
function BlogList() {

    const [blogData, setBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(5);

    const scrolledData = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${index}`);
        setBlogData([...blogData, ...res.data])
        setIndex((prevIndex) => prevIndex + 5);

        setIsLoading(false);
    }, [index, isLoading]);

    useEffect(() => {
        scrolledData();
    }, [])



    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                scrolledData();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [scrolledData]);

    return (
        <div className="display-container">
            {isLoading.toString()}
            <div style={{ width: '60%' }}>
                <h2>My Blog</h2>
                <input className="filter" type="text" placeholder="Filter post"></input>
                <div >{blogData.map((k) => {
                    return <div style={{ position: 'relative' }}>
                        <div className="id-container">{k.id}</div>
                        <div className="blog-container">
                            <div ><h3>{k.title}</h3></div>
                            <div >{k.body}</div></div>
                    </div>
                })}</div>
            </div>
            {isLoading && <h1>loading...</h1>}
        </div>
    );
};
export default BlogList;









