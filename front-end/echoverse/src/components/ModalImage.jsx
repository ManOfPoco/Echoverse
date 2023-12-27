function ModalImage({ img, alt }) {
    return (
        <div className="bg-violet-300 rounded-full p-3">
            <img
                draggable="false"
                className="h-18 w-18"
                src={img}
                alt={alt}
            />
        </div>
    );
}

export default ModalImage;
