import styled from "styled-components";

export const LogInPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 30vh;
width: 30vw;
background: #1A2B44;
box-shadow: 0 8px 32px 0 rgba(102, 175, 164, 0.91);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: white;
text-transform: uppercase;
letter-spacing: 0.4rem;
@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h1 {
    font-size: small;

  }
}
@media only screen and (min-width: 360px) {
  width: 60vw;
  height: 50vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 50vh;
}

@media only screen and (min-width: 768px) {
  width: 50vw;
  height: 60vh;
}
  @media only screen and (min-width: 1024px) {
     width: 30vw;
     height: 90vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 55vh;
}
`;
