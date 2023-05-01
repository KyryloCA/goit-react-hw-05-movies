import React from 'react'
import { Container, PhotoPlaceholderw92,DescriptionContainer } from './MovieCard.styled'

const ActorCard = ({name,character,profile_path}) => {
    // console.log(name,'===>',profile_path)
  return (
    <Container>
        {profile_path?<img src={`https://image.tmdb.org/t/p/w92/${profile_path}`} alt={name} />:<PhotoPlaceholderw92>no image</PhotoPlaceholderw92>}

<DescriptionContainer>
    <h3>{name}</h3>
    <p>Character:{character}</p>
</DescriptionContainer>
    </Container>
   
  )
}

export default ActorCard