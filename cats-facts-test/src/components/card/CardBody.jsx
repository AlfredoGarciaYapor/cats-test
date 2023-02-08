import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FactElement from './FactElement';

const CardBody = ({name}) => {
  const [facts, setFacts] = useState([]);
  const [factDesription, setFactDesription] = useState(null);
  const fetchFacts = () => {
    axios.get("https://catfact.ninja/fact")
    .then( response => {
      // console.log(response.data.fact);
      setFacts(prevSate => [...prevSate, response.data.fact]);
    })
  }

  useEffect(() => {
    setFacts([]);
    for(let i=0; i<10; i++){
      fetchFacts();
      // array.push(factDesription);
      // setFactDesription(null);
    }
    console.log(facts);
  }, [name])

  return (
    <div className=' w-8/12 h-fit m-0 p-0 bg-white flex flex-col rounded-md'>
      {name ? <h4 className='ml-3 mt-3 font-semibold'>Hello {name}, check this fun facts about cats.</h4> : null}
      <hr />
      <ul className='m-4'>
        { 
          facts.map((fact, key) => {
            console.log(name);
            if(name){
              return (
                <>
                  <FactElement key={key} fact={fact} />
                </>
              )
            }
          })
        }
      </ul>
    </div>
  )
}

export default CardBody