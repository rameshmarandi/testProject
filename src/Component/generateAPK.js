import RNFetchBlob from 'react-native-fetch-blob';


export const executeShellCommands = async () => {
  try {
    // Execute the Gradle command to assemble the release APK
    const { stdout, stderr } = await RNFetchBlob.fs.executeShellCommands
    (
      'cd android && ./gradlew assembleRelease',
      [],
      // Set the working directory for the command
      RNFetchBlob.fs.dirs.DocumentDir
    );

    console.log('stdout:', stdout);
    console.error('stderr:', stderr);

    console.log('APK generated successfully');
  } catch (error) {
    console.error('Error generating APK:', error);
    throw error;
  }
};
