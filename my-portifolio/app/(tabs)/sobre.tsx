import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function SobreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#1e293b' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#334155"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre Mim</ThemedText>
      </ThemedView>
      
      <ThemedText style={styles.bioText}>
        Estudante do 5° período de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP). 
        Experiência em Lógica de Programação, Estrutura de Dados, além de possuir o nível de proficiência “VANTAGE” em inglês do Common European Framework.
      </ThemedText>

      <View style={styles.sectionHeader}>
        <IconSymbol name="paperplane.fill" size={20} color={Colors.dark.tint} />
        <ThemedText type="subtitle">Experiência</ThemedText>
      </View>

      <View style={styles.card}>
        <ThemedText type="defaultSemiBold" style={styles.cardTitle}>Auxiliar de Preparação</ThemedText>
        <ThemedText style={styles.companyName}>Igeduc</ThemedText>
        <ThemedText style={styles.dateText}>2024</ThemedText>
        <ThemedText style={styles.cardBody}>
          Auxiliar pela “Igeduc” na preparação e confecção de provas destinadas ao concurso público para Guarda Municipal da prefeitura de Camaragibe.
        </ThemedText>
      </View>

      <View style={styles.sectionHeader}>
        <IconSymbol name="house.fill" size={20} color={Colors.dark.tint} />
        <ThemedText type="subtitle">Formação</ThemedText>
      </View>

      <View style={styles.card}>
        <ThemedText type="defaultSemiBold" style={styles.cardTitle}>Ciência da Computação</ThemedText>
        <ThemedText style={styles.companyName}>UNICAP</ThemedText>
        <ThemedText style={styles.dateText}>2023 - Atual</ThemedText>
      </View>

      <View style={styles.sectionHeader}>
        <IconSymbol name="chevron.left.forwardslash.chevron.right" size={20} color={Colors.dark.tint} />
        <ThemedText type="subtitle">Competências</ThemedText>
      </View>

      <ThemedView style={styles.skillsContainer}>
          <SkillBadge name="Lógica de Programação" />
          <SkillBadge name="Estrutura de Dados" />
          <SkillBadge name="Inglês (Vantage)" />
          <SkillBadge name="React Native" />
          <SkillBadge name="Expo" />
          <SkillBadge name="Git" />
      </ThemedView>

    </ParallaxScrollView>
  );
}

function SkillBadge({ name }: { name: string }) {
    return (
        <View style={styles.badge}>
            <ThemedText style={styles.badgeText}>{name}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
    opacity: 0.3,
  },
  titleContainer: {
    marginBottom: 16,
  },
  bioText: {
    marginBottom: 24,
    lineHeight: 24,
    color: '#e2e8f0',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 18,
  },
  companyName: {
    color: Colors.dark.tint,
    fontWeight: '600',
    marginTop: 2,
  },
  dateText: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 8,
    marginTop: 4,
    fontStyle: 'italic',
  },
  cardBody: {
    color: '#cbd5e1',
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
    backgroundColor: 'transparent'
  },
  badge: {
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  badgeText: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: '600',
  }
});