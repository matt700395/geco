import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from "react-router";

export default function CompetitionDetailArea (props) {
    const [ value, setValue ] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handelChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        console.log(value);

        props.base('galaxy').update([
            {
              "id": location.state.airtableId,
              "fields": {
                "rule": value,
              }
            }
          ], function(err, records) {
            if (err) {
              console.error('에러 : ',err);
              return;
            }
            records.forEach(function(record) {
              console.log("rule : ",record.get('rule'));
              navigate('/tournament',
              { state: {
                airtableId : record.getId(), //상세페이지로 넘어가면서 

              }})
            });
          });
    }

    const styleButton = {
      marginLeft:'42%',
      marginTop:'5vh'
    }

    return(
    <>
    <section className="shop-area pt-120 pb-90">
      <div className="container">
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '45vw' },
            'margin-left' : '8vw'
        }}
        noValidate
        autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label="대회 세부사항 작성"
              multiline
              rows={11}
              defaultValue="대회 세부사항을 작성해주세요."
              onChange={handelChange}
              value = {value}
            />
          </div>
        </Box>

        <div className="newsletter-form" style={styleButton}>
          <button onClick={handleSubmit}>
          Submit
          </button>
        </div>

       </div>
    </section>

    </>
    
    );
}

