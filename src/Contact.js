function Iframe() {
    return (
        <div className="item item-double">
            <h1 id="contact">CONTACT</h1>
            <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQBpAG2ahYAR_6128GcTUEo&key=AIzaSyD2MdXUstEENUYmzSwMo3LBGpq1GYIEsXE" id="iframe"> </iframe>
            <ol>
                <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                    LinkedIn</a></li>
                <li><a href="https://github.com/ensardedeoglu">GitHub</a></li>
                <li><a href="ensardedeoglu@gmail.com"> ensardedeoglu@gmail.com </a></li>
            </ol>
            <footer>
                <p>© Ensar Dedeoglu</p>
            </footer>
        </div>
    )
}

export default Iframe;