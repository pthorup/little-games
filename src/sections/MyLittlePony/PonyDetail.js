import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PonyDataContext } from './PonyDataContextProvider'
import styled from 'styled-components'

const StyledPonyDetail = styled.div`
    display: flex;
    margin-top: 56px;
`
const Images = styled.div`
    flex: 1;
    line-height: 0;
    -webkit-column-count: 2;
    -webkit-column-gap: 8px;
    -moz-column-count: 2;
    -moz-column-gap: 8px;
    column-count: 2;
    column-gap: 8px;

    .PonyDetail-image {
        margin-top: 8px;
        width: 100%;
    }
`
const PonyInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-left: 36px;
`

const Title = styled.h2`
    color: #b30056;
    font-family: 'Encode Sans', sans-serif;
`

const SubTitle = styled.h3`
    color: #00b302;
`
const PonyInfoText = styled.p`
    font-size: 14px;
`

const Heart = styled.div`
    align-self: center;
    font-size: 100px;
    &:hover {
        transform: scale(1.1, 1.1);
    }
`

const PonyDetail = ({ favourites, onFavouriteClick }) => {
    const { ponyData, loading, error } = useContext(PonyDataContext)

    const { ponyId } = useParams()
    const ponyIdInt = parseInt(ponyId)

    const { id, image, name, residence, occupation, kind, url } = ponyData.find(
        (item) => item.id === ponyIdInt,
    )
    const [favourited, setFavourited] = useState([])

    useEffect(() => {
        const found = favourites.includes(id)
        found ? setFavourited(true) : setFavourited(false)
    }, [id, favourites])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {ponyData && (
                <StyledPonyDetail>
                    <Images>
                        {image.map((image, index) => (
                            <img
                                src={image}
                                key={index}
                                alt={name}
                                width="100"
                                className="PonyDetail-image"
                            />
                        ))}
                    </Images>
                    <PonyInfo>
                        <Title>{name ? name : 'Unknown'} </Title>

                        <SubTitle>Residence</SubTitle>
                        <PonyInfoText>
                            {residence ? residence : 'Unknown'}
                        </PonyInfoText>

                        <SubTitle>Occupation</SubTitle>
                        <PonyInfoText>
                            {occupation ? occupation : 'Unknown'}
                        </PonyInfoText>

                        <SubTitle>Kind</SubTitle>
                        <PonyInfoText>{kind.join(', ')}</PonyInfoText>

                        <PonyInfoText>
                            <a href={url} target="_blank" rel="noreferrer">
                                Read more (external link)
                            </a>
                        </PonyInfoText>

                        <Heart onClick={() => onFavouriteClick(id)}>
                            {favourited ? '💜' : '🤍'}
                        </Heart>
                    </PonyInfo>
                </StyledPonyDetail>
            )}

            {error ? error : null}
        </div>
    )
}

export default PonyDetail
