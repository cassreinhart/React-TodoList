import React, {useState, useEffect} from 'react'
import axios from 'axios';

const CoffeeBar = () => {
  const [coffee, setCoffee] = useState(null);

  useEffect(function fetchCoffeeWhenMounted() {
    async function fetchCoffee(){
      const requestCoffee = await axios.get("https://coffee.alexflipnote.dev/random");
      setCoffee(requestCoffee.data)
      console.log(coffee)
    }
    fetchCoffee();
  }, [])
  
  return (
    <div>
        <img 
          src={"https://coffee.alexflipnote.dev/random"}
          style={{width: '700px'}}
          alt='coffee'
        />
        {/* {below is how I would actually make the request if the url didn't make the request for me} */}
        {/* <img 
          src={coffee}
          style={{width: '700px'}}
          alt='coffee'
        /> */}
    </div>
  )
}

export default CoffeeBar