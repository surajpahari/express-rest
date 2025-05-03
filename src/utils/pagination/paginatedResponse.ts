export const paginatedResponse = ({ total, page, perPage }: { page: number, perPage: number, total: any }) => {
  return {
    totalPage: Math.ceil(total / perPage),
    perPage: perPage,
    currentPage: page
  }
}
