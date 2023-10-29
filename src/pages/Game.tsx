import { Table } from "../components/Game/Table";
import { Keyboard } from "../components/Table/Keyboard";
import { LeaderboardContainer } from "../components/UI/Leaderboard";
import { Navbar } from "../components/UI/Navbar";

export function Game() {
  return (
    <div className="game_layout">
      <Navbar />
      {/* <LeaderboardContainer></LeaderboardContainer> */}
      <Table />
      <Keyboard />
    </div>
  );
}
