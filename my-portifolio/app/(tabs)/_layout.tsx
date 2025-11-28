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
        <Image
          source={require('@/assets/images/perfil.jpeg')}
          style={styles.headerImage}
          contentFit="cover"
          transition={1000}
        />
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
            "Transformando ideias complexas em experiências digitais simples e eficientes."
          </ThemedText>
        </View>

        <View style={styles.separator} />

        <ThemedText style={styles.description}>
          Estudante do 5° período de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP). 
          Focado em desenvolvimento web e mobile.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
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
    color: '#94a3b8', // Cinza claro
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#334155', // Cor da borda sutil
    marginVertical: 10,
  },
  description: {
    lineHeight: 24,
  }
});