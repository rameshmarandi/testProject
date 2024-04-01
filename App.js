import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import ButtonSection from './src/Component/ButtonSection'
import axios from 'axios'; 


const App = () => {

  // useEffect(async()=>{

  //   try {
  //     const response = await axios.get('https://github.com/rameshmarandi/testProject/blob/main/src/Component/ButtonSection.js');
  //     // return response.data;

  //     console.log("api fetching res", response)
  //   } catch (error) {
  //     console.error('Error fetching component code:', error);
  //     return null; // Handle errors gracefully (e.g., display an error message)
  //   }
  // },[])
  return (
    <View>
      <Text>App</Text>
      <ButtonSection/>
      <Text>Tested</Text>
    </View>
  )
}

export default App