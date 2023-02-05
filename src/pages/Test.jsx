import axios from 'axios';
import React from 'react';

function Test(props) {




    const handleClick = () => {
      console.log('state :', props.state)
      console.log('id :', props.state.airtableId)

      axios
      .get(
        `https://api.airtable.com/v0/app0QOzYj61gyWZnu/galaxy?filterByFormula=({id} = ${props.state.airtableId})`,
        { headers: { Authorization: "Bearer " + "keyouedxPNGaCEXQw" } },
      )
      .then(resp => {
        console.log('resp : ',resp)
      
      })
      .catch(error => console.log(error))


    }

  return (
    <>


    
    <button
      onClick={handleClick}
    >
      버튼
    </button>

    
    </>
  )
}

export default Test