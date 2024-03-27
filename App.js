import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { executeShellCommands } from './src/Component/generateAPK';
// import RNFetchBlob from 'react-native-fetch-blob';


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handleGenerateAPK = async () => {
    try {
      const apkPath = await executeShellCommands();
      Alert.alert('APK generated successfully');
      // Alert.alert('APK generated successfully', `APK saved at: ${apkPath}`);
    } catch (error) {
      console.error('Error generating APK:', error);
      Alert.alert('Error', 'Failed to generate APK');
    }
  };


  const addComponent = () => {
    switch (selectedComponent) {
      case 'Header':
        setSelectedComponents([...selectedComponents, <Header key={selectedComponents.length} />]);
        break;
      case 'Carousel':
        setSelectedComponents([...selectedComponents, <Carousel key={selectedComponents.length} />]);
        break;
      case 'Footer':
        setSelectedComponents([...selectedComponents, <Footer key={selectedComponents.length} />]);
        break;
      default:
        // Handle unsupported component
    }
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Your App Name</Text>
      </View>
    );
  };

  const Carousel = () => {
    // Code for generating Carousel component
    return (
      <View style={styles.carousel}>
        <Text>Carousel Component</Text>
      </View>
    );
  };
  
 

  const Footer = () => {
    // Code for generating Footer component
    return (
      <View style={styles.footer}>
        <Text>Footer Component</Text>
      </View>
    );
  };

  const renderNextComponent = () => {
    setCurrentComponentIndex(currentComponentIndex + 1);
  };
  // const generateAPK = () => {
  //   const child = spawn('node', ['generateAPK.js']);
  //   child.stdout.on('data', (data) => {
  //     console.log(`stdout: ${data}`);
  //   });
  //   child.stderr.on('data', (data) => {
  //     console.error(`stderr: ${data}`);
  //   });
  //   child.on('error', (error) => {
  //     console.error(`error: ${error.message}`);
  //   });
  //   child.on('close', (code) => {
  //     console.log(`child process exited with code ${code}`);
  //   });
  // };



  return (
    <View style={styles.container}>
      <Text>Select a component:</Text>
      <TextInput
        style={styles.input}
        placeholder="Select Component"
        onChangeText={setSelectedComponent}
        value={selectedComponent}
      />
      <Button title="Add Component" onPress={addComponent} />
      {selectedComponents.map((component, index) => {
        if (index <= currentComponentIndex) {
          return component;
        }
        return null;
      })}
      <Button title="Next Component" onPress={renderNextComponent} disabled={currentComponentIndex >= selectedComponents.length - 1} />

      <Button title="Generate APK" onPress={handleGenerateAPK} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  carousel: {
    // Style for Carousel component
  },
  footer: {
    // Style for Footer component
  },
});

export default App;
