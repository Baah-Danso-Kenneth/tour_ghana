import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const RecommedationContainer =styled.div`
@media ${device.xl}{

}
@media ${device.lg}{
    background-color:#fff;
    grid-area:5/1/span 1/ -1;
}

@media ${device.md}{
}
@media ${device.sm}{

}
`;

export const RecommedElements =styled.div`
@media ${device.xl}{

}
@media ${device.lg}{
    background-color:#fff;
    grid-area:5/1/span 1/ -1;
    max-width:80%;
    margin: 0 auto;
    align-items:center;
    display:flex;
    gap:2rem;
    justify-content:center;
    
}

@media ${device.md}{
  max-width:90%;
  margin:0 auto;
}
@media ${device.sm}{
flex-flow:column;
gap:5rem;
}
`;

export const KindWordsContainer =styled.div`
@media ${device.xl}{

}
@media ${device.lg}{
    background-color:${({theme})=>theme.colors.baseColor};
    grid-area:10/1/span 1/ -1;

    .btn-more{
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .btn-more button{
        color:#fff;
        font-weight:200;
        background-color:${({theme})=>theme.colors.primaryColor};
        font-family:${({theme})=>theme.fonts.PoppinsFont};
        border:none;
        outline:none;
        font-size:15px;
        text-transform:uppercase;
        border-radius:5px;
        padding:15px 50px 15px;
        font-size:15px;  
    }

}
@media ${device.md}{

}
@media ${device.sm}{

}
`;

export const KindWordsElement=styled.div`
@media ${device.xl}{}


@media ${device.lg}{
  max-width:80%;
  margin:0 auto;

  .control_elements{
    display:flex;
    flex-flow:wrap;
    justify-content:space-between;
  }

  .kind-word-title{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .kind-word-title h1{
    color:${({theme})=>theme.colors.primaryColor};
    font-size:45px;
    text-transform:uppercase;
    font-weight:200;
  }
  
  
}

@media ${device.md}{

}
@media ${device.sm}{
  max-width:90%;
  margin:0 auto;
.control_elements{
  flex-flow:column;
}
}
`;

