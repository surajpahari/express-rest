export const paginatedResponse = ({
  total,
  page,
  perPage,
}: {
  page: number;
  perPage: number;
  total: any;
}) => {
  return {
    total: total,
    totalPage: Math.ceil(total / perPage),
    perPage: perPage,
    currentPage: page,
  };
};
