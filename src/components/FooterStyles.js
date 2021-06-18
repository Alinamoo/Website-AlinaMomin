import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  bottom: 0;
  display: flex-end;
  width: 100%;
  margin-bottom: -200px; //find best alignment for footer
   
  @media (max-width: 10px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex-end;
    flex-direction: column;
    text-align: auto;
    justify-content: top;
    max-width: 1000px;
    max-height: 1000px;
    margin-top: -50px;
    margin-left: auto;
    margin-right: auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  text-align: center;
  margin: auto;
 
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 100px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: grey;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 12px;
  color: #fff;
  display: flex-start;
  justify-content: top;
  margin-bottom: 4px;
  font-weight: bold;
`;


export const Copywrite = styled.p`
font-size: 12px;
  color: #fff;
  display: flex-start;
  justify-content: top;
  margin-bottom: 4px;
  font-weight: bold;
  text-align: center;
`;

