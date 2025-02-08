import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFC0CB', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/hearts.jpg')}
          style={{
            height: 1500,
            width: 1400,
        }}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Poetry Night with KB!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Happy Valentines : Karabo </ThemedText>
        <ThemedText>
        Ah February, Coming right before March and April<br />
        Feels much like it is a great beast which does not fell<br/>
        Always having the ground shaking and the fracturing of the earth<br/>
        And from the cracks she arose<br/>
        Lady love, her body slim and beautiful adorned by her sling and bows<br/>
        Like the Cupid she is aiming her enchanting arrows to two beings with sorrow<br/>
        For their hearts beat as one, brains clustered with thoughts of each other<br/>
        But unfortunately cannot muster the courage to confess to one another<br/>

        <br/>

        Accompanying Lady love is her jubilant exuberant exciting friend<br/>
        One who loves celebrations and moments when people connect<br/>
        He wears a funny red-and-white checkered hat <br/>
        And with patches of hearts and roses on his pink and white shirt<br/>
        He loves to chit chat about love and his name is Valentine<br/>
        Unlike Lady love whose service runs indefinitely throughout the year<br/>
        His only runs once the 14th of every month. 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Situation-ships: Karabo</ThemedText>
        <ThemedText>
        My heart yearns for yours<br/>
        Our souls wish to be whole with one another<br/>
        My brain tells me that you are the right one<br/>
        But given my personality, circumstances and age<br/>
        My brains also tells me that the timing is not the right one<br/>
        I get everything at your expense and the longer this continues<br/>
        The harder the blow and the agony inflicted upon you<br/>
        But for some reason I still yet can't explain<br/>
        My brain tells me that ending things might be the worst mistake<br/>

        <br/>

        Oh, I give you my all but you act so indifferent and put me at an arms length<br/>
        I don't know what to give because I've you my heart, soul, body and strength<br/>
        But for some reason, It seems like after everything I do you're still unimpressed<br/>
        A part of me wants to end it all and start afresh<br/>
        But another tells me that I'd rather have a piece of you rather than none at all<br/>
        Such is the case in the life of a situation-ship, feels like imprisonment
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Untitled: Anonymous</ThemedText>
        <ThemedText>
          Coming Soon...
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    backgroundColor : '#FFC0CB',
    gap: 8,
    marginBottom: 8,
    borderEndEndRadius : 10,
    borderBottomStartRadius : 10,
    borderBottomLeftRadius : 10,
    borderTopRightRadius : 10,
    borderTopLeftRadius : 10,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
