const titleNormalizer = (title) => {
    const result = title.replace("_", " ");
    return result;
}

export default titleNormalizer;