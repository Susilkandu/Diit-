function SocialIcons() {
    return (
        <div className="social-icons">
            <a className="nav-link social-icons-one"  data-aos="fade-right" data-aos-duration="200">
                <small className="my-fb">Facebook</small>
                <i className="bi bi-facebook px-1 " style={{background: '#3d5af8'}}></i>
            </a>
            <a className="nav-link social-icons-two " href="https://youtube.com/@technohridesh?si=3t6P4GKHPOZWAWH9"
                data-aos="fade-right" data-aos-duration="400">
                <small className="my-yt">Youtube</small>
                <i className="bi bi-youtube px-1 " style={{background: 'red'}}></i>
            </a>
            <a className="nav-link social-icons-three" href="https://wa.me/+919918151032" data-aos="fade-right"
                data-aos-duration="600">
                <small className="my-wp">Whatsapp</small>
                <i className="bi bi-whatsapp px-1 " style={{background: 'green'}}></i>
            </a>
        </div>
    );
}
export default SocialIcons