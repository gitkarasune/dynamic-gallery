const Gallery = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <h1>Dynamic Gallery</h1>
      </div>
      <div className="container">
        <div className="gallery">
          <div className="img-box">
            <h3>Nigeria</h3>
          </div>
          <div className="img-box">
            <h3>China</h3>
          </div>
          <div className="img-box">
            <h3>India</h3>
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
