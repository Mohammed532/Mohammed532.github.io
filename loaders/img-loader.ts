export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
    const cleanSrc = src.startsWith('https://res.cloudinary.com') ? src.split('/').slice(6).join('/') : src;
    return `https://res.cloudinary.com/djkkxqyab/image/upload/${params.join(',')}/${cleanSrc}`;
}