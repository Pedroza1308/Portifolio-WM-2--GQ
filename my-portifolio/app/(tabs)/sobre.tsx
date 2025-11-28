import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function SobreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre Mim</ThemedText>
      </ThemedView>
      
      <ThemedText>
        Desenvolvedor apaixonado por tecnologia e resolução de problemas. Abaixo você encontra um resumo da minha carreira e habilidades.
      </ThemedText>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Experiência Profissional</ThemedText>
        
        <Collapsible title="Desenvolvedor Full Stack (Atual)">
          <ThemedText style={styles.dateText}>2023 - Presente</ThemedText>
          <ThemedText>
            Atuando no desenvolvimento de aplicações web e mobile, utilizando React, Node.js e SQL. Foco em performance e escalabilidade.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Estágio em Desenvolvimento">
          <ThemedText style={styles.dateText}>2021 - 2023</ThemedText>
          <ThemedText>
            Auxiliei na manutenção de sistemas legados e na implementação de novas features utilizando JavaScript e Python.
          </ThemedText>
        </Collapsible>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Formação Acadêmica</ThemedText>
        
        <Collapsible title="Análise e Desenv. de Sistemas">
          <ThemedText style={styles.dateText}>Conclusão: 2024</ThemedText>
          <ThemedText>
            Universidade Exemplo. Foco em engenharia de software e arquitetura de sistemas.
          </ThemedText>
        </Collapsible>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Tech Stack</ThemedText>
        <ThemedView style={styles.skillsContainer}>
            <SkillBadge name="React Native" />
            <SkillBadge name="Expo" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="SQL" />
            <SkillBadge name="Git" />
        </ThemedView>
      </ThemedView>

    </ParallaxScrollView>
  );
}

function SkillBadge({ name }: { name: string }) {
    return (
        <ThemedView style={styles.badge}>
            <ThemedText style={styles.badgeText}>{name}</ThemedText>
        </ThemedView>
    )
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
  sectionContainer: {
    marginTop: 16,
    gap: 8,
  },
  sectionTitle: {
    marginBottom: 4,
    color: '#0a7ea4',
  },
  dateText: {
    fontSize: 12,
    color: '#808080',
    marginBottom: 4,
    fontStyle: 'italic',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  badge: {
    backgroundColor: '#0a7ea4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  }
});