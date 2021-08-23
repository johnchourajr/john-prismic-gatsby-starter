import { useStaticQuery, graphql } from "gatsby";

export const useNavData = () => {
  const data = useStaticQuery(
    graphql`
      query navDataQuery {
        allPrismicPage(
          filter: {
            data: { hide_in_nav: { eq: false }, top_level_page: { eq: true } }
          }
          sort: { order: ASC, fields: data___nav_order }
        ) {
          edges {
            node {
              id
              uid
              url
              data {
                title
                nav_order
              }
            }
          }
        }
      }
    `
  );

  return data.allPrismicPage.edges;
};

export default useNavData;
