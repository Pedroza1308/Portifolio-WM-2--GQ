import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/icon-symbol';

const WORDS = [
  'BANANA', 'CATOLICA', 'MOBILE', 'INTERNET', 'CODIGO', 
  'CACHORRO', 'PORTA', 'VIAGEM', 'MACARRAO', 'JAVA', 
  'CSS', 'RECIFE', 'NOVEMBRO', 'FERIAS', 'GIT', 
  'CORRERIA', 'DIZER', 'SENTAR', 'FAZER', 'PREGUICA'
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const MAX_ATTEMPTS = 6;

export default function JogoScreen() {
  const [currentWord, setCurrentWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');

  useEffect(() => {
    initGame();
  }, []);


  const initGame = (lastWord = '') => {
    let newWord;
    do {
      const randomIndex = Math.floor(Math.random() * WORDS.length);
      newWord = WORDS[randomIndex];
    } while (newWord === lastWord && WORDS.length > 1);

    setCurrentWord(newWord);
    setGuessedLetters([]);
    setAttemptsLeft(MAX_ATTEMPTS);
    setGameState('playing');
  };

  useEffect(() => {
    if (currentWord && gameState === 'playing') {
      const wordLetters = currentWord.split('');
      const allLettersGuessed = wordLetters.every(letter => guessedLetters.includes(letter));

      if (allLettersGuessed) {
        setGameState('won');
        Alert.alert(
          "Parabéns!", 
          "Você acertou a palavra!", 
          [{ text: "Próxima Palavra", onPress: () => initGame(currentWord) }]
        );
      } else if (attemptsLeft <= 0) {
        setGameState('lost');
        Alert.alert(
          "Você errou!", 
          `A palavra era: ${currentWord}`, 
          [{ text: "Tentar Novamente", onPress: () => initGame(currentWord) }]
        );
      }
    }
  }, [guessedLetters, attemptsLeft, gameState]);

  const handleGuess = (letter: string) => {
    if (gameState !== 'playing' || guessedLetters.includes(letter)) return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!currentWord.includes(letter)) {
      setAttemptsLeft((prev) => prev - 1);
    }
  };

  const renderWordPlaceholder = () => {
    return (
      <View style={styles.wordContainer}>
        {currentWord.split('').map((letter, index) => (
          <View key={index} style={styles.letterSlot}>
            <ThemedText style={styles.letterText}>
              {guessedLetters.includes(letter) || gameState === 'lost' ? letter : '_'}
            </ThemedText>
          </View>
        ))}
      </View>
    );
  };

  const renderKeyboard = () => {
    return (
      <View style={styles.keyboardContainer}>
        {ALPHABET.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = currentWord.includes(letter);
          
          let buttonStyle = styles.keyButton;
          let textStyle = styles.keyText;

          if (isGuessed) {
             if (isCorrect) {
                 buttonStyle = styles.keyButtonCorrect;
                 textStyle = styles.keyTextDisabled;
             } else {
                 buttonStyle = styles.keyButtonWrong;
                 textStyle = styles.keyTextDisabled;
             }
          }

          return (
            <TouchableOpacity
              key={letter}
              style={buttonStyle}
              onPress={() => handleGuess(letter)}
              disabled={isGuessed || gameState !== 'playing'}
            >
              <ThemedText style={textStyle}>{letter}</ThemedText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
      <ThemedView style={styles.container}>

        <ThemedView style={styles.header}>
            <ThemedText type="title" style={styles.title}>Jogo da Forca</ThemedText>
        </ThemedView>

        <ThemedText style={styles.attemptsInfo}>Tentativas restantes: {attemptsLeft}</ThemedText>

        <View style={styles.gameArea}>
             {renderWordPlaceholder()}
        </View>

        {renderKeyboard()}

        <TouchableOpacity style={styles.resetButton} onPress={() => initGame(currentWord)}>
            <IconSymbol name="arrow.clockwise" size={20} color="#fff" />
            <ThemedText style={styles.resetButtonText}>Nova Palavra</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: Colors.dark.tint,
  },
  attemptsInfo: {
      textAlign: 'center',
      color: '#94a3b8',
      marginBottom: 20,
  },
  gameArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  letterSlot: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.dark.tint,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  letterText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  keyButton: {
    width: '13%', 
    aspectRatio: 1,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  keyButtonCorrect: {
      backgroundColor: 'rgba(56, 189, 248, 0.3)',
      borderColor: Colors.dark.tint,
      borderWidth: 1,
      width: '13%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
  },
  keyButtonWrong: {
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      borderColor: '#ef4444',
      borderWidth: 1,
      width: '13%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
  },
  keyText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.tint,
  },
  keyTextDisabled: {
      fontSize: 18,
      fontWeight: '600',
      color: '#94a3b8',
  },
  resetButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.dark.tint,
      padding: 12,
      borderRadius: 8,
      gap: 8,
      marginBottom: 10,
  },
  resetButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
  }
});