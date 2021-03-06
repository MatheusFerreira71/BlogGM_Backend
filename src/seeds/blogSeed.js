require('dotenv').config();
const seeder = require('mongoose-seed');

const categoriasIds = [
    '5ef2a733ed59a23e5cbcb161',
    '5ef2a733ed59a23e5cbcb162',
    '5ef2a733ed59a23e5cbcb163',
    '5ef2a733ed59a23e5cbcb164',
    '5ef2a733ed59a23e5cbcb165',
    '5ef2a733ed59a23e5cbcb166'
];

const tagIds = [
    '5ef8eb540504f628ccc2361d',
    '5ef8eb540504f628ccc2361e',
    '5ef8eb540504f628ccc2361f',
    '5ef8eb540504f628ccc23620',
    '5ef8eb540504f628ccc23621',
    '5ef8eb540504f628ccc23622',
    '5ef8eb540504f628ccc23623',
    '5ef8eb540504f628ccc23624',
    '5ef8eb540504f628ccc23625',
    '5ef8eb540504f628ccc23626',
    '5ef8eb540504f628ccc23627',
    '5ef8eb540504f628ccc23628',
    '5ef8eb540504f628ccc23629',
    '5ef8eb540504f628ccc2362a',
    '5ef8eb540504f628ccc2362b',
    '5ef8eb540504f628ccc2362c',
    '5ef8eb540504f628ccc2362d',
    '5ef8eb540504f628ccc2362e',
    '5ef8eb540504f628ccc2362f',
    '5ef8eb540504f628ccc23630',
    '5ef8eb540504f628ccc23631',
    '5ef8eb540504f628ccc23632'
]

const userIds = ['5eff962716ac4d294cb825ac', '5ef8ec73f1dd73416016d720', '5ef8ec73f1dd73416016d721'];

const postsIds = [
    '5ef8ec23cc1aae44a0f89adb',
    '5ef8ec23cc1aae44a0f89adc',
    '5ef8ec23cc1aae44a0f89add',
    '5ef8ec23cc1aae44a0f89ade'
]

