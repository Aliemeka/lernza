export const mockQuestStats = {
  enrollees: 124,
  rewardPool: 5000,
  milestones: 12,
  completedCount: 8,
  daysLeft: 14
}

export const mockMilestones = [
  {
    id: 1,
    title: "Project Setup",
    description: "Initialize the project with Stellar SDK",
    reward: 100,
    status: "completed" as const
  },
  {
    id: 2,
    title: "Smart Contract Deploy",
    description: "Deploy your first contract to Testnet",
    reward: 250,
    status: "in-progress" as const
  },
  {
    id: 3,
    title: "Frontend Integration",
    description: "Connect the UI to the Stellar network",
    reward: 150,
    status: "locked" as const
  }
]
