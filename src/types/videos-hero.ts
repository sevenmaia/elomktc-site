export interface HeroVideoSlot {
  id: "vertical" | "horizontal";
  format: "vertical" | "horizontal";
  title: string;
  speakerOrTag?: string;
  caption: string;
  duration: string;
  videoUrl: string;
  posterUrl: string;
  altText: string;
  isPublished: boolean;
  publishedAt?: string;
  updatedAt?: string;
}

export interface HeroVideosData {
  published: {
    vertical: HeroVideoSlot | null;
    horizontal: HeroVideoSlot | null;
  };
  draft: {
    vertical: HeroVideoSlot | null;
    horizontal: HeroVideoSlot | null;
  };
  hasUnpublishedChanges: boolean;
  lastPublishedAt?: string;
}