// Connect to MongoDB via Mongoose
seeder.connect(process.env.CONNECTION_STRING, () => {

    // Load Mongoose models
    seeder.loadModels([
        'src/models/Categoria.js',
        'src/models/SubCategoria.js',
        'src/models/Usuario.js',
        'src/models/Tag.js',
        'src/models/Post.js',
        'src/models/PostCategoria.js',
        'src/models/PostTag.js',
        'src/models/Comentario'
    ]);

    // Clear specified collections
    seeder.clearModels(['Categoria', 'SubCategoria', 'Usuario', 'Tag', 'Post', 'PostCategoria', 'PostTag', 'Comentario'], () => {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, () => {
            seeder.disconnect();
        });

    });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Categoria',
        'documents': [
            {
                '_id': categoriasIds[0],
                'titulo': "An??lises"
            },
            {
                '_id': categoriasIds[1],
                'titulo': "Not??cias"
            },
            // Subcategorias de not??cias
            {
                '_id': categoriasIds[2],
                'titulo': "Games",
                'isSub': true
            },
            {
                '_id': categoriasIds[3],
                'titulo': "Smartphones",
                'isSub': true
            },
            {
                '_id': categoriasIds[4],
                'titulo': "Tecnologia",
                'isSub': true
            },
            {
                '_id': categoriasIds[5],
                'titulo': "Entretenimento",
                'isSub': true
            }
        ]
    },
    {
        'model': "SubCategoria",
        'documents': [
            {
                'catPai': categoriasIds[1],
                'catFilha': categoriasIds[2]
            },
            {
                'catPai': categoriasIds[1],
                'catFilha': categoriasIds[3]
            },
            {
                'catPai': categoriasIds[1],
                'catFilha': categoriasIds[4]
            },
            {
                'catPai': categoriasIds[1],
                'catFilha': categoriasIds[5]
            }
        ]
    },
    {
        'model': "Usuario",
        'documents': [
            {
                '_id': userIds[0],
                'nome': "Matheus Ferreira",
                'username': "MatheusFerreira71",
                'email': "matheus.ferreira48@fatec.sp.gov.br",
                'bio': "Administrador, analista de games, criador de conte??do, influenciador...",
                'avatar': "4512F37HB69526T-profile-1.jpg",
                'isAdm': true,
                'uniqueId': 'mat123'
            },
            {
                '_id': userIds[1],
                'nome': "Gustavo Pazeto",
                'username': "Pazeto22",
                'email': "gustavo.pazeto@fatec.sp.gov.br",
                'bio': "Administrador, analista de games, criador de conte??do, influenciador...",
                'avatar': "4512A37JL69528Y-profile-2.jpg",
                'isAdm': true,
                'uniqueId': 'paz123'
            },
            {
                '_id': userIds[2],
                'nome': "Administrador Principal",
                'username': "Admin",
                'email': "admin@admin.com",
                'bio': "Administrador, analista de games, criador de conte??do, influenciador...",
                'avatar': "4512F37DF69526S-avatar-padrao.png",
                'isAdm': true,
                'uniqueId': 'mgmd2cWxPlhqxcfNbU3qn7ViZwd2'
            },
        ]
    },
    {
        'model': "Tag",
        'documents': [
            {
                '_id': tagIds[0],
                'titulo': "RPG",
                'tituloLower': "rpg"
            },
            {
                '_id': tagIds[1],
                'titulo': "JRPG",
                'tituloLower': "jrpg"
            },
            {
                '_id': tagIds[2],
                'titulo': "Atlus",
                'tituloLower': "atlus"
            },
            {
                '_id': tagIds[3],
                'titulo': "P Studio",
                'tituloLower': "p studio"
            },
            {
                '_id': tagIds[4],
                'titulo': "Persona",
                'tituloLower': "persona"
            },
            {
                '_id': tagIds[5],
                'titulo': "Persona 5",
                'tituloLower': "persona 5"
            },
            {
                '_id': tagIds[6],
                'titulo': "A????o",
                'tituloLower': "a????o"
            },
            {
                '_id': tagIds[7],
                'titulo': "Aventura",
                'tituloLower': "aventura"
            },
            {
                '_id': tagIds[8],
                'titulo': "Terror",
                'tituloLower': "terror"
            },
            {
                '_id': tagIds[9],
                'titulo': "Resident Evil",
                'tituloLower': "resident evil"
            },
            {
                '_id': tagIds[10],
                'titulo': "Resident Evil 3",
                'tituloLower': "resident evil 3"
            },
            {
                '_id': tagIds[11],
                'titulo': "Capcom",
                'tituloLower': "capcom"
            },
            {
                '_id': tagIds[12],
                'titulo': "Activision",
                'tituloLower': "activision"
            },
            {
                '_id': tagIds[13],
                'titulo': "Crash Bandicoot",
                'tituloLower': "crash bandicoot"
            },
            {
                '_id': tagIds[14],
                'titulo': "Crash Bandicoot 4",
                'tituloLower': "crash bandicoot 4"
            },
            {
                '_id': tagIds[15],
                'titulo': "Marvel",
                'tituloLower': "marvel"
            },
            {
                '_id': tagIds[16],
                'titulo': "Vingadores",
                'tituloLower': "vingadores"
            },
            {
                '_id': tagIds[17],
                'titulo': "Marvel's Avengers",
                'tituloLower': "marvel's avengers"
            },
            {
                '_id': tagIds[18],
                'titulo': "Square Enix",
                'tituloLower': "square enix"
            },
            {
                '_id': tagIds[19],
                'titulo': "Crystal Dynamics",
                'tituloLower': "crystal dynamics"
            },
            {
                '_id': tagIds[20],
                'titulo': "Crystal Northwest",
                'tituloLower': "crystal northwest"
            },
            {
                '_id': tagIds[21],
                'titulo': "Eidos Montr??al",
                'tituloLower': "eidos mnontr??al"
            },
        ]
    },
    {
        'model': "Post",
        'documents': [
            {
                '_id': postsIds[0],
                'titulo': "An??lise: Persona 5 Royal",
                'tituloLower': "an??lise: persona 5 royal",
                'descricao': "O passado e o futuro rei dos JRPGs rouba nossos cora????es novamente",
                'corpo': "Persona 5 j?? era um forte candidato ?? lideran??a de melhor JRPG de todos os tempos, e Royal realmente me faz pensar em quem mais poderia competir. A excelente hist??ria e seus ador??veis ??????personagens multidimensionais, juntamente com o desafiante combate t??tico, est??o ainda mais refinados e voltam para outra rodada com novas surpresas e novos amigos. Existem novas ??reas para explorar e novas reviravoltas para te deixar de queixo ca??do. Muito pouco foi deixado intocado, e quase tudo o que foi tocado mudou para melhor. Os Phantom Thieves roubaram meu cora????o mais uma vez -- e eu realmente n??o o quero de volta.",
                'banner': "4512J37SF69526P-persona5.jpg",
                'usuario': userIds[1]
            },
            {
                '_id': postsIds[1],
                'titulo': "An??lise: Resident Evil 3 Remake",
                'tituloLower': "an??lise: resident evil 3 remake",
                'descricao': "Jill Valentine e Nemesis continuam sendo a melhor dupla de Raccoon City",
                'corpo': "?? ??bvio que se voc?? gosta de jogos do g??nero, Resident Evil 3 Remake precisa estar na sua lista do que jogar ainda este ano. Nemesis voltou para nos lembrar da raz??o pela qual ?? lembrado com tanto carinho pelos f??s e Jill Valentine, mais determinada e habilidosa do que em qualquer outro game, mostrou que continua sendo uma das, sen??o a melhor personagens da franquia. Com uma ambienta????o fenomenal, hist??ria devidamente atualizada, ritmo mais din??mico e personagens mais humanos, a nova vers??o do cl??ssico de 1999 conclui a recria????o da trilogia cl??ssica com excel??ncia, ainda que peque em alguns aspectos de mec??nica e, principalmente, pela aus??ncia de mais enigmas, marca registrada de Resident Evil.",
                'banner': "4512F37VA69526H-re3.jpg",
                'usuario': userIds[0]
            },
            {
                '_id': postsIds[2],
                'titulo': "Crash Bandicoot 4 vai honrar os cl??ssicos, promete est??dio",
                'tituloLower': "crash bandicoot 4 vai honrar os cl??ssicos, promete est??dio",
                'descricao': "'Maior, melhor e mais ??pico' do que tudo visto na s??rie, disse Paul Yan",
                'corpo': "Crash Bandicoot 4: It's About Time ?? o t??o esperado jogo in??dito da s??rie, que voltou com tudo ap??s as remasteriza????es da trilogia cl??ssica e dos jogos de corrida.",
                'banner': "4512O37WM69526N-crash4.jpg",
                'usuario': userIds[0]
            },
            {
                '_id': postsIds[3],
                'titulo': "Marvel's Avengers nos far?? questionar quem s??o os 'her??is'",
                'tituloLower': "marvel's avengers nos far?? questionar quem s??o os 'her??is'",
                'descricao': "Jogo dos Vingadores ser?? uma hist??ria de origem da Kamala Khan",
                'corpo': "Marvel's Avengers, o jogo dos Vingadores, n??o vai contar apenas mais uma hist??ria na qual os her??is salvam o mundo de um vil??o que quer domin??-lo. Aparentemente, os jogadores ser??o levados a questionar os her??is com frequ??ncia. Ali??s, refletir sobre o pr??prio conceito de her??i",
                'banner': "4512A37QJ69526K-avengeiros.jpg",
                'usuario': userIds[1]
            },
        ]
    },
    {
        'model': "PostCategoria",
        'documents': [
            {
                'catId': categoriasIds[0],
                'postId': postsIds[0]
            },
            {
                'catId': categoriasIds[0],
                'postId': postsIds[1]
            },
            {
                'catId': categoriasIds[1],
                'postId': postsIds[2]
            },
            {
                'catId': categoriasIds[2],
                'postId': postsIds[2]
            },
            {
                'catId': categoriasIds[1],
                'postId': postsIds[3]
            },
            {
                'catId': categoriasIds[2],
                'postId': postsIds[3]
            },
        ]
    },
    {
        'model': 'PostTag',
        'documents': [
            {
                'tagId': tagIds[0],
                'postId': postsIds[0]
            },
            {
                'tagId': tagIds[1],
                'postId': postsIds[0]
            },
            {
                'tagId': tagIds[2],
                'postId': postsIds[0]
            },
            {
                'tagId': tagIds[3],
                'postId': postsIds[0]
            },
            {
                'tagId': tagIds[4],
                'postId': postsIds[0]
            },
            {
                'tagId': tagIds[5],
                'postId': postsIds[0]
            },
            {
                'tagId': tagIds[6],
                'postId': postsIds[1]
            },
            {
                'tagId': tagIds[7],
                'postId': postsIds[1]
            },
            {
                'tagId': tagIds[8],
                'postId': postsIds[1]
            },
            {
                'tagId': tagIds[9],
                'postId': postsIds[1]
            },
            {
                'tagId': tagIds[10],
                'postId': postsIds[1]
            },
            {
                'tagId': tagIds[11],
                'postId': postsIds[1]
            },
            {
                'tagId': tagIds[7],
                'postId': postsIds[2]
            },
            {
                'tagId': tagIds[12],
                'postId': postsIds[2]
            },
            {
                'tagId': tagIds[13],
                'postId': postsIds[2]
            },
            {
                'tagId': tagIds[14],
                'postId': postsIds[2]
            },
            {
                'tagId': tagIds[6],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[7],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[15],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[16],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[17],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[18],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[19],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[20],
                'postId': postsIds[3]
            },
            {
                'tagId': tagIds[21],
                'postId': postsIds[3]
            }
        ]
    }
];