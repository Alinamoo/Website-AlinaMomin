import React from "react";

import {
    Box,
    Column,
    FooterLink,
    Heading,
    Container,
    Row,
    Copywrite,
} from "./FooterStyles";


const Footer = () => {
    return (
         <Box>
        {/*//     <h1 style={{ color: "green",*/}
        {/*//         textAlign: "center",*/}
        {/*//         marginTop: "-50px"}}>*/}
        {/*//         GeeksforGeeks: A Computer Science Portal for Geeks*/}
        {/*//     </h1>*/}
            <Container>
                <Row>
                    <Column>
                        {/*<Heading>About Us</Heading>*/}
                        <FooterLink href="#">LinkedIn</FooterLink>
                        {/*<FooterLink href="#">Vision</FooterLink>*/}
                        {/*<FooterLink href="#">Testimonials</FooterLink>*/}
                    </Column>
                    <Column>
                        {/*<Heading>Services</Heading>*/}
                        <FooterLink href="#">Medium</FooterLink>
                        {/*<FooterLink href="#">Internships</FooterLink>*/}
                        {/*<FooterLink href="#">Coding</FooterLink>*/}
                        {/*<FooterLink href="#">Teaching</FooterLink>*/}
                    </Column>
                    <Column>
                        {/*<Heading>Contact Us</Heading>*/}
                        {/*<FooterLink href="#">Uttar Pradesh</FooterLink>*/}
                        {/*<FooterLink href="#">Ahemdabad</FooterLink>*/}
                        {/*<FooterLink href="#">Indore</FooterLink>*/}
                        <FooterLink href="#">Youtube</FooterLink>
                    </Column>
                    <Column>
                        {/*<Heading>Contact Us</Heading>*/}
                        {/*<FooterLink href="#">Uttar Pradesh</FooterLink>*/}
                        {/*<FooterLink href="#">Ahemdabad</FooterLink>*/}
                        {/*<FooterLink href="#">Indore</FooterLink>*/}
                        <FooterLink href="#">Github</FooterLink>
                    </Column>

                </Row>
                        <Copywrite>Copyright &copy; Alina Momin 2020</Copywrite>
            </Container>
        </Box>
    );
};
export default Footer;


// function Footer() {
//     return (
//         <div className="footer">
//             <footer class="py-5 bg-dark fixed-bottom">
//                 <div class="container">
//                     <p class="m-0 text-center text-white">
//                         Copyright &copy; Alina Momin 2020
//                     </p>
//                 </div>
//             </footer>
//         </div>
//     );
// }



// export default Footer;