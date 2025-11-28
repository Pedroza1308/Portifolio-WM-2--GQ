import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/perfil.jpeg')}
          style={styles.headerImage}
          contentFit="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, eu sou Pedro Alves!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.introContainer}>
        <ThemedText type="subtitle" style={styles.roleText}>
          Desenvolvedor Full Stack
        </ThemedText>
        
        <ThemedText style={styles.phrase}>
          "Transformando ideias complexas em experiências digitais simples e eficientes."
        </ThemedText>

        <View style={styles.separator} />

        <ThemedText>
          Bem-vindo ao meu portfólio mobile desenvolvido com <ThemedText type="defaultSemiBold">React Native</ThemedText> e <ThemedText type="defaultSemiBold">Expo</ThemedText>.
          Navegue até a aba "Sobre Mim" para conhecer minha trajetória.
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
    marginTop: 10,
  },
  introContainer: {
    gap: 16,
    marginBottom: 8,
  },
  roleText: {
    color: '#0a7ea4',
  },
  phrase: {
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    opacity: 0.5,
  },
  headerImage: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});