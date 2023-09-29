import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const LandingPageContainer=styled.div`
@media ${device.xl}{
    display:grid;
    grid-template-columns:repeat(5, 1fr);
   
}
@media ${device.lg}{
    display:grid;
    height:auto;
    grid-template-columns:repeat(5,1fr);
    grid-template-rows:119px 1104px 328px auto 280px 1001px 334px auto 471px 971px 283px 523px;
}
@media ${device.md}{
    grid-template-rows:119px auto 328px auto 337px auto 334px auto 471px 971px auto 523px;
}
@media ${device.sm}{
  grid-template-rows:119px auto 700px auto 700px 750px 500px auto 971px 1971px auto auto;
}

`;


export const CheckLoader=styled.div`
  @media ${device.lg}{
    width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 

  transition: opacity 1s ease-in-out;

  /* Set the initial opacity to 0 to hide the container */
  opacity: 0;

  /* Use a keyframe animation to gradually increase opacity when the component mounts */
  animation: fadeIn 3s ease-in-out forwards;

  > img {
    width: 7%;
    object-fit: contain;
  }

  /* Apply a transition to the image properties for a smooth scaling effect */
  > img {
    width: 20%; /* Adjust the image size as desired */
    transform: translateX(-10px); /* Translate the image slightly on hover */
    transition: width 1s ease-in-out, transform 1s ease-in-out;
  }

  /* Apply hover effect to scale and translate the image on hover */
  &:hover > img {
    width: 25%; /* Adjust the image size on hover */
    transform: translateX(0); /* Reset the image translation on hover */
  }

  /* Define a keyframe animation for fading in */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  }
`;