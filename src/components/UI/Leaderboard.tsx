function StatisticContainer({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="statistic_container">
      <span>{label}:</span> {content}
    </div>
  );
}

export function LeaderboardContainer() {
  return (
    <div className="leaderboard_container_overlay">
      <div className="leaderboard_container">
        <div className="header">Pontuações</div>
        <div className="statistics">
          <StatisticContainer
            label="Acertos Totais"
            content="0"
          ></StatisticContainer>
          <StatisticContainer
            label="Falhas Totais"
            content="0"
          ></StatisticContainer>
          <StatisticContainer
            label="Acertos Nesta Sessão"
            content="0"
          ></StatisticContainer>
          <StatisticContainer
            label="Falhas Nesta Sessão"
            content="0"
          ></StatisticContainer>
        </div>
      </div>
    </div>
  );
}
