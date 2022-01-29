export type Data = {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};

export type VersionResult = {
  data: Data[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
