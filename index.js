const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const neurotransmitters = [
  {
    id: 'serotonin',
    name: 'Serotonina',
    description: 'A serotonina é um neurotransmissor que desempenha um papel crucial na regulação do humor, sono, apetite e comportamento social. É frequentemente chamada de "hormônio da felicidade" devido à sua influência no bem-estar emocional.',
    functions: [
      'Regulação do humor e bem-estar',
      'Controle do ciclo sono-vigília',
      'Regulação do apetite e digestão',
      'Modulação da ansiedade e estresse',
      'Influência no comportamento social'
    ],
    effects: [
      'Sensação de calma e satisfação',
      'Melhora na qualidade do sono',
      'Regulação do apetite',
      'Redução da ansiedade',
      'Promoção de comportamentos sociais positivos'
    ],
    relatedConditions: [
      'Depressão',
      'Ansiedade',
      'Transtorno Obsessivo-Compulsivo (TOC)',
      'Transtornos do sono',
      'Transtornos alimentares'
    ]
  },
  {
    id: 'dopamine',
    name: 'Dopamina',
    description: 'A dopamina é um neurotransmissor associado ao sistema de recompensa do cérebro, motivação e movimento. É essencial para o aprendizado, tomada de decisões e sensação de prazer.',
    functions: [
      'Regulação do sistema de recompensa',
      'Controle do movimento',
      'Motivação e desejo',
      'Aprendizado e memória',
      'Tomada de decisões'
    ],
    effects: [
      'Sensação de prazer e satisfação',
      'Motivação para atingir objetivos',
      'Coordenação motora',
      'Foco e atenção',
      'Processamento de recompensas'
    ],
    relatedConditions: [
      'Doença de Parkinson',
      'Transtorno de Déficit de Atenção e Hiperatividade (TDAH)',
      'Dependência química',
      'Esquizofrenia',
      'Depressão'
    ]
  },
  {
    id: 'norepinephrine',
    name: 'Noradrenalina',
    description: 'A noradrenalina (ou norepinefrina) é um neurotransmissor que atua como hormônio do estresse, aumentando a atenção e a resposta a situações de alerta. É crucial para a resposta de "luta ou fuga".',
    functions: [
      'Regulação da resposta ao estresse',
      'Controle da atenção e alerta',
      'Modulação da pressão arterial',
      'Regulação do sono',
      'Influência no humor'
    ],
    effects: [
      'Aumento do estado de alerta',
      'Melhora na concentração',
      'Aumento da frequência cardíaca',
      'Preparação para ação',
      'Modulação da ansiedade'
    ],
    relatedConditions: [
      'Transtornos de ansiedade',
      'Transtorno de Estresse Pós-Traumático (TEPT)',
      'Depressão',
      'Transtornos de atenção',
      'Hipertensão'
    ]
  },
  {
    id: 'gaba',
    name: 'GABA',
    description: 'O GABA (ácido gama-aminobutírico) é o principal neurotransmissor inibitório do sistema nervoso central, ajudando a reduzir a atividade neural e promover a calma.',
    functions: [
      'Inibição da atividade neural',
      'Regulação da ansiedade',
      'Controle do tônus muscular',
      'Modulação do sono',
      'Regulação do humor'
    ],
    effects: [
      'Redução da ansiedade',
      'Promoção da calma',
      'Relaxamento muscular',
      'Melhora na qualidade do sono',
      'Estabilização do humor'
    ],
    relatedConditions: [
      'Transtornos de ansiedade',
      'Epilepsia',
      'Insônia',
      'Transtornos do movimento',
      'Transtornos do humor'
    ]
  },
  {
    id: 'glutamate',
    name: 'Glutamato',
    description: 'O glutamato é o principal neurotransmissor excitatório do sistema nervoso central, essencial para o aprendizado, memória e plasticidade neural.',
    functions: [
      'Excitação neural',
      'Formação de memórias',
      'Aprendizado e plasticidade neural',
      'Desenvolvimento do cérebro',
      'Processamento sensorial'
    ],
    effects: [
      'Facilitação do aprendizado',
      'Formação de novas conexões neurais',
      'Processamento de informações',
      'Desenvolvimento cognitivo',
      'Regulação da atividade neural'
    ],
    relatedConditions: [
      'Doença de Alzheimer',
      'Esquizofrenia',
      'Epilepsia',
      'Transtornos de ansiedade',
      'Transtornos do neurodesenvolvimento'
    ]
  }
];

// Rota para listar todos os neurotransmissores
app.get('/neurotransmitters', (req, res) => {
  res.json(neurotransmitters);
});

// Rota para buscar um neurotransmissor específico
app.get('/neurotransmitters/:id', (req, res) => {
  const { id } = req.params;
  const neurotransmitter = neurotransmitters.find(n => n.id === id);

  if (neurotransmitter) {
    res.json(neurotransmitter);
  } else {
    res.status(404).json({ error: 'Neurotransmissor não encontrado' });
  }
});


const brainParts = [
  {
    id: 'cerebrum',
    name: 'Cérebro',
    description: 'O cérebro é a maior parte do sistema nervoso central e é responsável por funções como pensamento, memória, emoção, toque, habilidades motoras, visão, audição e linguagem.',
    functions: [
      'Processamento de informações sensoriais',
      'Controle motor voluntário',
      'Tomada de decisões',
      'Memória e aprendizado',
      'Regulação das emoções'
    ],
    relatedConditions: [
      'Acidente vascular cerebral (AVC)',
      'Doença de Alzheimer',
      'Epilepsia',
      'Traumatismo craniano'
    ]
  },
  {
    id: 'cerebellum',
    name: 'Cerebelo',
    description: 'O cerebelo é responsável pelo controle da coordenação motora, equilíbrio e postura.',
    functions: [
      'Coordenação dos movimentos',
      'Equilíbrio corporal',
      'Manutenção da postura',
      'Aprimoramento dos movimentos finos'
    ],
    relatedConditions: [
      'Ataxia',
      'Lesões cerebelares',
      'Doenças neurodegenerativas'
    ]
  },
  {
    id: 'brainstem',
    name: 'Tronco encefálico',
    description: 'O tronco encefálico conecta o cérebro à medula espinhal e controla funções automáticas vitais, como respiração e batimentos cardíacos.',
    functions: [
      'Controle da respiração',
      'Regulação do batimento cardíaco',
      'Controle da pressão arterial',
      'Reflexos vitais',
      'Transmissão de sinais entre cérebro e corpo'
    ],
    relatedConditions: [
      'Lesões no tronco encefálico',
      'Acidente vascular cerebral',
      'Distúrbios respiratórios'
    ]
  }
];

// Rota para listar todas as partes do cérebro
app.get('/brainparts', (req, res) => {
  res.json(brainParts);
});

// Rota para buscar uma parte específica do cérebro
app.get('/brainparts/:id', (req, res) => {
  const { id } = req.params;
  const brainPart = brainParts.find(bp => bp.id === id);

  if (brainPart) {
    res.json(brainPart);
  } else {
    res.status(404).json({ error: 'Parte do cérebro não encontrada' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
