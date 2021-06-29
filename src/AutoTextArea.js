const AutoTextArea = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
    // In case you have a limitation
    e.target.style.height = `${Math.min(e.target.scrollHeight, 500)}px`;
};

export default AutoTextArea;
