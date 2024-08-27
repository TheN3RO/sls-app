"use client";

import { BaseInfo, ChessBoard, Hero, Newsletter, Supporters, TournamentInfo, TournamentStages } from "@/components/client";

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
    </main>
  );
}
