import styled from "styled-components";

export const LogInPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 30vh;
width: 30vw;
background: #1A2B44;
box-shadow: 0 8px 32px 0 rgba(102, 175, 164, 0.91);
border-radius: 10px;
color: white;
text-transform: uppercase;
letter-spacing: 0.4rem;
@media only screen and (max-width: 250px) {
  width: 80vw;
  height: 10vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h1 {
    font-size: small;

  }
}
@media only screen and (min-width: 300px) {
  width: 60vw;
  height: 50vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 60vw;
  height: 80vh;
}

 @media only screen and (min-width: 860px) {
  width: 80vw;
   height: 70vh;
 }
  @media only screen and (min-width: 1024px) {
     width: 40vw;
      height: 90vh;
}
@media only screen and (min-width: 1200px) {
  width: 40vw;
   height: 90vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 55vh;
}

`;

export const WelcomeText = styled.h1`
margin: 6rem 0rem 0;
font-family: 'Inconsolata', monospace;`;

