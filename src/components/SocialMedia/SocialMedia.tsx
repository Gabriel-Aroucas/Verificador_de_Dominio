import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const StyedSocialMedia = styled.div`
margin-top:20px;
text-align:center;
font-size:9px;
text-transform: uppercase;
color:#fff;
.icon{
    font-size: 2rem;
    a{
        margin: 0 3px;
        color:#fff;
    }
}

@media only screen and (min-width: 550px){
    font-size: 6px;
    .icon{
        font-size: 1rem;
    }
}
`
const SocialMedia = ()=>{
    return(
        <StyedSocialMedia>
            <h1>Visite nossas redes sociais</h1>
            <div className="icon">
                <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div>
        </StyedSocialMedia>
    )

}

export default SocialMedia