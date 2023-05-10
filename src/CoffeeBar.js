import React, {useState, useEffect} from 'react'

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
          src={coffee}
          style={{width: '700px'}}
        />
    </div>
  )
}

export default CoffeeBar