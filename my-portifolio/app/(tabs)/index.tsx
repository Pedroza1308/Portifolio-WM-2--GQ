import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#020617' }}
      headerImage={
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/perfil.jpeg')}
            style={styles.profileImage}
            contentFit="cover"
            transition={1000}
          />
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.greeting}>Olá, eu sou Pedro!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.introContainer}>
        <ThemedText type="subtitle" style={styles.roleText}>
          Ciência da Computação | UNICAP
        </ThemedText>
        
        <View style={styles.phraseContainer}>
          <View style={styles.verticalBar} />
          <ThemedText style={styles.phrase}>
            "Ser ou não ser? Eis a questão"
          </ThemedText>
        </View>

        <View style={styles.separator} />

        <ThemedText style={styles.description}>
          Uma curiosidade sobre mim é que ja fui estudante do conservatório Pernambucano de música e toquei bastante em igrejas.
          Sou entusiasta da matemática, gosto de resolver desafios de raciocínio lógico, e da área de ciência de dados.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  
  profileImage: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: Colors.dark.tint,
    position: 'absolute',
    bottom: 35,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  greeting: {
    color: Colors.dark.text,
  },
  introContainer: {
    gap: 16,
    marginBottom: 8,
  },
  roleText: {
    color: Colors.dark.tint,
    fontWeight: '600',
  },
  phraseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
  },
  verticalBar: {
    width: 4,
    height: '100%',
    backgroundColor: Colors.dark.tint,
    borderRadius: 2,
  },
  phrase: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#94a3b8',
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 10,
  },
  description: {
    lineHeight: 24,
  }
});