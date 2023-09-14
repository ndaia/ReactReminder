import { Container } from "./styles";
import heroImage from "../../assets/imagens/Hero.png";

export function Hero () {
    return (
        <Container>
            <img src={heroImage} alt="Paisagens em tons roxos" />
        </Container>
    )
}