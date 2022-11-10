import { ItemContainer } from "./styles";

const ItemRepo = ({repo}) => {
    return (
        <ItemContainer>
            <h3>{repo.full_name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} >Ver repositório</a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo