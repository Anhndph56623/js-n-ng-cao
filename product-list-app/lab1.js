const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
      'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
    ],
    [
      'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
      'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Players
const [players1, players2] = game.players;

// 2. Thủ môn và cầu thủ còn lại
const [gk, ...fieldPlayers] = players1;

// 3. Tất cả cầu thủ
const allPlayers = [...players1, ...players2];

// 4. Thêm cầu thủ thay người
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Tách odds
const { team1, x: draw, team2 } = game.odds;

// 6. Hàm in cầu thủ ghi bàn
function printGoals(...players) {
  console.log(`${players.length} bàn thắng đã được ghi`);
  for (const player of players) {
    console.log(player);
  }
}
printGoals(...game.scored);

// 7. Đội thắng không dùng if/else
const winner = (team1 < team2 && game.team1) || (team2 < team1 && game.team2);
console.log(`Đội chiến thắng là: ${winner}`);

// LAB 1.2

// 1. In từng cầu thủ ghi bàn
game.scored.forEach((player, i) => {
  console.log(`Goal ${i + 1}: ${player}`);
});

// 2. Trung bình odds
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`Tỉ lệ trung bình: ${average}`);

// 3. In odds đẹp
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'hòa' : `thắng của ${game[key]}`;
  console.log(`Tỉ lệ ${teamStr}: ${value}`);
}

// 4. Object scorers
const scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log('Scorers:', scorers);
