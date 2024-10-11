export type FeedViewType = 'fire' | 'star';

export type Cat = {
  id: string;
  url: string;
  breeds: Breed[];
};

export type Breed = {
  id: string;
  name: string;
  origin: string;
  description: string;
};

export type VotePayload = {
  imageId: string;
  value: 1 | -1;
};
