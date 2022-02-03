type Data = {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};

type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type VersionResult = {
  data: Data[];
  meta: Meta;
};
