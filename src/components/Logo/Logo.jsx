import logo from "../../img/logo.webp"
import {Box, Image} from "./LogoStyles";

 const Logo =()=>{
    return(
        <Box >
            <Image src={logo} alt="logo" />
        </Box>
    )
 };
export default Logo;