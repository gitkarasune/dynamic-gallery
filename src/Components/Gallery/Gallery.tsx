const Gallery = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="expanding-gallery">
        <h2 className="">Expanding Gallery</h2>
      </div>
      <div className="container">
        <div className="gallery">
          <div className="img-box">
            <h3 className="names">Kendev</h3>
          </div>
          <div className="img-box">
            <h3 className="names">Marcdev</h3>
          </div>
          <div className="img-box">
            <h3 className="names">Kendev</h3>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {currentYear} <a href="https://karasune.vercel.app" target="_blank" rel="noopener noreferrer" className="kendev">kendev</a></p>
      </footer>
    </>
  );
};

export default Gallery;
