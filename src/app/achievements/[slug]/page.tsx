import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AchievementDetailPage from "../achievement-detail-page";
import { achievementDetails, getAchievementBySlug } from "@/data/achievements";

export async function generateStaticParams() {
  return achievementDetails.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);

  if (!achievement) {
    return undefined;
  }

  return {
    title: `${achievement.title} | Achievement`,
    description: achievement.summary,
  };
}

export default async function AchievementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);

  if (!achievement) {
    notFound();
  }

  return <AchievementDetailPage achievement={achievement} />;
}
