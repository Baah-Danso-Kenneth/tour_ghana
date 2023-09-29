import { NewsLettersContainer, NewsLettersElements } from "./NewsLetter.styled"

function NewsLetters(){
     return (
     <NewsLettersContainer> 
        <NewsLettersElements>
        <div className="statements">
            <h1>Join the travelling sisterhood</h1>
            <p>Be the first to know about new destinations, experiences & more.</p>
        </div>

        
        <div className="input_section">
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <input type="email" placeholder="Email Address"/>
            <button>Join now</button>
        </div>

        <div className="subtle_p_tag">
           <p>we respect your privacy. No if, ands, or about that</p>
        </div>

        </NewsLettersElements>
        </NewsLettersContainer>
     )
    }
    
export default NewsLetters
