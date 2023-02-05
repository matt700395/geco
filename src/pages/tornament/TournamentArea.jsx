import React from "react";
import TeamBoxGroup1 from "../../components/tornament/TeamBoxGroup1";
import TeamBoxGroup2 from "../../components/tornament/TeamBoxGroup2";
import TeamBoxGroup4 from "../../components/tornament/TeamBoxGroup4";
import TeamBoxGroup5 from "../../components/tornament/TeamBoxGroup5";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ContextApi } from "../../components/contextapi/ContextApi";
import TeamBoxGroup from "../../components/tornament/TeamBoxGroup";
import TeamBoxHorizontal from "../../components/tornament/TeamBoxHorizontal";

export default function TournamentArea (props) {
    const [ isTBGJson, setTBGJson ] = useState(
            [[[],[],[],[],[],[],[],[]],[[],[],[],[]],[[],[]],[[]]]
    );

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useEffect 실행');
        console.log('air id :', location.state.airtableId);
        
    },[])

    const dateSave = () => {

        props.base('galaxy').update([
            {
              "id": location.state.airtableId,
              "fields": {
                'group0' : isTBGJson[0].toString(),
                'group1' : isTBGJson[1].toString(),
                'group2' : isTBGJson[2].toString(),
                'group3' : isTBGJson[3].toString(),
              }
            }
          ], function(err, records) {
            if (err) {
              console.error('에러 : ',err);
              return;
            }
            records.forEach(function(record) {
              console.log("group0 : ",record.get('group0'));
              
              navigate('/dash',
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
      <section className="shop-area pt-120 pb-90">
      <div className="container">
                <div style={{width:'100%', height:'auto', justifyContent:'center', alignItems:'center'}}>
                {/* <div style={{width:'100%', height:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}> */}
                    {/* <div style={{display : 'flex'}}> */}
                        < ContextApi.Provider value = {{isTBGJson, setTBGJson}} >
                            <TeamBoxGroup groupNum = {0} />
                            {/* <TeamBoxGroup1 groupNum = {0} />
                            <TeamBoxGroup2 groupNum = {1} />
                            <TeamBoxGroup4 groupNum = {2} />
                            <TeamBoxGroup5 groupNum = {3} /> */}
                        </ContextApi.Provider>
                    {/* </div> */}
                </div>

                <div className="newsletter-form" style={styleButton}>
                  <button onClick={dateSave}>
                  Submit
                  </button>
                </div>
            </div>
            </section>
    );
}
