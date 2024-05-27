import { BaseInfo, ChessBoard, Hero, MatchSchedule, Newsletter, Supporters, TournamentInfo, TournamentStages } from "@/components";


export default function Home() {
  return (
    <main>
      <Hero />
      <Supporters />
      <ChessBoard />
      <BaseInfo />
      <TournamentStages />
      <TournamentInfo />
      <Newsletter />
      <MatchSchedule />
    </main>
  );
}
