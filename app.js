document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const grid = document.getElementById('media-grid');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('modal');
    const genreTitle = document.getElementById('section-header');
    const genreBar = document.getElementById('genre-bar');
    const themeToggle = document.getElementById('theme-toggle');
    const navSearchToggle = document.getElementById('nav-search-toggle');
    const navbar = document.querySelector('.navbar');

    let database = [];

 const localGameDatabase = [
    {
        id: 1,
        titulo: "Grand Theft Auto V",
        descricao: "Um jovem traficante, um ladrão de bancos aposentado e um psicopata aterrorizante precisam realizar uma série de roubos ousados.",
        imagem: "https://www.pinterest.com/ideas/grand-theft-auto-5-wallpapers/954376029473/",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Violência, Drogas" },
        trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
        linkLoja: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V_Legacy/"
    },
    {
        id: 2,
        titulo: "The Witcher 3: Wild Hunt",
        descricao: "Você é Geralt de Rívia, mercenário caçador de monstros. Seu objetivo é encontrar a Criança da Profecia num vasto mundo aberto.",
        imagem: "https://imgs.search.brave.com/nVMUSmgRbyGQcmhuFQw2bMK5dHSOvHmcN_SANe1A-6U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MTIvMDgvd2l0Y2hl/cjMtMTYzODk4NzY1/OTY3OS5qcGc_Y3Jv/cD0xOjEsc21hcnQm/Zm9ybWF0PWpwZyZh/dXRvPXdlYnAmcXVh/bGl0eT04MA",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "16", descricao: "Violência, Nudez" },
        trailer: "https://www.youtube.com/embed/XHrskkHf958",
        linkLoja: "https://store.steampowered.com/app/292030/"
    },
    {
        id: 3,
        titulo: "Red Dead Redemption 2",
        descricao: "Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais em seus calcanhares, a gangue deve roubar para sobreviver.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/eaW0tYpxyp0",
        linkLoja: "https://store.steampowered.com/app/1174180/"
    },
    {
        id: 4,
        titulo: "Minecraft",
        descricao: "Prepare-se para uma aventura de possibilidades ilimitadas enquanto você constrói, minera, combate mobs e explora a paisagem.",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png",
        genero: "Sobrevivência",
        plataformas: ["PC", "Mobile", "Consoles"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
        linkLoja: "https://www.minecraft.net/"
    },
    {
        id: 5,
        titulo: "God of War (2018)",
        descricao: "Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/K0u_kAWLJOA",
        linkLoja: "https://store.steampowered.com/app/1593500/"
    },
    {
        id: 6,
        titulo: "Elden Ring",
        descricao: "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
        linkLoja: "https://store.steampowered.com/app/1245620/"
    },
    {
        id: 7,
        titulo: "The Last of Us Part I",
        descricao: "Em uma civilização devastada, Joel é contratado para contrabandear Ellie, uma jovem de 14 anos, para fora de uma zona de quarentena militar.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS5"],
        classificacao: { sigla: "18", descricao: "Violência, Terror" },
        trailer: "https://www.youtube.com/embed/R2ENcFR9uxY",
        linkLoja: "https://store.steampowered.com/app/1888930/"
    },
    {
        id: 8,
        titulo: "Baldur's Gate 3",
        descricao: "Reúna seu grupo e volte aos Reinos Esquecidos em uma história de amizade, traição, sacrifício e sobrevivência, e o fascínio do poder absoluto.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Nudez, Violência" },
        trailer: "https://www.youtube.com/embed/OcP0WdH7rTs",
        linkLoja: "https://store.steampowered.com/app/1086940/"
    },
    {
        id: 9,
        titulo: "Horizon Zero Dawn",
        descricao: "Assuma o papel de Aloy, uma caçadora habilidosa, e explore um mundo vibrante e exuberante habitado por misteriosas criaturas mecanizadas.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/u4-FCsiF5x4",
        linkLoja: "https://store.steampowered.com/app/1151640/"
    },
    {
        id: 10,
        titulo: "Cyberpunk 2077",
        descricao: "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto que se passa em Night City, uma megalópole obcecada por poder, glamour e biomodificações.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Nudez, Violência" },
        trailer: "https://www.youtube.com/embed/UnA7tepsc7s",
        linkLoja: "https://store.steampowered.com/app/1091500/"
    },
    {
        id: 11,
        titulo: "Marvel's Spider-Man Remastered",
        descricao: "Jogue como um Peter Parker experiente, lutando contra o crime e vilões icônicos na Nova York da Marvel.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS5"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/Wj8069oXq8M",
        linkLoja: "https://store.steampowered.com/app/1817070/"
    },
    {
        id: 12,
        titulo: "Hades",
        descricao: "Desafie o deus dos mortos enquanto você batalha para sair do Submundo neste roguelike dungeon crawler.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/91t0ha9x0AE",
        linkLoja: "https://store.steampowered.com/app/1145360/"
    },
    {
        id: 13,
        titulo: "Hollow Knight",
        descricao: "Forje seu próprio caminho em Hollow Knight! Uma aventura de ação épica através de um vasto reino arruinado de insetos e heróis.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/UAO2urG23S4",
        linkLoja: "https://store.steampowered.com/app/367520/"
    },
    {
        id: 14,
        titulo: "Stardew Valley",
        descricao: "Você herdou a antiga fazenda do seu avô em Stardew Valley. Armado com ferramentas de segunda mão e algumas moedas, comece sua nova vida.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
        genero: "Simulação",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/ot7uXNQskhs",
        linkLoja: "https://store.steampowered.com/app/413150/"
    },
    {
        id: 15,
        titulo: "Among Us",
        descricao: "Um jogo de festa de trabalho em equipe e traição. Jogue online com 4-15 jogadores enquanto tenta manter sua nave espacial unida.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
        genero: "Casual",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/NSJ4cESNQfE",
        linkLoja: "https://store.steampowered.com/app/945360/"
    },
    {
        id: 16,
        titulo: "Counter-Strike 2",
        descricao: "Há mais de duas décadas, o CS oferece uma experiência competitiva de elite. Agora, o próximo capítulo começa com o CS2.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
        genero: "Shooter",
        plataformas: ["PC"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/nSE38IP_DZE",
        linkLoja: "https://store.steampowered.com/app/730/"
    },
    {
        id: 17,
        titulo: "Valorant",
        descricao: "Misture o seu estilo e experiência em um cenário global e competitivo. Você tem 13 rodadas para atacar e defender com disparos certeiros.",
        imagem: "https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg",
        genero: "Shooter",
        plataformas: ["PC"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/e_E9W2vsRbQ",
        linkLoja: "https://playvalorant.com/"
    },
    {
        id: 18,
        titulo: "League of Legends",
        descricao: "Um jogo de estratégia em equipe onde duas equipes de cinco poderosos campeões se enfrentam para destruir a base uma da outra.",
        imagem: "https://assets.gamearena.gg/wp-content/uploads/2021/10/30015622/LoL-A-historia-do-League-of-Legends-um-dos-jogos-mais-jogados-do-mundo.png",
        genero: "MOBA",
        plataformas: ["PC"],
        classificacao: { sigla: "12", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/mDYqT0_9VR4",
        linkLoja: "https://www.leagueoflegends.com/"
    },
    {
        id: 19,
        titulo: "Dota 2",
        descricao: "Diariamente, milhões de jogadores entram na batalha como um dos mais de cem heróis do Dota. E não há duas partidas iguais.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
        genero: "MOBA",
        plataformas: ["PC"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/-cSFPIwMEq4",
        linkLoja: "https://store.steampowered.com/app/570/"
    },
    {
        id: 20,
        titulo: "Fortnite",
        descricao: "Seja o último jogador de pé no Battle Royale e Construção Zero, explore e sobreviva em LEGO Fortnite, ou corra até a linha de chegada.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZB3s5m4nVgn1usBlM2cOFNEe_SMFbDnl--A&s",
        genero: "Battle Royale",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/WJ1gK2e39Qk",
        linkLoja: "https://www.fortnite.com/"
    },
    {
        id: 21,
        titulo: "Apex Legends",
        descricao: "Domine com personalidade em Apex Legends, um jogo de tiro Battle Royale grátis onde personagens lendários lutam por glória.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
        genero: "Battle Royale",
        plataformas: ["PC", "Consoles", "Switch"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/oQtHENM_GZU",
        linkLoja: "https://store.steampowered.com/app/1172470/"
    },
    {
        id: 22,
        titulo: "Overwatch 2",
        descricao: "Overwatch 2 é um jogo de ação baseado em equipes gratuito e sempre ativo, ambientado em um futuro otimista.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2357570/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/dZl1yUU_HVk",
        linkLoja: "https://store.steampowered.com/app/2357570/"
    },
    {
        id: 23,
        titulo: "Rocket League",
        descricao: "Rocket League é um híbrido poderoso de futebol estilo arcade e caos veicular com controles fáceis de entender e competição fluida.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg",
        genero: "Esporte",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/SgSX3gOrj60",
        linkLoja: "https://store.steampowered.com/app/252950/"
    },
    {
        id: 24,
        titulo: "Call of Duty: Modern Warfare III",
        descricao: "Na sequência direta do recordista Modern Warfare II, o Capitão Price e a Força-Tarefa 141 enfrentam a ameaça final.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2519060/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/mHDEDDrGYvo",
        linkLoja: "https://store.steampowered.com/app/2519060/"
    },
    {
        id: 25,
        titulo: "EA SPORTS FC 24",
        descricao: "EA SPORTS FC 24 marca o início do futuro do futebol. Construído sobre inovação e autenticidade, sinta-se mais próximo do jogo.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg",
        genero: "Esporte",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/XhP3Xh4LMA8",
        linkLoja: "https://store.steampowered.com/app/2195250/"
    },
    {
        id: 26,
        titulo: "NBA 2K24",
        descricao: "Reúna seu esquadrão e experimente o passado, o presente e o futuro da cultura do basquete no NBA 2K24.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg",
        genero: "Esporte",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/O_WwD5qX4oI",
        linkLoja: "https://store.steampowered.com/app/2338770/"
    },
    {
        id: 27,
        titulo: "Genshin Impact",
        descricao: "Embarque em uma jornada por Teyvat para encontrar seu irmão perdido e desvendar os segredos dos sete deuses.",
        imagem: "https://imgs.search.brave.com/3i5u0nI4itz2vVpfkS92bWkSEyp7yyIa7eM4-84NxdU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4x/LmVwaWNnYW1lcy5j/b20vc2FsZXNFdmVu/dC9zYWxlc0V2ZW50/L0VHU19HZW5zaGlu/SW1wYWN0X21pSG9Z/b0xpbWl0ZWRfUzFf/MjU2MHgxNDQwLTkx/YzZjZDczMTJjYzI2/NDdjM2ViY2NjYTEw/ZjMwMzk5P3Jlc2l6/ZT0xJnc9NDgwJmg9/MjcwJnF1YWxpdHk9/bWVkaXVt",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Mobile"],
        classificacao: { sigla: "12", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/TAlKhARUcoY",
        linkLoja: "https://genshin.hoyoverse.com/"
    },
    {
        id: 28,
        titulo: "Roblox",
        descricao: "Roblox é o universo virtual definitivo que permite que você jogue, crie e seja qualquer coisa que possa imaginar.",
        imagem: "https://wallpapers.com/roblox-pictures",
        genero: "Sandbox",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/eAvXhNlO-6U",
        linkLoja: "https://www.roblox.com/"
    },
    {
        id: 29,
        titulo: "The Legend of Zelda: Breath of the Wild",
        descricao: "Entre em um mundo de descoberta, exploração e aventura em The Legend of Zelda: Breath of the Wild.",
        imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        genero: "Aventura",
        plataformas: ["Switch", "Wii U"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/zw47_q9wbBE",
        linkLoja: "https://www.nintendo.com/"
    },
    {
        id: 30,
        titulo: "The Legend of Zelda: Tears of the Kingdom",
        descricao: "Nesta sequência de Breath of the Wild, o cenário da aventura de Link foi expandido para incluir os céus e as profundezas de Hyrule.",
        imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-tears-of-the-kingdom-switch/hero.jpg",
        genero: "Aventura",
        plataformas: ["Switch"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/uHGShqcAHlQ",
        linkLoja: "https://www.nintendo.com/"
    },
    {
        id: 31,
        titulo: "Super Mario Odyssey",
        descricao: "Junte-se a Mario em uma enorme aventura 3D global e use suas incríveis novas habilidades para coletar Luas.",
        imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero",
        genero: "Plataforma",
        plataformas: ["Switch"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/wGQHQc_3ycE",
        linkLoja: "https://www.nintendo.com/"
    },
    {
        id: 32,
        titulo: "Mario Kart 8 Deluxe",
        descricao: "Corra e lute contra seus amigos na versão definitiva de Mario Kart 8.",
        imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
        genero: "Corrida",
        plataformas: ["Switch"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/tKlRN2YpxRE",
        linkLoja: "https://www.nintendo.com/"
    },
    {
        id: 33,
        titulo: "Super Smash Bros. Ultimate",
        descricao: "Mundos de jogos e lutadores colidem no confronto final - uma nova entrada na série Super Smash Bros. para o sistema Nintendo Switch!",
        imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/hero",
        genero: "Luta",
        plataformas: ["Switch"],
        classificacao: { sigla: "10", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/L93H7e66f24",
        linkLoja: "https://www.nintendo.com/"
    },
    {
        id: 34,
        titulo: "Animal Crossing: New Horizons",
        descricao: "Viva uma vida despreocupada em uma ilha deserta e crie seu próprio paraíso enquanto explora, cria e personaliza.",
        imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero",
        genero: "Simulação",
        plataformas: ["Switch"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/_3YNL0OWio0",
        linkLoja: "https://www.nintendo.com/"
    },
    {
        id: 35,
        titulo: "Ghost of Tsushima Director's Cut",
        descricao: "No final do século XIII, o império mongol devastou nações. Jin Sakai deve deixar de lado as tradições para forjar um novo caminho.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/Vt-8HmD-a8c",
        linkLoja: "https://store.steampowered.com/app/2215430/"
    },
    {
        id: 36,
        titulo: "Bloodborne",
        descricao: "Cace seus pesadelos. Um viajante solitário. Uma cidade amaldiçoada. Um mistério mortal que consome tudo o que toca. Enfrente seus medos ao entrar na cidade em decomposição de Yharnam.",
        imagem: "https://imgs.search.brave.com/3H4fk6pvkDxG-h9ZHhC3UR8rcSl8dAugohxMs4J_X4w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzUwMTU5NDI3L3Iv/aWwvMzQ1MmJjLzU3/NDkyNTIwMzQvaWxf/MzAweDMwMC41NzQ5/MjUyMDM0XzRmcmwu/anBn",
        genero: "RPG",
        plataformas: ["PS4"],
        classificacao: { sigla: "16", descricao: "Violência, Sangue" },
        trailer: "https://www.youtube.com/embed/G203e1HhixY",
        linkLoja: "https://www.playstation.com/"
    },
    {
        id: 37,
        titulo: "Uncharted 4: A Thief's End",
        descricao: "Vários anos após sua última aventura, o caçador de fortunas aposentado Nathan Drake é forçado a voltar ao mundo dos ladrões.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1659420/header.jpg",
        genero: "Aventura",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/hh5HV4iic1Y",
        linkLoja: "https://store.steampowered.com/app/1659420/"
    },
    {
        id: 38,
        titulo: "The Last of Us Part II",
        descricao: "Cinco anos após sua perigosa jornada, Ellie e Joel se estabeleceram em Jackson. Um evento violento perturba a paz.",
        imagem: "https://imgs.search.brave.com/pYG9vleOXmNod9bYaIfuMy29lg8vvxBNw-kDAhN590g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9hLzQv/My85MDktMjA0OHgx/MTUyLWRlc2t0b3At/aGQtdGhlLWxhc3Qt/b2YtdXMtZ2FtZS1i/YWNrZ3JvdW5kLmpw/Zw",
        genero: "Ação",
        plataformas: ["PS4", "PS5"],
        classificacao: { sigla: "18", descricao: "Violência Extrema, Nudez" },
        trailer: "https://www.youtube.com/embed/qPNiIeKMHyg",
        linkLoja: "https://www.playstation.com/"
    },
    {
        id: 39,
        titulo: "Horizon Forbidden West",
        descricao: "Junte-se a Aloy enquanto ela enfrenta o Oeste Proibido, uma fronteira majestosa, mas perigosa, que esconde novas ameaças misteriosas.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2420110/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/Lq594XmpPBg",
        linkLoja: "https://store.steampowered.com/app/2420110/"
    },
    {
        id: 40,
        titulo: "Marvel's Spider-Man: Miles Morales",
        descricao: "O adolescente Miles Morales está se ajustando à sua nova casa enquanto segue os passos de seu mentor, Peter Parker, como um novo Homem-Aranha.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1817190/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/NTunTURbyUU",
        linkLoja: "https://store.steampowered.com/app/1817190/"
    },
    {
        id: 41,
        titulo: "The Elder Scrolls V: Skyrim Special Edition",
        descricao: "Vencedor de mais de 200 prêmios de Jogo do Ano, Skyrim Special Edition traz a fantasia épica à vida com detalhes impressionantes.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "18", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/JSRtYpNRoN0",
        linkLoja: "https://store.steampowered.com/app/489830/"
    },
    {
        id: 42,
        titulo: "Fallout 4",
        descricao: "Como único sobrevivente do Refúgio 111, você entra em um mundo destruído pela guerra nuclear. Cada segundo é uma luta pela sobrevivência.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/X5aJfebzkrM",
        linkLoja: "https://store.steampowered.com/app/377160/"
    },
    {
        id: 43,
        titulo: "Dark Souls III",
        descricao: "Enquanto o fogo se apaga e o mundo cai em ruínas, aventure-se em um universo repleto de inimigos colossais e ambientes visualmente fascinantes.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "16", descricao: "Violência, Sangue" },
        trailer: "https://www.youtube.com/embed/_zDZYrIUgKE",
        linkLoja: "https://store.steampowered.com/app/374320/"
    },
    {
        id: 44,
        titulo: "Sekiro: Shadows Die Twice",
        descricao: "Você é o 'lobo de um braço só', um guerreiro desfigurado e desgraçado resgatado da beira da morte. Proteja um jovem lorde descendente de uma antiga linhagem.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/4OgoTZFt5x8",
        linkLoja: "https://store.steampowered.com/app/814380/"
    },
    {
        id: 45,
        titulo: "BioShock Infinite",
        descricao: "O endividado Booker DeWitt deve viajar para a cidade voadora de Columbia para resgatar uma misteriosa garota chamada Elizabeth.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/8870/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "PS3", "Xbox 360", "Switch"],
        classificacao: { sigla: "18", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/31-NAkq8YEY",
        linkLoja: "https://store.steampowered.com/app/8870/"
    },
    {
        id: 46,
        titulo: "Mass Effect Legendary Edition",
        descricao: "Uma pessoa é tudo o que impede a humanidade da maior ameaça que já enfrentou. Reviva a lenda do Comandante Shepard na aclamada trilogia.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1328670/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "14", descricao: "Violência, Conteúdo Sexual" },
        trailer: "https://www.youtube.com/embed/n8i53TtQ6IQ",
        linkLoja: "https://store.steampowered.com/app/1328670/"
    },
    {
        id: 47,
        titulo: "Terraria",
        descricao: "Cave, lute, explore, construa! Nada é impossível neste jogo de aventura cheio de ação. O mundo é sua tela e o solo é sua tinta.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Mobile", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/w7uOhFTrrq0",
        linkLoja: "https://store.steampowered.com/app/105600/"
    },
    {
        id: 48,
        titulo: "Rust",
        descricao: "O único objetivo em Rust é sobreviver. Para fazer isso, você precisará superar lutas como fome, sede e frio. Acenda uma fogueira. Construa um abrigo. Mate animais.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
        genero: "Sobrevivência",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "18", descricao: "Violência, Nudez" },
        trailer: "https://www.youtube.com/embed/LGcECozNXEw",
        linkLoja: "https://store.steampowered.com/app/252490/"
    },
    {
        id: 49,
        titulo: "Monster Hunter: World",
        descricao: "Bem-vindo a um novo mundo! Assuma o papel de um caçador e mate monstros ferozes em um ecossistema vivo e vibrante.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/Ro6r15wzp2o",
        linkLoja: "https://store.steampowered.com/app/582010/"
    },
    {
        id: 50,
        titulo: "Persona 5 Royal",
        descricao: "Coloque a máscara do Joker e junte-se aos Phantom Thieves of Hearts. Liberte-se das correntes da sociedade moderna e realize grandes assaltos.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1687950/header.jpg",
        genero: "JRPG",
        plataformas: ["PC", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "16", descricao: "Violência, Linguagem Imprópria" },
        trailer: "https://www.youtube.com/embed/QnDsNoUdT58",
        linkLoja: "https://store.steampowered.com/app/1687950/"
    },
    {
        id: 51,
        titulo: "Final Fantasy VII Remake",
        descricao: "O mundo caiu sob o controle da Shinra Electric Power Company. Cloud Strife, um ex-membro da unidade de elite da Shinra, torna-se mercenário.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1462040/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/ERGrFOVyUms",
        linkLoja: "https://store.steampowered.com/app/1462040/"
    },
    {
        id: 52,
        titulo: "NieR: Automata",
        descricao: "NieR: Automata conta a história dos andróides 2B, 9S e A2 e sua batalha para recuperar a distopia dirigida por máquinas invadida por máquinas poderosas.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/524220/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "Xbox One", "Switch"],
        classificacao: { sigla: "18", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/wSxsoE5R2y8",
        linkLoja: "https://store.steampowered.com/app/524220/"
    },
    {
        id: 53,
        titulo: "Devil May Cry 5",
        descricao: "O caçador de demônios supremo está de volta com estilo, no jogo que os fãs de ação estavam esperando.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/KkpmX4q5cI8",
        linkLoja: "https://store.steampowered.com/app/601150/"
    },
    {
        id: 54,
        titulo: "Resident Evil 4 Remake",
        descricao: "A sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy é enviado para resgatar a filha do presidente.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
        genero: "Terror",
        plataformas: ["PC", "PS4", "PS5", "Xbox Series"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/C_u0D1c7eZI",
        linkLoja: "https://store.steampowered.com/app/2050650/"
    },
    {
        id: 55,
        titulo: "Dead Space Remake",
        descricao: "O clássico de terror de sobrevivência de ficção científica retorna, totalmente reconstruído para oferecer uma experiência mais profunda e imersiva.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/header.jpg",
        genero: "Terror",
        plataformas: ["PC", "PS5", "Xbox Series"],
        classificacao: { sigla: "18", descricao: "Violência Extrema, Gore" },
        trailer: "https://www.youtube.com/embed/7r7cK4oOwbY",
        linkLoja: "https://store.steampowered.com/app/1693980/"
    },
    {
        id: 56,
        titulo: "Street Fighter 6",
        descricao: "Aí vem o mais novo desafiante da Capcom! Street Fighter 6 abrange três modos de jogo distintos: World Tour, Fighting Ground e Battle Hub.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg",
        genero: "Luta",
        plataformas: ["PC", "PS4", "PS5", "Xbox Series"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/2e3ozN_c9Nw",
        linkLoja: "https://store.steampowered.com/app/1364780/"
    },
    {
        id: 57,
        titulo: "Tekken 8",
        descricao: "O punho encontra o destino. A série TEKKEN entra em uma nova era. A mais longa história de videogame continua.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg",
        genero: "Luta",
        plataformas: ["PC", "PS5", "Xbox Series"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/2hCs4-j0X2E",
        linkLoja: "https://store.steampowered.com/app/1778820/"
    },
    {
        id: 58,
        titulo: "Mortal Kombat 1",
        descricao: "Descubra um Universo Mortal Kombat renascido criado pelo Deus do Fogo Liu Kang. Mortal Kombat 1 inaugura uma nova era da franquia icônica.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg",
        genero: "Luta",
        plataformas: ["PC", "PS5", "Xbox Series", "Switch"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/C4D0sD9gQDY",
        linkLoja: "https://store.steampowered.com/app/1971870/"
    },
    {
        id: 59,
        titulo: "Civilization VI",
        descricao: "Civilization VI oferece novas maneiras de interagir com seu mundo, expandir seu império pelo mapa, avançar sua cultura e competir contra os maiores líderes da história.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg",
        genero: "Estratégia",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "10", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/5KdE0p2joJw",
        linkLoja: "https://store.steampowered.com/app/289070/"
    },
    {
        id: 60,
        titulo: "Cities: Skylines II",
        descricao: "Se você pode sonhar, você pode construir. Levante uma cidade do zero e transforme-a em uma metrópole próspera que só você pode imaginar.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg",
        genero: "Simulação",
        plataformas: ["PC", "PS5", "Xbox Series"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/Wd5U_r4PVko",
        linkLoja: "https://store.steampowered.com/app/949230/"
    },
    {
        id: 61,
        titulo: "Euro Truck Simulator 2",
        descricao: "Viaje pela Europa como rei da estrada, um caminhoneiro que entrega cargas importantes por distâncias impressionantes!",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/227300/header.jpg",
        genero: "Simulação",
        plataformas: ["PC"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/xlTuC18xVII",
        linkLoja: "https://store.steampowered.com/app/227300/"
    },
    {
        id: 62,
        titulo: "Celeste",
        descricao: "Ajude Madeline a sobreviver aos seus demônios internos em sua jornada até o topo da Montanha Celeste, neste jogo de plataforma super restrito e feito à mão.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/70d9irlxiB4",
        linkLoja: "https://store.steampowered.com/app/504230/"
    },
    {
        id: 63,
        titulo: "Dead Cells",
        descricao: "Dead Cells é um jogo de plataforma de ação rogue-lite, inspirado em metroidvania. Você explorará um castelo extenso e em constante mudança.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/gX4CGX9sM1M",
        linkLoja: "https://store.steampowered.com/app/588650/"
    },
    {
        id: 64,
        titulo: "Slay the Spire",
        descricao: "Nós fundimos jogos de cartas e roguelikes para criar o melhor construtor de baralhos para um jogador. Crie um baralho único e encontre criaturas bizarras.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
        genero: "Estratégia",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/S2oQy41b20U",
        linkLoja: "https://store.steampowered.com/app/646570/"
    },
    {
        id: 65,
        titulo: "Undertale",
        descricao: "O RPG onde ninguém precisa morrer. Explore o mundo subterrâneo cheio de monstros e faça amigos... ou destrua todos eles.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/1Hojv0m3TqA",
        linkLoja: "https://store.steampowered.com/app/391540/"
    },
    {
        id: 66,
        titulo: "Cuphead",
        descricao: "Cuphead é um jogo de ação clássico de correr e atirar focado fortemente em batalhas contra chefes. Inspirado em desenhos animados da década de 1930.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/NN-9SQXoi50",
        linkLoja: "https://store.steampowered.com/app/268910/"
    },
    {
        id: 67,
        titulo: "Ori and the Will of the Wisps",
        descricao: "Embarque em uma nova aventura em um mundo vasto e exótico onde você encontrará inimigos gigantescos e quebra-cabeças desafiadores em sua busca para desvendar o destino de Ori.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg",
        genero: "Plataforma",
        plataformas: ["PC", "Xbox", "Switch"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/2reK8k8nwBc",
        linkLoja: "https://store.steampowered.com/app/1057090/"
    },
    {
        id: 68,
        titulo: "Outer Wilds",
        descricao: "Outer Wilds é um mistério de mundo aberto sobre um sistema solar preso em um loop temporal infinito. Você é o mais novo recruta da Outer Wilds Ventures.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg",
        genero: "Aventura",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/d6LGN4oy9DA",
        linkLoja: "https://store.steampowered.com/app/753640/"
    },
    {
        id: 69,
        titulo: "Dave the Diver",
        descricao: "DAVE THE DIVER é um RPG de aventura casual para um jogador com exploração em alto mar e pesca durante o dia e gerenciamento de restaurante de sushi à noite.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1868140/header.jpg",
        genero: "Indie",
        plataformas: ["PC", "Switch"],
        classificacao: { sigla: "10", descricao: "Humor" },
        trailer: "https://www.youtube.com/embed/7M013v3vFGs",
        linkLoja: "https://store.steampowered.com/app/1868140/"
    },
    {
        id: 70,
        titulo: "Sea of Thieves",
        descricao: "Sea of Thieves oferece a experiência pirata essencial, da navegação e luta à exploração e pilhagem - tudo o que você precisa para viver a vida pirata.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg",
        genero: "Aventura",
        plataformas: ["PC", "Xbox", "PS5"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/r5wcFQPhzKs",
        linkLoja: "https://store.steampowered.com/app/1172620/"
    },
    {
        id: 71,
        titulo: "No Man's Sky",
        descricao: "No Man's Sky é um jogo sobre exploração e sobrevivência em um universo infinito gerado processualmente.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
        genero: "Aventura",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/nLtmEjqzg7M",
        linkLoja: "https://store.steampowered.com/app/275850/"
    },
    {
        id: 72,
        titulo: "Destiny 2",
        descricao: "Mergulhe no mundo de Destiny 2 para explorar os mistérios do sistema solar e experimentar o combate de tiro em primeira pessoa responsivo.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/hdWkpbPTpmE",
        linkLoja: "https://store.steampowered.com/app/1085660/"
    },
    {
        id: 73,
        titulo: "Warframe",
        descricao: "Acorde como um guerreiro imparável e lute ao lado de seus amigos neste jogo de ação online gratuito e baseado em histórias.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/QZg5r5rXG4w",
        linkLoja: "https://store.steampowered.com/app/230410/"
    },
    {
        id: 74,
        titulo: "PUBG: BATTLEGROUNDS",
        descricao: "Pouse em locais estratégicos, saqueie armas e suprimentos e sobreviva para se tornar a última equipe de pé.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Consoles", "Mobile"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/4rG9noTfb4A",
        linkLoja: "https://store.steampowered.com/app/578080/"
    },
    {
        id: 75,
        titulo: "Tom Clancy's Rainbow Six Siege",
        descricao: "Domine a arte da destruição e dos gadgets em Tom Clancy's Rainbow Six Siege. Enfrente intensos combates corpo a corpo.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/6wlvYh0h63k",
        linkLoja: "https://store.steampowered.com/app/359550/"
    },
    {
        id: 76,
        titulo: "Diablo IV",
        descricao: "Descubra o inferno como nunca antes. Diablo IV é a experiência de RPG de ação definitiva com males intermináveis para massacrar.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2344520/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Violência Extrema, Sangue" },
        trailer: "https://www.youtube.com/embed/Ro26g20_o0Q",
        linkLoja: "https://store.steampowered.com/app/2344520/"
    },
    {
        id: 77,
        titulo: "Starfield",
        descricao: "Starfield é o primeiro novo universo em mais de 25 anos da Bethesda Game Studios, os criadores de The Elder Scrolls V: Skyrim e Fallout 4.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "Xbox Series"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/uG8tgS4g-2c",
        linkLoja: "https://store.steampowered.com/app/1716740/"
    },
    {
        id: 78,
        titulo: "Hogwarts Legacy",
        descricao: "Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado no mundo introduzido pela primeira vez nos livros de Harry Potter.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "12", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/D2hQ_2S6yWM",
        linkLoja: "https://store.steampowered.com/app/990080/"
    },
    {
        id: 79,
        titulo: "Baldur's Gate II: Enhanced Edition",
        descricao: "Embarque em uma jornada épica através de um mundo de intriga, aventura e combate perigoso. Baldur's Gate II: Enhanced Edition inclui a campanha original Shadows of Amn.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/257350/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "Mobile"],
        classificacao: { sigla: "14", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/2-z2_B_x0J4",
        linkLoja: "https://store.steampowered.com/app/257350/"
    },
    {
        id: 80,
        titulo: "Disco Elysium - The Final Cut",
        descricao: "Disco Elysium - The Final Cut é um RPG inovador de mundo aberto. Você é um detetive com um sistema de habilidades único à sua disposição e uma cidade inteira para abrir seu caminho.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "18", descricao: "Drogas, Linguagem Imprópria" },
        trailer: "https://www.youtube.com/embed/JqC_b1jC088",
        linkLoja: "https://store.steampowered.com/app/632470/"
    },
    {
        id: 81,
        titulo: "Divinity: Original Sin II - Definitive Edition",
        descricao: "Divinity: Original Sin 2 é um RPG de fantasia com combate tático baseado em turnos, um grupo de quatro jogadores e uma história profunda e ramificada.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS4", "Xbox One", "Switch"],
        classificacao: { sigla: "16", descricao: "Violência, Nudez Parcial" },
        trailer: "https://www.youtube.com/embed/BaD7F_y_f5Q",
        linkLoja: "https://store.steampowered.com/app/435150/"
    },
    {
        id: 82,
        titulo: "Pillars of Eternity II: Deadfire",
        descricao: "Persiga um deus desonesto por terra e mar no RPG de fantasia aclamado pela crítica, Pillars of Eternity II: Deadfire.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/560130/header.jpg",
        genero: "RPG",
        plataformas: ["PC"],
        classificacao: { sigla: "16", descricao: "Violência, Linguagem Imprópria" },
        trailer: "https://www.youtube.com/embed/LqJ-L2-3Z0Q",
        linkLoja: "https://store.steampowered.com/app/560130/"
    },
    {
        id: 83,
        titulo: "Pathfinder: Wrath of the Righteous",
        descricao: "Lidere sua cruzada contra os demônios em um novo RPG épico dos criadores de Pathfinder: Kingmaker.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1184370/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "Consoles"],
        classificacao: { sigla: "16", descricao: "Violência, Sangue" },
        trailer: "https://www.youtube.com/embed/zQv_eK4y_3Q",
        linkLoja: "https://store.steampowered.com/app/1184370/"
    },
    {
        id: 84,
        titulo: "Cyberpunk 2077: Phantom Liberty",
        descricao: "Phantom Liberty é uma nova aventura de suspense e espionagem para Cyberpunk 2077. Torne-se um agente secreto do governo para sabotar uma rede de espionagem.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2135000/header.jpg",
        genero: "RPG",
        plataformas: ["PC", "PS5", "Xbox Series"],
        classificacao: { sigla: "18", descricao: "Nudez, Violência Extrema" },
        trailer: "https://www.youtube.com/embed/L1_g5D_Jt-s",
        linkLoja: "https://store.steampowered.com/app/2135000/"
    },
    {
        id: 85,
        titulo: "The Witcher 3: Wild Hunt - Complete Edition",
        descricao: "A Edição Completa contém o jogo base, oferecendo uma enorme aventura de mundo aberto com mais de 100 horas de duração, bem como suas duas expansões massivas de história: Hearts of Stone & Blood and Wine, que valem 50 horas extras de jogo!",
        imagem: "https://imgs.search.brave.com/3LMg-yb-Ki1R9nGDdtOkjUz6CnoFEVlTBHxtSBf2g3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL3Ro/dW1icy9pbWFnZXMv/Zy9RQVFBQU9Td01J/cG5XVGNWL3MtbDQw/MC53ZWJw",
        genero: "RPG",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "16", descricao: "Violência, Nudez" },
        trailer: "https://www.youtube.com/embed/XHrskkHf958",
        linkLoja: "https://store.steampowered.com/bundle/726/The_Witcher_3_Wild_Hunt__Complete_Edition/"
    },
    {
        id: 86,
        titulo: "Red Dead Redemption 2 - Ultimate Edition",
        descricao: "A Ultimate Edition oferece todo o conteúdo do Modo História da Edição Especial, além de bônus adicionais para o Red Dead Online.",
        imagem: "https://imgs.search.brave.com/PMTMyMpdLHUxqL54tFiAjlHIUHDFFkgZofIt82ysS0g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFadXB6cDN5ZUwu/anBn",
        genero: "Ação",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/eaW0tYpxyp0",
        linkLoja: "https://store.steampowered.com/bundle/13029/Red_Dead_Redemption_2_Ultimate_Edition/"
    },
    {
        id: 87,
        titulo: "Grand Theft Auto V: Premium Edition",
        descricao: "A Premium Edition inclui a experiência completa da história do Grand Theft Auto V, acesso gratuito ao Grand Theft Auto Online e todas as atualizações de jogabilidade existentes.",
        imagem: "https://imgs.search.brave.com/rEstMgtfPKZezCerRvxSeOXpf59QuI1MElcRowANQWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAva2Vp/dXh6azAvY29kZS1p/bi10aGUtYm94LWdh/bWUvcS9yL2ovcGMt/Z3JhbmQtdGhlZnQt/YXV0by12LXByZW1p/dW0tZWRpdGlvbi1w/Yy1yb2Nrc3Rhci1k/b3dubG9hZC1jb2Rl/LW9yaWdpbmFsLWlt/YWZ2NjI2bmFyeWVq/YmUuanBlZz9xPTkw",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Violência, Drogas" },
        trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
        linkLoja: "https://store.steampowered.com/bundle/5699/Grand_Theft_Auto_V_Premium_Edition/"
    },
    {
        id: 88,
        titulo: "Assassin's Creed Valhalla",
        descricao: "Torne-se Eivor, um lendário invasor Viking em busca de glória. Explore um mundo aberto dinâmico e bonito ambientado na brutal Idade das Trevas da Inglaterra.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/K2z_J4_t_20",
        linkLoja: "https://store.steampowered.com/app/2208920/"
    },
    {
        id: 89,
        titulo: "Assassin's Creed Mirage",
        descricao: "Experimente a história de Basim, um ladrão de rua astuto que busca respostas e justiça nas ruas movimentadas de Bagdá do século IX.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2240130/header.jpg",
        genero: "Ação",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "16", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/x5pk2YV-j2Y",
        linkLoja: "https://store.steampowered.com/app/2240130/"
    },
    {
        id: 90,
        titulo: "Far Cry 6",
        descricao: "Bem-vindo a Yara, um paraíso tropical congelado no tempo. Como Dani Rojas, junte-se à revolução guerrilheira para libertar Yara.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1332100/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/JtK_g0_20jY",
        linkLoja: "https://store.steampowered.com/app/1332100/"
    },
    {
        id: 91,
        titulo: "Forza Horizon 5",
        descricao: "Sua derradeira aventura Horizon o aguarda! Explore as paisagens vibrantes e em constante evolução do México de mundo aberto.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "Xbox One", "Xbox Series"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/fTT_A0-00r0",
        linkLoja: "https://store.steampowered.com/app/1551360/"
    },
    {
        id: 92,
        titulo: "Gran Turismo 7",
        descricao: "Gran Turismo 7 traz para você os melhores recursos da história da franquia. Com mais de 400 carros e 90 pistas.",
        imagem: "https://imgs.search.brave.com/YwC3SxrMYwDoUIzXIL7iXYnz5fv6c8QTYelxMpOs87I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xNC9HcmFuX1R1/cmlzbW9fN19jb3Zl/cl9hcnQuanBnLzI1/MHB4LUdyYW5fVHVy/aXNtb183X2NvdmVy/X2FydC5qcGc",
        genero: "Corrida",
        plataformas: ["PS4", "PS5"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/1tBfx_y_Q_0",
        linkLoja: "https://www.playstation.com/pt-br/games/gran-turismo-7/"
    },
    {
        id: 93,
        titulo: "Need for Speed Unbound",
        descricao: "Corra contra o tempo, supere os policiais e enfrente as eliminatórias semanais para chegar ao The Grand, o maior desafio de corrida de rua de Lakeshore.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1846380/header.jpg",
        genero: "Corrida",
        plataformas: ["PC","PS5", "Xbox Series"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/D9_xQzV12_U",
        linkLoja: "https://store.steampowered.com/app/1846380/"
    },
    {
        id: 94,
        titulo: "F1 23",
        descricao: "Entre no grid para uma nova temporada de F1. O F1 23 apresenta todos os carros, equipes e pilotos oficiais do Campeonato Mundial de Fórmula 1 da FIA de 2023.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/2108330/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/8e-FpWapZ2k",
        linkLoja: "https://store.steampowered.com/app/2108330/"
    },
    {
        id: 95,
        titulo: "Dirt Rally 2.0",
        descricao: "Dirt Rally 2.0 ousa você a abrir caminho através de uma seleção de locais de rali icônicos de todo o mundo, nos veículos off-road mais poderosos já feitos.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/690790/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/g2o542yqI-w",
        linkLoja: "https://store.steampowered.com/app/690790/"
    },
    {
        id: 96,
        titulo: "Need for Speed Heat",
        descricao: "Domine a cidade à noite e arrisque tudo no Need for Speed Heat, um jogo de corrida de rua vibrante e perigoso.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/04KPiGmC7Lc",
        linkLoja: "https://store.steampowered.com/app/1222680/"
    },
    {
        id: 97,
        titulo: "Assetto Corsa Competizione",
        descricao: "Assetto Corsa Competizione é o novo jogo oficial do GT World Challenge. Graças à extraordinária qualidade de simulação, você experimentará a atmosfera real do campeonato GT3.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/805550/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/mr-pUSDpE74",
        linkLoja: "https://store.steampowered.com/app/805550/"
    },
    {
        id: 98,
        titulo: "Project CARS 3",
        descricao: "Sua jornada definitiva de motorista de carro de corrida! Project CARS 3 é a terceira parcela da franquia de corrida mais vendida que traz toda a emoção da corrida.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/958400/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/BG3g-s_55sU",
        linkLoja: "https://store.steampowered.com/app/958400/"
    },
    {
        id: 99,
        titulo: "WRC Generations - FIA WRC Official Game",
        descricao: "O jogo de rali mais completo e realista já desenvolvido. Todos os carros, pilotos e etapas da temporada 2022 do WRC.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1953520/header.jpg",
        genero: "Corrida",
        plataformas: ["PC", "PS4", "PS5", "Xbox"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/M_2-A-31i-o",
        linkLoja: "https://store.steampowered.com/app/1953520/"
    },
    {
        id: 100,
        titulo: "SnowRunner",
        descricao: "Prepare-se para uma experiência off-road de próxima geração! Dirija veículos poderosos e supere ambientes abertos extremos.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1465360/header.jpg",
        genero: "Simulação",
        plataformas: ["PC", "PS4", "Xbox One", "Switch"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/J19ShG2a38U",
        linkLoja: "https://store.steampowered.com/app/1465360/"
    },
    {
        id: 101,
        titulo: "Portal 2",
        descricao: "O 'jogo cooperativo para duas pessoas' foi aclamado como um dos melhores jogos de todos os tempos. Enfrente um novo conjunto de quebra-cabeças inovadores.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg",
        genero: "Puzzle",
        plataformas: ["PC", "PS3", "Xbox 360"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/tax4e4hBBZc",
        linkLoja: "https://store.steampowered.com/app/620/Portal_2/"
    },
    {
        id: 102,
        titulo: "Left 4 Dead 2",
        descricao: "Este FPS de ação e terror cooperativo levará você e seus amigos através das cidades, pântanos e cemitérios do sul dos EUA, de Savannah a Nova Orleans.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg",
        genero: "Shooter",
        plataformas: ["PC", "Xbox 360"],
        classificacao: { sigla: "18", descricao: "Violência Extrema" },
        trailer: "https://www.youtube.com/embed/C4j9Q2dY3a4",
        linkLoja: "https://store.steampowered.com/app/550/Left_4_Dead_2/"
    },
    {
        id: 103,
        titulo: "The Sims 4",
        descricao: "Solte sua imaginação e crie um mundo único de Sims que é uma expressão de você! Explore e personalize todos os detalhes, de Sims a casas.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg",
        genero: "Simulação",
        plataformas: ["PC", "PS4", "Xbox One"],
        classificacao: { sigla: "12", descricao: "Temas Sugestivos" },
        trailer: "https://www.youtube.com/embed/z00mK3PXllI",
        linkLoja: "https://store.steampowered.com/app/1222670/The_Sims_4/"
    },
    {
        id: 104,
        titulo: "It Takes Two",
        descricao: "Embarque na jornada mais louca da sua vida em It Takes Two, uma aventura de plataforma que subverte o gênero, criada exclusivamente para o modo cooperativo.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg",
        genero: "Aventura",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "10", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/gaegOk77x8A",
        linkLoja: "https://store.steampowered.com/app/1426210/It_Takes_Two/"
    },
    {
        id: 105,
        titulo: "Valheim",
        descricao: "Um brutal jogo de exploração e sobrevivência para 1-10 jogadores, ambientado em um purgatório gerado processualmente e inspirado na cultura viking.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg",
        genero: "Sobrevivência",
        plataformas: ["PC", "Xbox"],
        classificacao: { sigla: "12", descricao: "Violência" },
        trailer: "https://www.youtube.com/embed/BSr2c_i-Y_c",
        linkLoja: "https://store.steampowered.com/app/892970/Valheim/"
    },
    {
        id: 106,
        titulo: "Phasmophobia",
        descricao: "Phasmophobia é um jogo de terror psicológico cooperativo online para 4 jogadores. A atividade paranormal está aumentando e cabe a você e sua equipe usar todo o equipamento de caça fantasma à sua disposição.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg",
        genero: "Terror",
        plataformas: ["PC"],
        classificacao: { sigla: "14", descricao: "Medo, Violência" },
        trailer: "https://www.youtube.com/embed/sN2-Ad_c6f0",
        linkLoja: "https://store.steampowered.com/app/739630/Phasmophobia/"
    },
    {
        id: 107,
        titulo: "Subnautica",
        descricao: "Desça às profundezas de um mundo subaquático alienígena cheio de maravilhas e perigos. Crie equipamentos, pilote submarinos e seja mais esperto que a vida selvagem.",
        imagem: "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
        genero: "Sobrevivência",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "10", descricao: "Violência Fantasiosa" },
        trailer: "https://www.youtube.com/embed/Rz2SNm8VguE",
        linkLoja: "https://store.steampowered.com/app/264710/Subnautica/"
    },
    {
        id: 108,
        titulo: "Fall Guys",
        descricao: "Fall Guys é um jogo de festa massivamente multiplayer, gratuito e multiplataforma, no qual você e seus colegas competidores competem em rodadas de caos absurdo em percursos de obstáculos.",
        imagem: "https://imgs.search.brave.com/vcT-GlbVXT0BfRSbLL4VFyUh68Yo_c2p7vjqM6wihVA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M3L2Nm/LzRmL2M3Y2Y0ZmM4/NWY2M2NlMTA5ZTg3/ZDk5MTY2MWIxM2Fk/LmpwZw",
        genero: "Battle Royale",
        plataformas: ["PC", "PS4", "PS5", "Xbox", "Switch"],
        classificacao: { sigla: "L", descricao: "Livre" },
        trailer: "https://www.youtube.com/embed/Wj3-jO-T-2I",
        linkLoja: "https://www.fallguys.com/"
    }
];
    // --- RENDERIZAÇÃO ---
    function renderCards(data) {
        if (!grid) return;
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = '<p style="color: #aaa; font-size: 1.2rem;">Nenhuma oferta encontrada para esta categoria.</p>';
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'media-card';
            card.addEventListener('click', () => openModal(item));

            card.innerHTML = `
                <img src="${item.imagem}" alt="Capa de ${item.titulo}" class="card-thumb">
                <div class="card-overlay">
                    <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">
                        <i data-lucide="play"></i> Ver Detalhes
                    </button>
                </div>
                <div class="card-info">
                    <h3 class="card-title">${item.titulo}</h3>
                    <div class="card-meta">
                        <span class="card-tag">${item.genero}</span>
                        <span class="card-rating rating-${item.classificacao.sigla}">${item.classificacao.sigla}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        lucide.createIcons();
    }

    function populateGenreFilter() {
        if (!genreBar) return;

        const allGenres = [...new Set(localGameDatabase.map(game => game.genero))].sort();
        const filterGenres = ['Todos', ...allGenres];

        genreBar.innerHTML = '';
        filterGenres.forEach(genre => {
            const btn = document.createElement('button');
            btn.className = 'genre-pill';
            btn.textContent = genre;
            
            if (genre === 'Todos') {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => filterByGenre(genre));
            genreBar.appendChild(btn);
        });
    }

    // --- FILTRAGEM E BUSCA ---
    async function filterByGenre(genre) {
        document.querySelectorAll('.genre-pill').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent === genre) {
                btn.classList.add('active');
            }
        });
        
        genreTitle.innerText = genre === 'Todos' ? 'Catálogo Completo' : `Gênero: ${genre}`;
        searchInput.value = '';

        const filteredGames = genre === 'Todos' 
            ? localGameDatabase 
            : localGameDatabase.filter(game => game.genero === genre);
        
        renderCards(filteredGames);

        if (window.scrollY > document.querySelector('.hero').offsetHeight) scrollToGrid();
    }

    async function handleSearch(e) {
        const term = e.target.value.trim().toLowerCase();

        if (!term) {
            filterByGenre('Todos');
            return;
        }

        const filteredData = localGameDatabase.filter(item => 
            item.titulo.toLowerCase().includes(term) || 
            item.genero.toLowerCase().includes(term)
        );
        renderCards(filteredData);
        genreTitle.innerText = `Resultados da busca por "${term}"`;
    }

    // --- LÓGICA DO MODAL ---
    async function openModal(item) {
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const videoContainer = document.getElementById('modal-video');

        modalTitle.innerText = item.titulo;
        modalDesc.innerText = 'Carregando detalhes...';
        videoContainer.innerHTML = `<iframe src="${item.trailer}?autoplay=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        setTimeout(() => modal.querySelector('.modal-content').style.transform = 'scale(1)', 10);
        renderModalDetails(item);
    }

    function renderModalDetails(details) {
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc'); 
        const modalInfoGrid = document.getElementById('modal-info-grid');
        const modalScreenshotsContainer = document.getElementById('modal-screenshots-container');
        const modalActions = document.getElementById('modal-actions');
        const modalAgeRating = document.getElementById('modal-age-rating');
        const screenshotsSection = document.getElementById('modal-screenshots-section');

        modalTitle.innerText = details.titulo;
        modalDesc.innerHTML = details.descricao || 'Descrição não disponível.';

        const platforms = details.plataformas.join(', ');
        
        modalInfoGrid.innerHTML = `
            <div class="info-item"><strong>Gênero</strong><span>${details.genero}</span></div>
            <div class="info-item"><strong>Plataformas</strong><span>${platforms}</span></div>
        `;

        modalAgeRating.textContent = details.classificacao.sigla;
        modalAgeRating.className = `age-rating rating-${details.classificacao.sigla}`;
        modalAgeRating.title = `Classificação: ${details.classificacao.descricao}`;
        modalAgeRating.style.display = 'block';

        screenshotsSection.style.display = 'none';
        modalScreenshotsContainer.innerHTML = '';

        modalActions.innerHTML = `
            <a href="${details.linkLoja}" target="_blank" class="btn btn-primary">
                <i data-lucide="shopping-cart"></i> Ver na Loja
            </a>
        `;
        lucide.createIcons();
    }

    function closeModal() {
        const videoContainer = document.getElementById('modal-video');
        modal.classList.remove('show');
        modal.querySelector('.modal-content').style.transform = 'scale(0.95)';
        setTimeout(() => {
            videoContainer.innerHTML = '';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    function scrollToGrid() {
        document.getElementById('content-area').scrollIntoView({ behavior: 'smooth' });
    }

    function loadInitialGames() {
        genreTitle.innerText = 'Catálogo Completo';
        renderCards(localGameDatabase);
    }

    // Event Listeners
    searchInput.addEventListener('input', handleSearch);
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('explore-now-btn').addEventListener('click', scrollToGrid);
    document.getElementById('view-catalog-btn').addEventListener('click', () => filterByGenre('Todos'));
    document.getElementById('logo-home').addEventListener('click', (e) => {
        e.preventDefault();
        filterByGenre('Todos');
    });

    navSearchToggle.addEventListener('click', () => {
        const searchContainer = document.querySelector('.nav-search');
        searchContainer.classList.toggle('active');
    });
    
    // --- LÓGICA DO TEMA ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const THEME_KEY = 'movie-site-theme'; // Chave para localStorage

    function applyTheme(isLight) {
        if (isLight) {
            body.classList.add('light-mode');
            localStorage.setItem(THEME_KEY, 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem(THEME_KEY, 'dark');
        }
    }

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'light') {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = body.classList.contains('light-mode');
            
            applyTheme(!isLight);
        });
    }


    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    // --- INICIALIZAÇÃO DA APLICAÇÃO ---
    loadInitialGames();
    populateGenreFilter();
}); 
