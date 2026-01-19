import React, { useState, useEffect } from 'react';
import { AlertCircle, Info, ArrowUp, ArrowDown } from 'lucide-react';

const substances = [
  // Benzodiazepines - Prescription
  {
    name: "Alprazolam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "4-6 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Diazepam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "20-100 hours",
    addictive: "High",
    onset: "Medium",
    halfLife: "Long"
  },
  {
    name: "Clonazepam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "18-50 hours",
    addictive: "High",
    onset: "Medium",
    halfLife: "Long"
  },
  {
    name: "Lorazepam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "10-20 hours",
    addictive: "High",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Temazepam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "8-22 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "Triazolam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "1.5-5 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Midazolam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "1-4 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Oxazepam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "4-15 hours",
    addictive: "High",
    onset: "Slow",
    halfLife: "Medium"
  },
  {
    name: "Chlordiazepoxide",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "24-48 hours",
    addictive: "High",
    onset: "Medium",
    halfLife: "Long"
  },
  {
    name: "Flurazepam",
    class: "Benzodiazepine",
    legal: "Prescription",
    duration: "40-250 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Very Long"
  },
  // RC Benzos
  {
    name: "Etizolam",
    class: "Thienodiazepine",
    legal: "RC/Illegal",
    duration: "6-8 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Flualprazolam",
    class: "Benzodiazepine",
    legal: "RC/Illegal",
    duration: "6-14 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "Clonazolam",
    class: "Benzodiazepine",
    legal: "RC/Illegal",
    duration: "6-10 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "Bromazolam",
    class: "Benzodiazepine",
    legal: "RC/Illegal",
    duration: "6-8 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "Flubromazolam",
    class: "Benzodiazepine",
    legal: "RC/Illegal",
    duration: "12-18 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Long"
  },
  {
    name: "Diclazepam",
    class: "Benzodiazepine",
    legal: "RC/Illegal",
    duration: "42 hours",
    addictive: "Very High",
    onset: "Slow",
    halfLife: "Very Long"
  },
  {
    name: "Pyrazolam",
    class: "Benzodiazepine",
    legal: "RC/Illegal",
    duration: "14-18 hours",
    addictive: "Very High",
    onset: "Medium",
    halfLife: "Long"
  },
  // Stimulants - Prescription
  {
    name: "Amphetamine",
    class: "Stimulant",
    legal: "Prescription",
    duration: "4-6 hours",
    addictive: "Moderate",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Dextroamphetamine",
    class: "Stimulant",
    legal: "Prescription",
    duration: "4-6 hours",
    addictive: "Moderate",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Methamphetamine",
    class: "Stimulant",
    legal: "Prescription",
    duration: "8-12 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "Methylphenidate",
    class: "Stimulant",
    legal: "Prescription",
    duration: "3-4 hours",
    addictive: "Moderate",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Lisdexamfetamine",
    class: "Stimulant",
    legal: "Prescription",
    duration: "10-12 hours",
    addictive: "Moderate",
    onset: "Slow",
    halfLife: "Long"
  },
  {
    name: "Modafinil",
    class: "Eugeroic",
    legal: "Prescription",
    duration: "12-15 hours",
    addictive: "Low-Mod",
    onset: "Slow",
    halfLife: "Long"
  },
  // Stimulants - Illegal/RC
  {
    name: "Cocaine",
    class: "Stimulant",
    legal: "Illegal",
    duration: "30-90 min",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Crack Cocaine",
    class: "Stimulant",
    legal: "Illegal",
    duration: "5-15 min",
    addictive: "Very High",
    onset: "Very Fast",
    halfLife: "Short"
  },
  {
    name: "MDMA",
    class: "Empathogen",
    legal: "Illegal",
    duration: "3-6 hours",
    addictive: "Moderate",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "MDA",
    class: "Empathogen",
    legal: "Illegal",
    duration: "4-8 hours",
    addictive: "Moderate",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "2C-B",
    class: "Psychedelic",
    legal: "Illegal",
    duration: "4-8 hours",
    addictive: "Low-Mod",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Mephedrone",
    class: "Stimulant",
    legal: "Illegal",
    duration: "2-3 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "3-MMC",
    class: "Stimulant",
    legal: "RC/Illegal",
    duration: "4-6 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "4-MMC",
    class: "Stimulant",
    legal: "Illegal",
    duration: "2-4 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "A-PHP",
    class: "Stimulant",
    legal: "RC/Illegal",
    duration: "2-4 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "A-PVP",
    class: "Stimulant",
    legal: "Illegal",
    duration: "2-4 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "3-FPM",
    class: "Stimulant",
    legal: "RC/Illegal",
    duration: "3-5 hours",
    addictive: "Moderate",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Caffeine",
    class: "Stimulant",
    legal: "Legal",
    duration: "3-5 hours",
    addictive: "Low",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Nicotine",
    class: "Stimulant",
    legal: "Legal (18+)",
    duration: "1-2 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Short"
  },
  // Opioids - Prescription
  {
    name: "Morphine",
    class: "Opioid",
    legal: "Prescription",
    duration: "3-6 hours",
    addictive: "Very High",
    onset: "Medium",
    halfLife: "Short"
  },
  {
    name: "Oxycodone",
    class: "Opioid",
    legal: "Prescription",
    duration: "3-6 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Hydrocodone",
    class: "Opioid",
    legal: "Prescription",
    duration: "4-8 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Medium"
  },
  {
    name: "Hydromorphone",
    class: "Opioid",
    legal: "Prescription",
    duration: "4-5 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Oxymorphone",
    class: "Opioid",
    legal: "Prescription",
    duration: "4-6 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Codeine",
    class: "Opioid",
    legal: "Prescription",
    duration: "3-4 hours",
    addictive: "High",
    onset: "Medium",
    halfLife: "Short"
  },
  {
    name: "Tramadol",
    class: "Opioid",
    legal: "Prescription",
    duration: "4-6 hours",
    addictive: "Moderate",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Fentanyl",
    class: "Opioid",
    legal: "Prescription",
    duration: "30-90 min",
    addictive: "Extreme",
    onset: "Very Fast",
    halfLife: "Short"
  },
  {
    name: "Methadone",
    class: "Opioid",
    legal: "Prescription",
    duration: "8-59 hours",
    addictive: "Very High",
    onset: "Slow",
    halfLife: "Very Long"
  },
  {
    name: "Buprenorphine",
    class: "Opioid",
    legal: "Prescription",
    duration: "24-72 hours",
    addictive: "Moderate",
    onset: "Slow",
    halfLife: "Very Long"
  },
  {
    name: "Tapentadol",
    class: "Opioid",
    legal: "Prescription",
    duration: "4-6 hours",
    addictive: "High",
    onset: "Fast",
    halfLife: "Medium"
  },
  // Opioids - Illegal/Analogs
  {
    name: "Heroin",
    class: "Opioid",
    legal: "Illegal",
    duration: "3-5 hours",
    addictive: "Extreme",
    onset: "Very Fast",
    halfLife: "Short"
  },
  {
    name: "U-47700",
    class: "Opioid",
    legal: "Illegal",
    duration: "3-6 hours",
    addictive: "Extreme",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Carfentanil",
    class: "Opioid",
    legal: "Illegal",
    duration: "1-4 hours",
    addictive: "Extreme",
    onset: "Very Fast",
    halfLife: "Short"
  },
  {
    name: "Isotonitazene",
    class: "Opioid",
    legal: "Illegal",
    duration: "2-4 hours",
    addictive: "Extreme",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "O-DSMT",
    class: "Opioid",
    legal: "RC/Illegal",
    duration: "6-8 hours",
    addictive: "High",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Kratom",
    class: "Opioid",
    legal: "Varies",
    duration: "2-5 hours",
    addictive: "Low-Mod",
    onset: "Medium",
    halfLife: "Medium"
  },
  // Other common substances
  {
    name: "Alcohol",
    class: "Depressant",
    legal: "Legal (21+)",
    duration: "2-6 hours",
    addictive: "Moderate",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Cannabis",
    class: "Cannabinoid",
    legal: "Varies",
    duration: "2-4 hours",
    addictive: "Low-Mod",
    onset: "Fast",
    halfLife: "Long"
  },
  {
    name: "LSD",
    class: "Psychedelic",
    legal: "Illegal",
    duration: "8-12 hours",
    addictive: "Low-Mod",
    onset: "Medium",
    halfLife: "Medium"
  },
  {
    name: "Psilocybin",
    class: "Psychedelic",
    legal: "Illegal",
    duration: "4-6 hours",
    addictive: "Low",
    onset: "Medium",
    halfLife: "Short"
  },
  {
    name: "Ketamine",
    class: "Dissociative",
    legal: "Prescription",
    duration: "1-2 hours",
    addictive: "Moderate",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "GHB",
    class: "Depressant",
    legal: "Illegal",
    duration: "1.5-3 hours",
    addictive: "Very High",
    onset: "Fast",
    halfLife: "Short"
  },
  {
    name: "Phenibut",
    class: "Depressant",
    legal: "Legal/Varies",
    duration: "5-8 hours",
    addictive: "Moderate",
    onset: "Slow",
    halfLife: "Medium"
  }
];

