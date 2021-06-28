import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import mdPath from './docs/about.md';
import rehypeRaw from 'rehype-raw';

const About = () => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch(mdPath)
            .then((res) => res.text())
            .then((text) => {
                setMarkdown(text);
            });
    }, []);

    return (
        <div className="about">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
};

export default About;
