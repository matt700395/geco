import React from 'react'
import CompetitionStart from '../pages/challenge/CompetitionArea'

function ChallengeArea(props) {
  return (
	<section className="shop-area pt-120 pb-90">
        <div className="container">
            <CompetitionStart base = {props.base}/>
        </div>

      </section>
  )
}

export default ChallengeArea;