// Define order for comparisons
const addictiveOrder = ["Low", "Low-Mod", "Moderate", "High", "Very High", "Extreme"];
const onsetOrder = ["Slow", "Medium", "Fast", "Very Fast"];
const halfLifeOrder = ["Short", "Medium", "Long", "Very Long"];
const durationOrder = [
  "5-15 min", "30-90 min", "1-2 hours", "1.5-3 hours", "1.5-5 hours", 
  "2-3 hours", "2-4 hours", "2-5 hours", "2-6 hours", "3-4 hours", 
  "3-5 hours", "3-6 hours", "4-5 hours", "4-6 hours", "4-8 hours", 
  "5-8 hours", "6-8 hours", "8-12 hours", "10-12 hours", "12-15 hours",
  "1-4 hours", "8-59 hours", "24-72 hours", "4-15 hours", "6-10 hours",
  "6-14 hours", "10-20 hours", "12-18 hours", "14-18 hours", "18-50 hours",
  "8-22 hours", "20-100 hours", "24-48 hours", "40-250 hours", "42 hours"
];

const SubstanceGame = () => {
  const [targetSubstance, setTargetSubstance] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [gameMode, setGameMode] = useState('classic'); // classic, unlimited, class, description
  const [gameLost, setGameLost] = useState(false);
  const [revealedWords, setRevealedWords] = useState([]);
  const maxGuesses = 10;

  // Descriptions for substances (like Pokedex entries)
  const descriptions = {
    "Alprazolam": "A short-acting triazolobenzodiazepine commonly prescribed for anxiety and panic disorders, known by the brand name Xanax",
    "Diazepam": "A long-acting benzodiazepine used for anxiety, seizures, and muscle spasms, marketed under the brand name Valium",
    "Clonazepam": "A long-acting benzodiazepine primarily used for seizure disorders and panic disorder, sold as Klonopin",
    "Lorazepam": "An intermediate-acting benzodiazepine used for anxiety disorders and seizures, known as Ativan",
    "Cocaine": "A powerful stimulant derived from coca leaves that blocks dopamine reuptake, causing intense euphoria and energy",
    "MDMA": "An empathogenic substance that releases serotonin, dopamine, and norepinephrine, known for producing feelings of emotional closeness",
    "Morphine": "A natural opioid alkaloid extracted from opium poppy, used medically for severe pain management",
    "Heroin": "A semi-synthetic opioid derived from morphine, producing intense euphoria but carrying extreme addiction and overdose risk",
    "LSD": "A potent psychedelic that acts on serotonin receptors, causing profound alterations in perception, thought, and mood",
    "Psilocybin": "A naturally occurring psychedelic compound found in certain mushrooms that converts to psilocin in the body",
    "Ketamine": "A dissociative anesthetic used medically and recreationally, known for producing out-of-body experiences at higher doses",
    "Cannabis": "A plant containing THC and CBD that produces relaxation, altered perception, and appetite stimulation",
    "Caffeine": "The world's most widely consumed psychoactive substance, a stimulant found in coffee, tea, and energy drinks",
    "Nicotine": "A highly addictive stimulant found in tobacco that activates nicotinic acetylcholine receptors in the brain",
    "Alcohol": "A central nervous system depressant produced by fermentation that is legal and culturally accepted in most countries",
    "Methamphetamine": "A potent central nervous system stimulant with high abuse potential, available by prescription as Desoxyn",
    "Fentanyl": "An extremely potent synthetic opioid used medically for severe pain, fifty to one hundred times stronger than morphine",
    "Oxycodone": "A semi-synthetic opioid used for moderate to severe pain, commonly known by brand names like OxyContin and Percocet",
    "Amphetamine": "A central nervous system stimulant used to treat ADHD and narcolepsy, sold as Adderall when combined with dextroamphetamine",
    "Buprenorphine": "A partial opioid agonist used for pain management and opioid addiction treatment, marketed as Suboxone when combined with naloxone",
    "Kratom": "A tropical tree whose leaves contain compounds that produce opioid-like effects, used traditionally in Southeast Asia",
    "GHB": "A central nervous system depressant that occurs naturally in the brain, known for its use as a club drug",
    "Etizolam": "A thienodiazepine with similar effects to benzodiazepines, used in some countries for anxiety but unscheduled in others",
    "Bromazolam": "A designer benzodiazepine analog with no approved medical use, appearing in the recreational drug market",
    "Clonazolam": "An extremely potent research chemical benzodiazepine with a high risk of dependence and severe withdrawal",
    "2C-B": "A synthetic psychedelic phenethylamine known for producing both stimulant and psychedelic effects",
    "Tramadol": "An atypical opioid analgesic that also inhibits serotonin and norepinephrine reuptake, used for moderate pain",
    "Hydrocodone": "A semi-synthetic opioid commonly prescribed for pain, often combined with acetaminophen as Vicodin",
    "Codeine": "A naturally occurring opioid used for mild to moderate pain and cough suppression, often combined with promethazine",
    "Methylphenidate": "A stimulant medication used primarily for ADHD, known by the brand name Ritalin"
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const getDescriptionWords = (description) => {
    return description.split(' ');
  };

  const revealMoreWords = () => {
    if (!targetSubstance || !descriptions[targetSubstance.name]) return;
    
    const words = getDescriptionWords(descriptions[targetSubstance.name]);
    const wordsToReveal = Math.min(3, words.length - revealedWords.length);
    
    const newRevealedIndices = [...revealedWords];
    let attempts = 0;
    while (newRevealedIndices.length < revealedWords.length + wordsToReveal && attempts < 100) {
      const randomIndex = Math.floor(Math.random() * words.length);
      if (!newRevealedIndices.includes(randomIndex)) {
        newRevealedIndices.push(randomIndex);
      }
      attempts++;
    }
    
    setRevealedWords(newRevealedIndices.sort((a, b) => a - b));
  };

  const startNewGame = () => {
    let randomSubstance;
    
    if (gameMode === 'class') {
      const classes = [...new Set(substances.map(s => s.class))];
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      const substancesInClass = substances.filter(s => s.class === randomClass);
      randomSubstance = substancesInClass[Math.floor(Math.random() * substancesInClass.length)];
    } else if (gameMode === 'description') {
      const substancesWithDescriptions = substances.filter(s => descriptions[s.name]);
      randomSubstance = substancesWithDescriptions[Math.floor(Math.random() * substancesWithDescriptions.length)];
    } else {
      randomSubstance = substances[Math.floor(Math.random() * substances.length)];
    }
    
    setTargetSubstance(randomSubstance);
    setGuesses([]);
    setGameWon(false);
    setGameLost(false);
    setInput('');
    setRevealedWords([]);
  };

  const compareValues = (guessValue, targetValue, order) => {
    const guessIndex = order.indexOf(guessValue);
    const targetIndex = order.indexOf(targetValue);
    
    if (guessIndex === targetIndex) return 'match';
    if (guessIndex < targetIndex) return 'higher';
    return 'lower';
  };

  const handleInputChange = (value) => {
    setInput(value);
    if (value.length > 0) {
      let filtered = substances.filter(s => s.name.toLowerCase().includes(value.toLowerCase()));
      
      // In class mode, only show substances from the same class
      if (gameMode === 'class' && targetSubstance) {
        filtered = filtered.filter(s => s.class === targetSubstance.class);
      }
      
      filtered = filtered
        .filter(s => !guesses.find(g => g.name === s.name))
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const makeGuess = (substance) => {
    if (gameWon || gameLost || guesses.find(g => g.name === substance.name)) return;

    const newGuess = {
      ...substance,
      matches: {
        class: substance.class === targetSubstance.class ? 'match' : 'nomatch',
        legal: substance.legal === targetSubstance.legal ? 'match' : 'nomatch',
        duration: compareValues(substance.duration, targetSubstance.duration, durationOrder),
        addictive: compareValues(substance.addictive, targetSubstance.addictive, addictiveOrder),
        onset: compareValues(substance.onset, targetSubstance.onset, onsetOrder),
        halfLife: compareValues(substance.halfLife, targetSubstance.halfLife, halfLifeOrder)
      }
    };

    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setInput('');
    setSuggestions([]);

    if (substance.name === targetSubstance.name) {
      setGameWon(true);
    } else {
      if (gameMode === 'classic' && newGuesses.length >= maxGuesses) {
        setGameLost(true);
      } else if (gameMode === 'description') {
        revealMoreWords();
      }
    }
  };

  const getBoxStyle = (matchType) => {
    if (matchType === 'match') return 'bg-green-500';
    return 'bg-gray-600';
  };

  const getTextColor = (matchType) => {
    return 'text-white';
  };

  const renderArrow = (matchType) => {
    if (matchType === 'higher') return <ArrowUp className="mx-auto" size={16} />;
    if (matchType === 'lower') return <ArrowDown className="mx-auto" size={16} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6">
          <h1 className="text-4xl font-bold text-white mb-2 text-center">Substance Knowledge Game</h1>
          <p className="text-blue-200 text-center mb-4">Educational harm reduction tool - Learn about substances and their properties</p>
          
          <div className="mb-4">
            <div className="flex justify-center gap-2 flex-wrap">
              <button
                onClick={() => { setGameMode('classic'); startNewGame(); }}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  gameMode === 'classic' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/20 text-white/70 hover:bg-white/30'
                }`}
              >
                Classic
              </button>
              <button
                onClick={() => { setGameMode('unlimited'); startNewGame(); }}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  gameMode === 'unlimited' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/20 text-white/70 hover:bg-white/30'
                }`}
              >
                Unlimited
              </button>
              <button
                onClick={() => { setGameMode('class'); startNewGame(); }}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  gameMode === 'class' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/20 text-white/70 hover:bg-white/30'
                }`}
              >
                Class Mode
              </button>
              <button
                onClick={() => { setGameMode('description'); startNewGame(); }}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  gameMode === 'description' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/20 text-white/70 hover:bg-white/30'
                }`}
              >
                Description
              </button>
            </div>
            <p className="text-center text-white/70 text-sm mt-2">
              {gameMode === 'classic' && 'Standard game - guess the substance in 10 tries!'}
              {gameMode === 'unlimited' && 'No guess limit - take your time!'}
              {gameMode === 'class' && 'Only substances from the same class!'}
              {gameMode === 'description' && 'Guess from a description - more words reveal with each wrong guess!'}
            </p>
          </div>
          
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded p-3 mb-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
              <p className="text-yellow-100 text-sm">
                This is an educational tool. If you or someone you know needs help with substance use, contact SAMHSA's National Helpline: 1-800-662-4357
              </p>
            </div>
          </div>
        </div>

        {!gameWon && !gameLost && (
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6">
            {gameMode === 'description' && targetSubstance && descriptions[targetSubstance.name] && (
              <div className="mb-4">
                <div className="bg-indigo-500/20 border-2 border-indigo-400/50 rounded-lg p-4">
                  <div className="text-indigo-200 text-sm font-semibold mb-2 text-center">DESCRIPTION</div>
                  <div className="text-white text-center leading-relaxed">
                    {getDescriptionWords(descriptions[targetSubstance.name]).map((word, idx) => (
                      <span key={idx}>
                        {revealedWords.includes(idx) ? (
                          <span className="font-semibold">{word}</span>
                        ) : (
                          <span className="bg-white/20 rounded px-1 mx-0.5 inline-block" style={{width: `${word.length * 0.6}em`}}>
                            &nbsp;
                          </span>
                        )}
                        {' '}
                      </span>
                    ))}
                  </div>
                  <div className="text-indigo-300 text-xs mt-3 text-center">
                    {revealedWords.length} / {getDescriptionWords(descriptions[targetSubstance.name]).length} words revealed
                  </div>
                </div>
              </div>
            )}
            {gameMode === 'class' && targetSubstance && (
              <div className="mb-4 text-center">
                <div className="inline-block bg-purple-500/30 border-2 border-purple-400/50 rounded-lg px-6 py-3">
                  <div className="text-purple-200 text-sm font-semibold mb-1">CLASS</div>
                  <div className="text-white text-2xl font-bold">{targetSubstance.class}</div>
                </div>
              </div>
            )}
            {gameMode === 'classic' && (
              <div className="mb-3 text-center">
                <span className="text-white/70">Guesses: </span>
                <span className="text-white font-bold">{guesses.length}/{maxGuesses}</span>
              </div>
            )}
            <label className="block text-white mb-2 font-semibold">Guess the substance:</label>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white/60"
              placeholder="Start typing a substance name..."
            />
            
            {suggestions.length > 0 && (
              <div className="mt-2 bg-white/20 rounded border border-white/30 overflow-hidden">
                {suggestions.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => makeGuess(sub)}
                    className="w-full text-left p-3 text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {gameLost && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-red-300 mb-2">Game Over!</h2>
            <p className="text-white mb-4">
              You've used all {maxGuesses} guesses. The substance was <span className="font-bold text-red-200">{targetSubstance.name}</span>.
            </p>
            <button
              onClick={startNewGame}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {gameWon && (
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-green-300 mb-2">Congratulations! 🎉</h2>
            <p className="text-white mb-4">
              You correctly identified {targetSubstance.name} in {guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}!
              {gameMode === 'class' && <span className="block mt-2 text-green-200">Class: {targetSubstance.class}</span>}
            </p>
            <button
              onClick={startNewGame}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-colors"
            >
              Play Again
            </button>
          </div>
        )}

        {guesses.length > 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Your Guesses:</h3>
            <div className="space-y-3">
              {guesses.map((guess, idx) => (
                <div key={idx} className="bg-white/5 rounded p-4">
                  <div className="font-bold text-white mb-2 text-lg">{guess.name}</div>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className={`${getBoxStyle(guess.matches.class)} rounded p-2 text-center`}>
                      <div className={`text-xs ${getTextColor(guess.matches.class)} opacity-80`}>Class</div>
                      <div className={`${getTextColor(guess.matches.class)} font-semibold text-sm`}>{guess.class}</div>
                    </div>
                    <div className={`${getBoxStyle(guess.matches.legal)} rounded p-2 text-center`}>
                      <div className={`text-xs ${getTextColor(guess.matches.legal)} opacity-80`}>Legal Status</div>
                      <div className={`${getTextColor(guess.matches.legal)} font-semibold text-sm`}>{guess.legal}</div>
                    </div>
                    <div className={`${getBoxStyle(guess.matches.duration)} rounded p-2 text-center`}>
                      <div className={`text-xs ${getTextColor(guess.matches.duration)} opacity-80`}>Duration</div>
                      <div className={`${getTextColor(guess.matches.duration)} font-semibold text-sm flex items-center justify-center gap-1`}>
                        {guess.duration}
                        {renderArrow(guess.matches.duration)}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className={`${getBoxStyle(guess.matches.addictive)} rounded p-2 text-center`}>
                      <div className={`text-xs ${getTextColor(guess.matches.addictive)} opacity-80`}>Addictive</div>
                      <div className={`${getTextColor(guess.matches.addictive)} font-semibold text-sm flex items-center justify-center gap-1`}>
                        {guess.addictive}
                        {renderArrow(guess.matches.addictive)}
                      </div>
                    </div>
                    <div className={`${getBoxStyle(guess.matches.onset)} rounded p-2 text-center`}>
                      <div className={`text-xs ${getTextColor(guess.matches.onset)} opacity-80`}>Onset</div>
                      <div className={`${getTextColor(guess.matches.onset)} font-semibold text-sm flex items-center justify-center gap-1`}>
                        {guess.onset}
                        {renderArrow(guess.matches.onset)}
                      </div>
                    </div>
                    <div className={`${getBoxStyle(guess.matches.halfLife)} rounded p-2 text-center`}>
                      <div className={`text-xs ${getTextColor(guess.matches.halfLife)} opacity-80`}>Half-Life</div>
                      <div className={`${getTextColor(guess.matches.halfLife)} font-semibold text-sm flex items-center justify-center gap-1`}>
                        {guess.halfLife}
                        {renderArrow(guess.matches.halfLife)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Info className="text-blue-300 flex-shrink-0 mt-1" size={18} />
            <p className="text-blue-200 text-sm">
              Green boxes indicate a match. Arrows show if the target value is higher ↑ or lower ↓. This game is designed to educate about substance properties, not to encourage use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubstanceGame;