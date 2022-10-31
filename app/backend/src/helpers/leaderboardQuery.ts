const leaderboardQuery = `SELECT home.name,
(home.totalPoints + away.totalPoints) as totalPoints,
(home.totalGames + away.totalGames) as totalGames,
(home.totalVictories + away.totalVictories) as totalVictories,
(home.totalDraws + away.totalDraws) as totalDraws,
(home.totalLosses + away.totalLosses) as totalLosses,
(home.goalsFavor + away.goalsFavor) as goalsFavor,
(home.goalsOwn + away.goalsOwn) as goalsOwn,
(home.goalsBalance + away.goalsBalance) as goalsBalance,
ROUND(((home.totalPoints + away.totalPoints) / ((home.totalGames + away.totalGames) * 3) * 100),2)
as efficiency
FROM
(SELECT t.team_name as name,
SUM(CASE 
WHEN m.home_team_goals > m.away_team_goals THEN 3
WHEN m.home_team_goals = m.away_team_goals THEN 1
ELSE 0 END) as totalPoints,
COUNT(t.id) as totalGames,
SUM(CASE
WHEN m.home_team_goals > m.away_team_goals THEN 1
ELSE 0 END) as totalVictories,
SUM(CASE
WHEN m.home_team_goals = m.away_team_goals THEN 1
ELSE 0 END) as totalDraws,
SUM(CASE
WHEN m.home_team_goals < m.away_team_goals THEN 1
ELSE 0 END) as totalLosses,
SUM(m.home_team_goals) as goalsFavor,
SUM(m.away_team_goals) as goalsOwn,
SUM(m.home_team_goals) - SUM(m.away_team_goals) as goalsBalance
FROM TRYBE_FUTEBOL_CLUBE.matches as m
JOIN TRYBE_FUTEBOL_CLUBE.teams as t
ON m.home_team = t.id
WHERE m.in_progress = 0
GROUP BY t.id) as home
JOIN (SELECT t.team_name as name,
SUM(CASE 
WHEN m.away_team_goals > m.home_team_goals THEN 3
WHEN m.away_team_goals = m.home_team_goals THEN 1
ELSE 0 END) as totalPoints,
COUNT(t.id) AS totalGames,
SUM(CASE
WHEN m.away_team_goals > m.home_team_goals THEN 1
ELSE 0 END) as totalVictories,
SUM(CASE
WHEN m.away_team_goals = m.home_team_goals THEN 1
ELSE 0 END) as totalDraws,
SUM(CASE
WHEN m.away_team_goals < m.home_team_goals THEN 1
ELSE 0 END) as totalLosses,
SUM(m.away_team_goals) as goalsFavor,
SUM(m.home_team_goals) as goalsOwn,
SUM(m.away_team_goals) - SUM(m.home_team_goals)  goalsBalance
FROM TRYBE_FUTEBOL_CLUBE.matches as m
JOIN TRYBE_FUTEBOL_CLUBE.teams AS t
ON m.away_team = t.id
WHERE m.in_progress = 0
GROUP BY t.id) as away
ON home.name = away.name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC;`;

export default leaderboardQuery;
