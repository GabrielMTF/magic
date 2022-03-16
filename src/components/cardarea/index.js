import React, { useState } from 'react';
import { DivLegal, ContainerCards } from './styles';

const CardArea = (props) => {

    const { resultado } = props

    const [color, setColor] = useState('green')

    return (
        <div>
            {resultado.map((cards) =>
                <ContainerCards>
                    <img src={cards.image_uris.normal} />
                    <div style={{ marginLeft: '20px' }}>
                        <h1>{cards.name}{ }</h1>
                        <p>{cards.type_line}</p>
                        <p>{cards.oracle_text}</p>
                        <p>{cards.loyalty != 0 ? 'Loyalty: ' + cards.loyalty : ''}</p>
                        <p>{'Illustrated by ' + cards.artist}</p>
                        <DivLegal >
                            <div style={{ display: 'block', flexDirection: 'column', paddingRight: '100px' }}>
                                <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.alchemy === 'not_legal' ? 'Alchemy: NOT LEGAL' : cards.legalities.alchemy === 'banned' ? 'Alchemy: BANNED' : cards.legalities.Alchemy === 'restricted' ? 'Alchemy: RESTRICTED' : 'Alchemy: LEGAL'}</p>
                                <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.brawl === 'not_legal' ? 'Brawl: NOT LEGAL' : cards.legalities.brawl === 'banned' ? 'Brawl: BANNED' : cards.legalities.brawl === 'restricted' ? 'Brawl: RESTRICTED' : 'Brawl: LEGAL'}</p>
                                <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.commander === 'not_legal' ? 'Commander: NOT LEGAL' : cards.legalities.commander === 'banned' ? 'Commander: BANNED' : cards.legalities.commander === 'restricted' ? 'Commander: RESTRICTED' : 'Commander: LEGAL'}</p>
                                <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.historic === 'not_legal' ? 'Historic: NOT LEGAL' : cards.legalities.historic === 'banned' ? 'Historic: BANNED' : cards.legalities.historic === 'restricted' ? 'Historic: RESTRICTED' : 'Historic: LEGAL'}</p>
                                <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.legacy === 'not_legal' ? 'Legacy: NOT LEGAL' : cards.legalities.legacy === 'banned' ? 'Legacy: BANNED' : cards.legalities.legacy === 'restricted' ? 'Legacy: RESTRICTED' : 'Legacy: LEGAL'}</p>
                                <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.modern === 'not_legal' ? 'Modern: NOT LEGAL' : cards.legalities.modern === 'banned' ? 'Modern: BANNED' : cards.legalities.modern === 'restricted' ? 'Modern: RESTRICTED' : 'Modern: LEGAL'}</p>
                            </div>
                            <div style={{ display: 'block', flexDirection: 'column' }}>
                            <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.pauper === 'not_legal' ? 'Pauper: NOT LEGAL' : cards.legalities.pauper === 'banned' ? 'Pauper: BANNED' : cards.legalities.pauper === 'restricted' ? 'Pauper: RESTRICTED' : 'Pauper: LEGAL'}</p>
                            <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.penny === 'not_legal' ? 'Penny: NOT LEGAL' : cards.legalities.penny === 'banned' ? 'Penny: BANNED' : cards.legalities.penny === 'restricted' ? 'Penny: RESTRICTED' : 'Penny: LEGAL'}</p>
                            <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.pioneer === 'not_legal' ? 'Pioneer: NOT LEGAL' : cards.legalities.pioneer === 'banned' ? 'Pioneer: BANNED' : cards.legalities.pioneer === 'restricted' ? 'Pioneer: RESTRICTED' : 'Pioneer: LEGAL'}</p>
                            <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.standard === 'not_legal' ? 'Standard: NOT LEGAL' : cards.legalities.standard === 'banned' ? 'Standard: BANNED' : cards.legalities.standard === 'restricted' ? 'Standard: RESTRICTED' : 'Standard: LEGAL'}</p>
                            <p style={{ border: `2px solid ${color}`, borderRadius: '5px' }}>{cards.legalities.vintage === 'not_legal' ? 'Vintage: NOT LEGAL' : cards.legalities.vintage === 'banned' ? 'Vintage: BANNED' : cards.legalities.vintage === 'restricted' ? 'Vintage: RESTRICTED' : 'Vintage: LEGAL'}</p>
                            </div>
                        </DivLegal>


                    </div>

                </ContainerCards>
            )
            }
        </div >
    )
}

export default CardArea;