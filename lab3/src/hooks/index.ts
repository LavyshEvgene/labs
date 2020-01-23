import { useState, useEffect } from "react";

export const useImage = (src) => {
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImage(img);
    }, [src]);

    return image;
}