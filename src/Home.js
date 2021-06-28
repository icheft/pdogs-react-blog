import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Posts'} />}
            {/* <button onClick={() => setName('luigi')}>Change name</button> */}
            {/* reusable component */}
            {/* <BlogList
                blogs={blogs.filter((b) => b.author === 'Brian')}
                title={"Brian's Posts"}
            /> */}
        </div>
    );
};

export default Home;
