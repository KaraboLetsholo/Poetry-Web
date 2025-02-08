import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFC0CB', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/books.jpg')}
          style={{
            height: 1500,
            width: 1400,
        }}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">Explore More Poetry from Other Users</ThemedText>
      </ThemedView>
      <ThemedText>This section includes poetries from other authors not specifically themed on love.</ThemedText>
      <Collapsible title="Genre 1">
        <ThemedText style={styles.stepContainer}>
          Coming Soon...
        </ThemedText>
      </Collapsible>
      <Collapsible title="Genre 2">
        <ThemedText style={styles.stepContainer}>
          You caught us....Coming Soon...
        </ThemedText>
      </Collapsible>
      <Collapsible title="Genre 3">
        <ThemedText style={styles.stepContainer}>
          You guessed it...Coming Soon...
        </ThemedText>
      </Collapsible>
      <Collapsible title="Genre 4">
        <ThemedText style={styles.stepContainer}>
          Yep... Coming Soon...
        </ThemedText>
      </Collapsible>
      <Collapsible title="Genre 5">
        <ThemedText style={styles.stepContainer}>
          Sorry for this again, but yeah... Coming Soon
        </ThemedText>
      </Collapsible>
      <Collapsible title="Genre 6">
        <ThemedText style={styles.stepContainer}>
          I swear this is the last time... Coming Soon...
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
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
});
